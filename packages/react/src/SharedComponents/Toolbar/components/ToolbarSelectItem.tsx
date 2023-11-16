import * as Ariakit from "@ariakit/react";
import { IconType } from "react-icons";

export interface ToolbarSelectItemProps {
  value: string;
  text: string;
  icon?: IconType;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export function ToolbarSelectItem(props: ToolbarSelectItemProps) {
  return (
    <Ariakit.SelectItem
      key={props.value}
      value={props.text}
      className="select-item">
      {props.icon} {props.text}
    </Ariakit.SelectItem>
  );
}
