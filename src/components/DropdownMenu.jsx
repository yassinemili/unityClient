import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";
import {
  RiArrowRightSLine,
  RiCheckboxBlankCircleLine,
  RiCheckLine,
  RiRadioButtonFill,
} from "@remixicon/react";
import React from "react";
import PropTypes from "prop-types";

import { cx } from "../lib/utils";

const DropdownMenu = DropdownMenuPrimitives.Root;
DropdownMenu.displayName = "DropdownMenu";
DropdownMenu.propTypes = {
  children: PropTypes.node,
};

const DropdownMenuTrigger = DropdownMenuPrimitives.Trigger;
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
DropdownMenuTrigger.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const DropdownMenuGroup = DropdownMenuPrimitives.Group;
DropdownMenuGroup.displayName = "DropdownMenuGroup";
DropdownMenuGroup.propTypes = {
  children: PropTypes.node,
};

const DropdownMenuSubMenu = DropdownMenuPrimitives.Sub;
DropdownMenuSubMenu.displayName = "DropdownMenuSubMenu";
DropdownMenuSubMenu.propTypes = {
  children: PropTypes.node,
};

const DropdownMenuRadioGroup = DropdownMenuPrimitives.RadioGroup;
DropdownMenuRadioGroup.displayName = "DropdownMenuRadioGroup";
DropdownMenuRadioGroup.propTypes = {
  children: PropTypes.node,
};

const DropdownMenuSubMenuTrigger = React.forwardRef((props, forwardedRef) => (
  <DropdownMenuPrimitives.SubTrigger
    ref={forwardedRef}
    className={cx(
      // base
      "relative flex cursor-default select-none items-center rounded py-1.5 pl-2 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
      // text color
      "text-gray-900 dark:text-gray-50",
      // disabled
      "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
      // focus
      "focus-visible:bg-gray-100 data-[state=open]:bg-gray-100 focus-visible:dark:bg-gray-900 data-[state=open]:dark:bg-gray-900",
      // hover
      "hover:bg-gray-100 hover:dark:bg-gray-900",
      props.className
    )}
    {...props}
  >
    {props.children}
    <RiArrowRightSLine
      className="ml-auto size-4 shrink-0 dark:text-gray-500"
      aria-hidden="true"
    />
  </DropdownMenuPrimitives.SubTrigger>
));
DropdownMenuSubMenuTrigger.displayName = "DropdownMenuSubMenuTrigger";
DropdownMenuSubMenuTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const DropdownMenuSubMenuContent = React.forwardRef((props, forwardedRef) => {
  const { className, collisionPadding = 8, ...rest } = props;
  return (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.SubContent
        ref={forwardedRef}
        collisionPadding={collisionPadding}
        className={cx(
          // base
          "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
          // widths
          "min-w-32",
          // heights
          "max-h-[var(--radix-popper-available-height)]",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // text color
          "text-gray-900 dark:text-gray-50",
          // border color
          "border-gray-200 dark:border-gray-800",
          // transition
          "will-change-[transform,opacity]",
          "data-[state=closed]:animate-hide",
          "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
          className
        )}
        {...rest}
      />
    </DropdownMenuPrimitives.Portal>
  );
});
DropdownMenuSubMenuContent.displayName = "DropdownMenuSubMenuContent";
DropdownMenuSubMenuContent.propTypes = {
  className: PropTypes.string,
  collisionPadding: PropTypes.number,
  children: PropTypes.node,
};

