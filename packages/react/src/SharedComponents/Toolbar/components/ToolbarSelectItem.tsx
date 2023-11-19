import * as Ariakit from "@ariakit/react";
import { IconType } from "react-icons";

export interface ToolbarSelectItemProps {
  value: string;
  text: string;
  icon?: IconType;
  onClick: (e: any) => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}

export function ToolbarSelectItem(props: ToolbarSelectItemProps) {
  const ItemIcon = props.icon;
  return (
    <Ariakit.SelectItem
      onClick={props.onClick}
      key={props.value}
      value={props.value}
      className="bn-select-item">
      <Ariakit.SelectItemCheck checked={props.isSelected} />
      {ItemIcon ? <ItemIcon /> : null} {props.text}
    </Ariakit.SelectItem>
  );
}
