import { AiOutlinePlus } from "react-icons/ai";
import { SideMenuButton } from "../SideMenuButton";
import { SideMenuProps } from "../SideMenuPositioner";
import { BlockSchema } from "@blocknote/core";

export const AddBlockButton = <BSchema extends BlockSchema>(
  props: SideMenuProps<BSchema>
) => (
  <SideMenuButton onClick={props.addBlock} data-test={"dragHandleAdd"}>
    <AiOutlinePlus size={24} />
  </SideMenuButton>
);