const DropdownMenuContent = React.forwardRef((props, forwardedRef) => {
  const {
    className,
    sideOffset = 8,
    collisionPadding = 8,
    align = "center",
    loop = true,
    ...rest
  } = props;
  return (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        ref={forwardedRef}
        className={cx(
          // base
          "relative z-50 overflow-hidden rounded-md border p-1 shadow-xl shadow-black/[2.5%]",
          // widths
          "min-w-48",
          // heights
          "max-h-[var(--radix-popper-available-height)]",
          // background color
          "bg-white dark:bg-[#090E1A]",
          // text color
          "text-gray-900 dark:text-gray-50",
          // border color
          "border-gray-200 dark:border-gray-800",
          // transition
          "will-change-[transform,opacity]",
          "data-[state=closed]:animate-hide",
          "data-[side=bottom]:animate-slideDownAndFade data-[side=left]:animate-slideLeftAndFade data-[side=right]:animate-slideRightAndFade data-[side=top]:animate-slideUpAndFade",
          className
        )}
        sideOffset={sideOffset}
        align={align}
        collisionPadding={collisionPadding}
        loop={loop}
        {...rest}
      />
    </DropdownMenuPrimitives.Portal>
  );
});
DropdownMenuContent.displayName = "DropdownMenuContent";
DropdownMenuContent.propTypes = {
  className: PropTypes.string,
  sideOffset: PropTypes.number,
  collisionPadding: PropTypes.number,
  align: PropTypes.oneOf(["center", "start", "end"]),
  loop: PropTypes.bool,
  children: PropTypes.node,
};

