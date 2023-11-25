import * as Ariakit from "@ariakit/react";
import { ReactNode, useCallback, useRef, useState } from "react";
import { HiChevronRight } from "react-icons/hi";
import { BlockSchema, PartialBlock } from "@blocknote/core";

import { DragHandleMenuProps } from "../DragHandleMenu";
import { DragHandleMenuItem } from "../DragHandleMenuItem";
import { ColorPicker } from "../../../../SharedComponents/ColorPicker/components/ColorPicker";
import { usePreventMenuOverflow } from "../../../../hooks/usePreventMenuOverflow";

export const BlockColorsButton = <BSchema extends BlockSchema>(
  props: DragHandleMenuProps<BSchema> & { children: ReactNode }
) => {
  const [opened, setOpened] = useState(false);

  const { ref, updateMaxHeight } = usePreventMenuOverflow();

  const menuCloseTimer = useRef<NodeJS.Timeout | undefined>();

  const startMenuCloseTimer = useCallback(() => {
    if (menuCloseTimer.current) {
      clearTimeout(menuCloseTimer.current);
    }
    menuCloseTimer.current = setTimeout(() => {
      setOpened(false);
    }, 250);
  }, []);

  const stopMenuCloseTimer = useCallback(() => {
    if (menuCloseTimer.current) {
      clearTimeout(menuCloseTimer.current);
    }

    if (!opened) {
      updateMaxHeight();
    }

    setOpened(true);
  }, [opened, updateMaxHeight]);

  if (
    !("textColor" in props.block.props) &&
    !("backgroundColor" in props.block.props)
  ) {
    return null;
  }

  return (
    <DragHandleMenuItem
      {...props}
      onMouseLeave={startMenuCloseTimer}
      onMouseOver={stopMenuCloseTimer}>
      <Ariakit.MenuProvider placement="right" open={opened}>
        <Ariakit.MenuButton>
          {props.children} <HiChevronRight size={15} />
        </Ariakit.MenuButton>
        <Ariakit.Menu
          ref={ref}
          onMouseLeave={startMenuCloseTimer}
          onMouseOver={stopMenuCloseTimer}>
          <ColorPicker
            iconSize={18}
            text={
              "textColor" in props.block.props &&
              typeof props.block.props.textColor === "string"
                ? {
                    color: props.block.props.textColor,
                    setColor: (color) =>
                      props.editor.updateBlock(props.block, {
                        props: { textColor: color },
                      } as PartialBlock<BSchema>),
                  }
                : undefined
            }
            background={
              "backgroundColor" in props.block.props &&
              typeof props.block.props.backgroundColor === "string"
                ? {
                    color: props.block.props.backgroundColor,
                    setColor: (color) =>
                      props.editor.updateBlock(props.block, {
                        props: { backgroundColor: color },
                      } as PartialBlock<BSchema>),
                  }
                : undefined
            }
          />
        </Ariakit.Menu>
      </Ariakit.MenuProvider>
    </DragHandleMenuItem>
  );
};
