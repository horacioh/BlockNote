import { ReactNode } from "react";
import * as Ariakit from "@ariakit/react";
import { Block, BlockNoteEditor, BlockSchema } from "@blocknote/core";

export type DragHandleMenuProps<BSchema extends BlockSchema> = {
  editor: BlockNoteEditor<BSchema>;
  block: Block<BSchema>;
};

export const DragHandleMenu = (props: { children: ReactNode }) => {
  return (
    <Ariakit.Menu style={{ overflow: "visible" }}>
      {props.children}
    </Ariakit.Menu>
  );
};
