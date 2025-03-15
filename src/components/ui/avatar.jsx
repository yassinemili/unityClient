import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cx as cn } from "../../lib/utils";
import PropTypes from "prop-types";

function Avatar({ className, ...props }) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  );
}

Avatar.propTypes = {
  className: PropTypes.string,
};

AvatarImage.propTypes = {
  className: PropTypes.string,
};

AvatarFallback.propTypes = {
  className: PropTypes.string,
};

export { Avatar, AvatarImage, AvatarFallback };
