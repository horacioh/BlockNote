import * as Ariakit from "@ariakit/react";
import "./tooltip.css";

export const TooltipContent = (props: {
  mainTooltip: string;
  secondaryTooltip?: string;
}) => {
  return (
    <Ariakit.Tooltip>
      <span className="bn-tooltip-primary">{props.mainTooltip}</span>
      {props.secondaryTooltip && (
        <span className="bn-tooltip-secondary">{props.secondaryTooltip}</span>
      )}
    </Ariakit.Tooltip>
  );
};
