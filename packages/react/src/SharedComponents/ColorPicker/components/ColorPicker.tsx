import * as Ariakit from "@ariakit/react";
import { ColorIcon } from "./ColorIcon";
import { TiTick } from "react-icons/ti";
import "./color-menu.css";

export const ColorPicker = (props: {
  onClick?: () => void;
  iconSize?: number;
  text?: {
    color: string;
    setColor: (color: string) => void;
  };
  background?: {
    color: string;
    setColor: (color: string) => void;
  };
}) => {
  const TextColorSection = () =>
    props.text ? (
      <Ariakit.MenuGroup>
        <Ariakit.MenuGroupLabel className="group-label">
          Text
        </Ariakit.MenuGroupLabel>

        {[
          "default",
          "gray",
          "brown",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "purple",
          "pink",
        ].map((color) => (
          <Ariakit.MenuItemRadio
            name="textcolor"
            className="color-item"
            onClick={() => {
              props.onClick && props.onClick();
              props.text!.setColor(color);
            }}
            value={color}
            // component={"div"}
            // data-test={"text-color-" + color}
            // icon={<ColorIcon textColor={color} size={props.iconSize} />}
            // key={"text-color-" + color}
            // rightSection={
            //   props.text!.color === color ? (
            //     <TiTick size={16} style={{ paddingLeft: "8px" }} />
            //   ) : (
            //     <div style={{ width: "24px", padding: "0" }} />
            //   )
            // }>
          >
            <Ariakit.MenuItemCheck />
            <ColorIcon textColor={color} size={props.iconSize} />{" "}
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </Ariakit.MenuItemRadio>
        ))}
      </Ariakit.MenuGroup>
    ) : null;

  const BackgroundColorSection = () =>
    props.background ? (
      <Ariakit.MenuGroup>
        <Ariakit.MenuGroupLabel className="group-label">
          Background
        </Ariakit.MenuGroupLabel>
        {[
          "default",
          "gray",
          "brown",
          "red",
          "orange",
          "yellow",
          "green",
          "blue",
          "purple",
          "pink",
        ].map((color) => (
          <Ariakit.MenuItemRadio
            name="backgroundcolor"
            className="color-item"
            onClick={() => {
              props.onClick && props.onClick();
              props.background!.setColor(color);
            }}
            value={color}
            // component={"div"}
            // data-test={"background-color-" + color}
            // icon={<ColorIcon backgroundColor={color} size={props.iconSize} />}
            // key={"background-color-" + color}
            // rightSection={
            //   props.background!.color === color ? (
            //     <TiTick size={16} style={{ paddingLeft: "8px" }} />
            //   ) : (
            //     <div style={{ width: "24px", padding: "0" }} />
            //   )
            // }>
          >
            <Ariakit.MenuItemCheck />
            <ColorIcon backgroundColor={color} size={props.iconSize} />
            <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
          </Ariakit.MenuItemRadio>
        ))}
      </Ariakit.MenuGroup>
    ) : null;

  return (
    <>
      <TextColorSection />
      <BackgroundColorSection />
    </>
  );
};