const DropdownMenuItem = React.forwardRef((props, forwardedRef) => {
  const { className, shortcut, hint, children, ...rest } = props;
  return (
    <DropdownMenuPrimitives.Item
      ref={forwardedRef}
      className={cx(
        // base
        "group/DropdownMenuItem relative flex cursor-pointer select-none items-center rounded py-1.5 pl-2 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
        // focus
        "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900",
        // hover
        "hover:bg-gray-100 hover:dark:bg-gray-900",
        className
      )}
      tremor-id="tremor-raw"
      {...rest}
    >
      {children}
      {hint && (
        <span
          className={cx(
            "ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600"
          )}
        >
          {hint}
        </span>
      )}
      {shortcut && (
        <span
          className={cx(
            "ml-auto pl-2 text-sm text-gray-400 dark:text-gray-600"
          )}
        >
          {shortcut}
        </span>
      )}
    </DropdownMenuPrimitives.Item>
  );
});
DropdownMenuItem.displayName = "DropdownMenuItem";
DropdownMenuItem.propTypes = {
  className: PropTypes.string,
  shortcut: PropTypes.string,
  hint: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const DropdownMenuCheckboxItem = React.forwardRef((props, forwardedRef) => {
  const { className, hint, shortcut, children, checked, ...rest } = props;
  return (
    <DropdownMenuPrimitives.CheckboxItem
      ref={forwardedRef}
      className={cx(
        // base
        "relative flex cursor-pointer select-none items-center gap-x-2 rounded py-1.5 pl-8 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
        // focus
        "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900",
        // hover
        "hover:bg-gray-100 hover:dark:bg-gray-900",
        className
      )}
      checked={checked}
      {...rest}
    >
      <span className="absolute left-2 flex size-4 items-center justify-center">
        <DropdownMenuPrimitives.ItemIndicator>
          <RiCheckLine
            aria-hidden="true"
            className="size-full shrink-0 text-gray-800 dark:text-gray-200"
          />
        </DropdownMenuPrimitives.ItemIndicator>
      </span>
      {children}
      {hint && (
        <span
          className={cx(
            "ml-auto text-sm font-normal text-gray-400 dark:text-gray-600"
          )}
        >
          {hint}
        </span>
      )}
      {shortcut && (
        <span
          className={cx(
            "ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600"
          )}
        >
          {shortcut}
        </span>
      )}
    </DropdownMenuPrimitives.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
DropdownMenuCheckboxItem.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  shortcut: PropTypes.string,
  children: PropTypes.node.isRequired,
  checked: PropTypes.bool,
};

const DropdownMenuRadioItem = React.forwardRef((props, forwardedRef) => {
  const {
    className,
    hint,
    shortcut,
    children,
    iconType = "radio",
    ...rest
  } = props;
  return (
    <DropdownMenuPrimitives.RadioItem
      ref={forwardedRef}
      className={cx(
        // base
        "group/DropdownMenuRadioItem relative flex cursor-pointer select-none items-center gap-x-2 rounded py-1.5 pl-8 pr-1 outline-none transition-colors data-[state=checked]:font-semibold sm:text-sm",
        // text color
        "text-gray-900 dark:text-gray-50",
        // disabled
        "data-[disabled]:pointer-events-none data-[disabled]:text-gray-400 data-[disabled]:hover:bg-none dark:data-[disabled]:text-gray-600",
        // focus
        "focus-visible:bg-gray-100 focus-visible:dark:bg-gray-900",
        // hover
        "hover:bg-gray-100 hover:dark:bg-gray-900",
        className
      )}
      {...rest}
    >
      {iconType === "radio" ? (
        <span className="absolute left-2 flex size-4 items-center justify-center">
          <RiRadioButtonFill
            aria-hidden="true"
            className="size-full shrink-0 text-blue-500 group-data-[state=checked]/DropdownMenuRadioItem:flex group-data-[state=unchecked]/DropdownMenuRadioItem:hidden dark:text-blue-500"
          />
          <RiCheckboxBlankCircleLine
            aria-hidden="true"
            className="size-full shrink-0 text-gray-300 group-data-[state=unchecked]/DropdownMenuRadioItem:flex group-data-[state=checked]/DropdownMenuRadioItem:hidden dark:text-gray-700"
          />
        </span>
      ) : iconType === "check" ? (
        <span className="absolute left-2 flex size-4 items-center justify-center">
          <RiCheckLine
            aria-hidden="true"
            className="size-full shrink-0 text-gray-800 group-data-[state=checked]/DropdownMenuRadioItem:flex group-data-[state=unchecked]/DropdownMenuRadioItem:hidden dark:text-gray-200"
          />
        </span>
      ) : null}
      {children}
      {hint && (
        <span
          className={cx(
            "ml-auto text-sm font-normal text-gray-400 dark:text-gray-600"
          )}
        >
          {hint}
        </span>
      )}
      {shortcut && (
        <span
          className={cx(
            "ml-auto text-sm font-normal tracking-widest text-gray-400 dark:border-gray-800 dark:text-gray-600"
          )}
        >
          {shortcut}
        </span>
      )}
    </DropdownMenuPrimitives.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
DropdownMenuRadioItem.propTypes = {
  className: PropTypes.string,
  hint: PropTypes.string,
  shortcut: PropTypes.string,
  children: PropTypes.node.isRequired,
  iconType: PropTypes.oneOf(["check", "radio"]),
};

const DropdownMenuLabel = React.forwardRef((props, forwardedRef) => {
  const { className, ...rest } = props;
  return (
    <DropdownMenuPrimitives.Label
      ref={forwardedRef}
      className={cx(
        // base
        "px-2 py-2 text-xs font-medium tracking-wide",
        // text color
        "text-gray-500 dark:text-gray-500",
        className
      )}
      {...rest}
    />
  );
});
DropdownMenuLabel.displayName = "DropdownMenuLabel";
DropdownMenuLabel.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

const DropdownMenuSeparator = React.forwardRef((props, forwardedRef) => {
  const { className, ...rest } = props;
  return (
    <DropdownMenuPrimitives.Separator
      ref={forwardedRef}
      className={cx(
        "-mx-1 my-1 h-px border-t border-gray-200 dark:border-gray-800",
        className
      )}
      {...rest}
    />
  );
});
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
DropdownMenuSeparator.propTypes = {
  className: PropTypes.string,
};

const DropdownMenuIconWrapper = (props) => {
  const { className, ...rest } = props;
  return (
    <div
      className={cx(
        // text color
        "text-gray-600 dark:text-gray-400",
        // disabled
        "group-data-[disabled]/DropdownMenuItem:text-gray-400 group-data-[disabled]/DropdownMenuItem:dark:text-gray-700",
        className
      )}
      {...rest}
    />
  );
};
DropdownMenuIconWrapper.displayName = "DropdownMenuIconWrapper";
DropdownMenuIconWrapper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuIconWrapper,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
};
