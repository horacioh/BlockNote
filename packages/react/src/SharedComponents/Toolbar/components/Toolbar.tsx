import { Toolbar as AKToolbar } from "@ariakit/react";
import { mergeCSSClasses } from "@blocknote/core";
import { HTMLAttributes, forwardRef, useMemo } from "react";
import "./toolbar.css";

export const Toolbar = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const className = useMemo(
    () =>
      props.className
        ? mergeCSSClasses("bn-toolbar", props.className)
        : "bn-toolbar",
    [props.className]
  );
  return (
    <AKToolbar className={className} ref={ref} {...props}>
      {props.children}
    </AKToolbar>
  );
});
