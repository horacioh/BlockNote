import { ReactNode } from "react";
import { BlockSchema } from "@blocknote/core";

import { DragHandleMenuProps } from "../DragHandleMenu";
import { DragHandleMenuItem } from "../DragHandleMenuItem";

export const RemoveBlockButton = <BSchema extends BlockSchema>(
  props: DragHandleMenuProps<BSchema> & { children: ReactNode }
) => {
  let { editor, ...restProps } = props;
  return (
    <DragHandleMenuItem
      onClick={() => props.editor.removeBlocks([props.block])}
      {...restProps}
    />
  );
};
