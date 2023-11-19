import * as Ariakit from "@ariakit/react";
import Tippy from "@tippyjs/react";
import { ForwardedRef, forwardRef, MouseEvent } from "react";
import { IconType } from "react-icons";
import { TooltipContent } from "../../Tooltip/components/TooltipContent";

export type ToolbarButtonProps = {
  onClick?: (e: MouseEvent) => void;
  icon?: IconType;
  mainTooltip: string;
  secondaryTooltip?: string;
  isSelected?: boolean;
  children?: any;
  isDisabled?: boolean;
};

/**
 * Helper for basic buttons that show in the formatting toolbar.
 */
export const ToolbarButton = forwardRef(
  (props: ToolbarButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const ButtonIcon = props.icon;
    const content = props.children ? (
      props.children
    ) : ButtonIcon ? (
      <ButtonIcon size={16} />
    ) : undefined;
    return (
      <Ariakit.TooltipProvider>
        <Ariakit.TooltipAnchor>
          <Ariakit.Button
            data-selected={props.isSelected ? "true" : undefined}
            className="bn-toolbar-button"
            onClick={props.onClick}
            data-test={
              props.mainTooltip.slice(0, 1).toLowerCase() +
              props.mainTooltip.replace(/\s+/g, "").slice(1)
            }
            disabled={props.isDisabled || false}>
            {content}
          </Ariakit.Button>
        </Ariakit.TooltipAnchor>
        <Ariakit.Tooltip>
          <TooltipContent
            mainTooltip={props.mainTooltip}
            secondaryTooltip={props.secondaryTooltip}
          />
        </Ariakit.Tooltip>
      </Ariakit.TooltipProvider>
    );
    return (
      <Tippy
        content={
          <TooltipContent
            mainTooltip={props.mainTooltip}
            secondaryTooltip={props.secondaryTooltip}
          />
        }
        trigger={"mouseenter"}>
        {/*Creates an ActionIcon instead of a Button if only an icon is provided as content.*/}
        {props.children ? (
          <Button
            onClick={props.onClick}
            data-selected={props.isSelected ? "true" : undefined}
            data-test={
              props.mainTooltip.slice(0, 1).toLowerCase() +
              props.mainTooltip.replace(/\s+/g, "").slice(1)
            }
            size={"xs"}
            disabled={props.isDisabled || false}
            ref={ref}>
            {ButtonIcon && <ButtonIcon size={16} />}
            {props.children}
          </Button>
        ) : (
          <ActionIcon
            onClick={props.onClick}
            data-selected={props.isSelected ? "true" : undefined}
            data-test={
              props.mainTooltip.slice(0, 1).toLowerCase() +
              props.mainTooltip.replace(/\s+/g, "").slice(1)
            }
            size={30}
            disabled={props.isDisabled || false}
            ref={ref}>
            {ButtonIcon && <ButtonIcon />}
          </ActionIcon>
        )}
      </Tippy>
    );
  }
);
