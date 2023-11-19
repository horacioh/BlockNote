import {
  Block,
  BlockNoteEditor,
  BlockSchema,
  PartialBlock,
} from "@blocknote/core";
import { useMemo, useState } from "react";
import { IconType } from "react-icons";
import {
  RiH1,
  RiH2,
  RiH3,
  RiListOrdered,
  RiListUnordered,
  RiText,
} from "react-icons/ri";
import { useEditorChange } from "../../../hooks/useEditorChange";
import { useSelectedBlocks } from "../../../hooks/useSelectedBlocks";
import { ToolbarSelect } from "../../../SharedComponents/Toolbar/components/ToolbarSelect";

export type BlockTypeSelectItem = {
  value: string;
  name: string;
  type: string;
  props?: Record<string, boolean | number | string>;
  icon: IconType;
  isSelected: (block: Block<BlockSchema>) => boolean;
};

export const defaultBlockTypeSelectItems: Array<BlockTypeSelectItem> = [
  {
    value: "paragraph",
    name: "Paragraph",
    type: "paragraph",
    icon: RiText,
    isSelected: (block) => block.type === "paragraph",
  },
  {
    value: "heading-1",
    name: "Heading 1",
    type: "heading",
    props: { level: 1 },
    icon: RiH1,
    isSelected: (block) =>
      block.type === "heading" &&
      "level" in block.props &&
      block.props.level === 1,
  },
  {
    value: "heading-2",
    name: "Heading 2",
    type: "heading",
    props: { level: 2 },
    icon: RiH2,
    isSelected: (block) =>
      block.type === "heading" &&
      "level" in block.props &&
      block.props.level === 2,
  },
  {
    value: "heading-3",
    name: "Heading 3",
    type: "heading",
    props: { level: 3 },
    icon: RiH3,
    isSelected: (block) =>
      block.type === "heading" &&
      "level" in block.props &&
      block.props.level === 3,
  },
  {
    value: "ul-list-item",
    name: "Bullet List",
    type: "bulletListItem",
    icon: RiListUnordered,
    isSelected: (block) => block.type === "bulletListItem",
  },
  {
    value: "ol-list-item",
    name: "Numbered List",
    type: "numberedListItem",
    icon: RiListOrdered,
    isSelected: (block) => block.type === "numberedListItem",
  },
];

export const BlockTypeSelect = <BSchema extends BlockSchema>({
  editor,
  items = defaultBlockTypeSelectItems,
}: {
  editor: BlockNoteEditor<BSchema>;
  items?: Array<BlockTypeSelectItem>;
}) => {
  const selectedBlocks = useSelectedBlocks(editor);

  const [block, setBlock] = useState(
    () => editor.getTextCursorPosition().block
  );

  const filteredItems: Array<BlockTypeSelectItem> = useMemo(() => {
    return items.filter((item) => {
      // Checks if block type exists in the schema
      if (!(item.type in editor.schema)) {
        return false;
      }

      // Checks if props for the block type are valid
      for (const [prop, value] of Object.entries(item.props || {})) {
        const propSchema = editor.schema[item.type].propSchema;

        // Checks if the prop exists for the block type
        if (!(prop in propSchema)) {
          return false;
        }

        // Checks if the prop's value is valid
        if (
          propSchema[prop].values !== undefined &&
          !propSchema[prop].values!.includes(value)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [editor, items]);

  const shouldShow: boolean = useMemo(
    () => filteredItems.find((item) => item.type === block.type) !== undefined,
    [block.type, filteredItems]
  );

  // TODO: change any with ToolbarSelectItemProps
  const fullItems: Array<any> = useMemo(() => {
    const onClick = (item: BlockTypeSelectItem) => {
      editor.focus();

      for (const block of selectedBlocks) {
        editor.updateBlock(block, {
          type: item.type,
          props: item.props,
        } as PartialBlock<BlockSchema>);
      }
    };

    return filteredItems.map((item) => ({
      value: item.value,
      text: item.name,
      icon: item.icon,
      onClick: () => onClick(item),
      isSelected: item.isSelected(block as Block<BlockSchema>),
    }));
  }, [block, filteredItems, editor, selectedBlocks]);

  useEditorChange(editor, () => {
    setBlock(editor.getTextCursorPosition().block);
  });

  if (!shouldShow) {
    return null;
  }

  return <ToolbarSelect aria-label="Block type" items={fullItems} />;
};
