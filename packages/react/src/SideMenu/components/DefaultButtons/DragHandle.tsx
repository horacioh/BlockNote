import * as Ariakit from "@ariakit/react";
import { SideMenuButton } from "../SideMenuButton";
import { MdDragIndicator } from "react-icons/md";
import { SideMenuProps } from "../SideMenuPositioner";
import { BlockSchema } from "@blocknote/core";
import { DefaultDragHandleMenu } from "../DragHandleMenu/DefaultDragHandleMenu";

export const DragHandle = <BSchema extends BlockSchema>(
  props: SideMenuProps<BSchema>
) => {
  const DragHandleMenu = props.dragHandleMenu || DefaultDragHandleMenu;
  const menu = Ariakit.useMenuStore();

  return (
    <Ariakit.MenuProvider
      setOpen={(val) => {
        if (val) {
          props.freezeMenu();
        } else {
          props.unfreezeMenu();
        }
      }}
      placement={"left"}>
      <Ariakit.MenuButton className="bn-button">
        {/* <div
          draggable="true"
          onDragStart={props.blockDragStart}
          onDragEnd={props.blockDragEnd}>
          <SideMenuButton> */}
        <MdDragIndicator size={24} data-test={"dragHandle"} />
        {/* </SideMenuButton> */}
        {/* </div> */}
      </Ariakit.MenuButton>
      <DragHandleMenu editor={props.editor} block={props.block} />
    </Ariakit.MenuProvider>
  );
};
