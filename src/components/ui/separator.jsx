import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cx as cn } from "../../lib/utils";
import PropTypes from "prop-types";

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
}


Separator.propTypes = {
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  decorative: PropTypes.bool,
  className: PropTypes.string,
};

export { Separator };
