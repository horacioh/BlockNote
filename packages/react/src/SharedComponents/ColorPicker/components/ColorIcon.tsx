import "./color-icon.css";

export const ColorIcon = (
  props: Partial<{
    textColor: string | undefined;
    backgroundColor: string | undefined;
    size: number | undefined;
  }>
) => {
  const color = props.textColor || "black";
  const backgroundColor = props.backgroundColor || "white";
  const size = props.size || 16;

  return (
    <div
      className="bn-color-icon"
      style={{
        fontSize: (size * 0.75).toString() + "px",
        height: size.toString() + "px",
        lineHeight: size.toString() + "px",
        width: size.toString() + "px",
        color,
        backgroundColor,
      }}
      // <Box
      //   className={classes.root}
      //   sx={() => {
      //     return {
      //       pointerEvents: "none",
      //       // TODO: update this with the correct colors
      //       backgroundColor: "white",
      //       color: "black",
      //       fontSize: (size * 0.75).toString() + "px",
      //       height: size.toString() + "px",
      //       lineHeight: size.toString() + "px",
      //       textAlign: "center",
      //       width: size.toString() + "px",
      //     };
      //   }}>
    >
      A
    </div>
  );
};
