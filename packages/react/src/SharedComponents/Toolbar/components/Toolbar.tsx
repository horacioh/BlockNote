import { Toolbar as AKToolbar, TooltipProvider } from "@ariakit/react";
import { mergeCSSClasses } from "@blocknote/core";
import { forwardRef, HTMLAttributes, useMemo } from "react";
import "./toolbar.css";

export const Toolbar = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const className = useMemo(
    () => mergeCSSClasses("bn-toolbar", props.className),
    [props.className]
  );
  return (
    <AKToolbar className={className} ref={ref} {...props}>
      {props.children}
    </AKToolbar>
  );
});
