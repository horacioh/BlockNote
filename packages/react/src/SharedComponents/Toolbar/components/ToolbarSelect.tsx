import * as Ariakit from "@ariakit/react";
import { ToolbarSelectItem, ToolbarSelectItemProps } from "./ToolbarSelectItem";

export interface ToolbarSelectProps {
  items: ToolbarSelectItemProps[];
  isDisabled?: boolean;
}

export function ToolbarSelect({ items }: ToolbarSelectProps) {
  return null;

  return (
    <Ariakit.SelectProvider value={selectedItem.text}>
      <Ariakit.Select
        aria-label="Text alignment"
        className="button secondary"
        render={<Ariakit.ToolbarItem />}>
        {value.text}
        <Ariakit.SelectArrow />
      </Ariakit.Select>
      <Ariakit.SelectPopover gutter={4} className="popover">
        {items.map((item) => (
          <ToolbarSelectItem item={item} />
        ))}
      </Ariakit.SelectPopover>
    </Ariakit.SelectProvider>
  );
}
