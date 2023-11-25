import * as Ariakit from "@ariakit/react";
import { PolymorphicComponentProps } from "@mantine/utils";

export const DragHandleMenuItem = (
  props: PolymorphicComponentProps<"button"> & Ariakit.MenuItemProps
) => {
  const { children, ...remainingProps } = props;
  return <Ariakit.MenuItem {...remainingProps}>{children}</Ariakit.MenuItem>;
};
