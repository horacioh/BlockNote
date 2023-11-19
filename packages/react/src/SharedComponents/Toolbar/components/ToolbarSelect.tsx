import * as Ariakit from "@ariakit/react";
import { ToolbarSelectItem, ToolbarSelectItemProps } from "./ToolbarSelectItem";
import "./toolbar-select.css";

export interface ToolbarSelectProps {
  items: ToolbarSelectItemProps[];
  isDisabled?: boolean;
  "aria-label": string;
}

export function ToolbarSelect({ items, ...props }: ToolbarSelectProps) {
  const selectedItem = items.filter((p) => p.isSelected)[0];

  if (!selectedItem) {
    return null;
  }

  return (
    <Ariakit.SelectProvider value={selectedItem.value}>
      <Ariakit.Select
        {...props}
        className="bn-toolbar-button"
        render={<Ariakit.ToolbarItem />}>
        {selectedItem.text}
        <Ariakit.SelectArrow />
      </Ariakit.Select>
      <Ariakit.SelectPopover gutter={4} className="bn-popover">
        {items.map((item) => (
          <ToolbarSelectItem key={item.value} {...item} />
        ))}
      </Ariakit.SelectPopover>
    </Ariakit.SelectProvider>
  );
}
