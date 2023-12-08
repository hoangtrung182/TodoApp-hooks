import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
} from "@material-tailwind/react";
type PopoverProps = {
  name: string;
  icon: string;
};

export function PopoverWithDescription({ name, icon }: PopoverProps) {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover} placement="right">
      <PopoverHandler {...triggers}>
        <i className={`${icon}`}></i>
      </PopoverHandler>
      <PopoverContent
        {...triggers}
        className="h-[20px] flex items-center justify-center text-white ml-4 bg-black"
      >
        <div className="">
          <span>{name}</span>
        </div>
      </PopoverContent>
    </Popover>
  );
}
