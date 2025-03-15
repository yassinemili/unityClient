import * as DrawerPrimitives from "@radix-ui/react-dialog";
import { RiCloseLine } from "@remixicon/react";
import React from "react";
import { cx, focusRing } from "../lib/utils";
import Button from "./ui/Button";

import PropTypes from "prop-types";

const Drawer = (props) => {
  return <DrawerPrimitives.Root tremor-id="tremor-raw" {...props} />;
};
Drawer.displayName = "Drawer";

const DrawerTrigger = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitives.Trigger ref={ref} className={cx(className)} {...props} />
  );
});
DrawerTrigger.displayName = "Drawer.Trigger";

const DrawerClose = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <DrawerPrimitives.Close ref={ref} className={cx(className)} {...props} />
  );
});
DrawerClose.displayName = "Drawer.Close";

const DrawerPortal = DrawerPrimitives.Portal;
DrawerPortal.displayName = "DrawerPortal";

const DrawerOverlay = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DrawerPrimitives.Overlay
        ref={forwardedRef}
        className={cx(
          "fixed inset-0 z-50 overflow-y-auto",
          "bg-black/30 dark:bg-black/60",
          "data-[state=closed]:animate-hide data-[state=open]:animate-dialogOverlayShow",
          className
        )}
        {...props}
        style={{
          animationDuration: "400ms",
          animationFillMode: "backwards",
        }}
      />
    );
  }
);
DrawerOverlay.displayName = "DrawerOverlay";

const DrawerContent = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DrawerPortal>
        <DrawerOverlay>
          <DrawerPrimitives.Content
            ref={forwardedRef}
            className={cx(
              "fixed inset-y-2 mx-auto flex w-[95vw] flex-1 flex-col overflow-y-auto rounded-md border p-4 shadow-lg focus:outline-none max-sm:inset-x-2 sm:inset-y-2 sm:right-2 sm:max-w-lg sm:p-6",
              "border-gray-200 dark:border-gray-900",
              "bg-white dark:bg-[#090E1A]",
              "data-[state=closed]:animate-drawerSlideRightAndFade data-[state=open]:animate-drawerSlideLeftAndFade",
              focusRing,
              className
            )}
            {...props}
          />
        </DrawerOverlay>
      </DrawerPortal>
    );
  }
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = React.forwardRef(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className="-mx-6 flex items-start justify-between gap-x-4 border-b border-gray-200 px-6 pb-4 dark:border-gray-900"
        {...props}
      >
        <div className={cx("mt-1 flex flex-col gap-y-1", className)}>
          {children}
        </div>
        <DrawerPrimitives.Close asChild>
          <Button
            variant="ghost"
            className="aspect-square p-1 text-gray-500 hover:bg-gray-100 hover:dark:bg-gray-400/10"
          >
            <RiCloseLine className="size-6" aria-hidden="true" />
          </Button>
        </DrawerPrimitives.Close>
      </div>
    );
  }
);
DrawerHeader.displayName = "Drawer.Header";

const DrawerTitle = React.forwardRef(
  ({ className, ...props }, forwardedRef) => (
    <DrawerPrimitives.Title
      ref={forwardedRef}
      className={cx(
        "text-base font-semibold",
        "text-gray-900 dark:text-gray-50",
        className
      )}
      {...props}
    />
  )
);
DrawerTitle.displayName = "DrawerTitle";

const DrawerBody = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cx("flex-1 py-4", className)} {...props} />;
});
DrawerBody.displayName = "Drawer.Body";

const DrawerDescription = React.forwardRef(
  ({ className, ...props }, forwardedRef) => {
    return (
      <DrawerPrimitives.Description
        ref={forwardedRef}
        className={cx("text-gray-500 dark:text-gray-500", className)}
        {...props}
      />
    );
  }
);
DrawerDescription.displayName = "DrawerDescription";

const DrawerFooter = ({ className, ...props }) => {
  return (
    <div
      className={cx(
        "flex flex-col-reverse border-t border-gray-200 pt-4 sm:flex-row sm:justify-end sm:space-x-2 dark:border-gray-900",
        className
      )}
      {...props}
    />
  );
};
DrawerFooter.displayName = "DrawerFooter";

Drawer.propTypes = {
  children: PropTypes.node,
};

DrawerTrigger.propTypes = {
  className: PropTypes.string,
};

DrawerClose.propTypes = {
  className: PropTypes.string,
};

DrawerOverlay.propTypes = {
  className: PropTypes.string,
};

DrawerContent.propTypes = {
  className: PropTypes.string,
};

DrawerHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

DrawerTitle.propTypes = {
  className: PropTypes.string,
};

DrawerBody.propTypes = {
  className: PropTypes.string,
};

DrawerDescription.propTypes = {
  className: PropTypes.string,
};

DrawerFooter.propTypes = {
  className: PropTypes.string,
};

export {
  Drawer,
  DrawerBody,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
};
