import * as Ariakit from "@ariakit/react";

export const SideMenuButton = (props: {
  onClick: Ariakit.ButtonProps["onClick"];
  children: JSX.Element;
}) => (
  <Ariakit.Button
    className="bn-button bn-sidemenu-button"
    onClick={props.onClick}>
    {props.children}
  </Ariakit.Button>
);
