import React from "react";

interface Props {
  error: string;
  size?: string;
}

const Error = ({ error, size }: Props) => {
  return (
    <span
      className={`text-red-600 w-full text-md px-2 py-[2px] text-[${size}] text-sm`}
    >
      {error}
    </span>
  );
};

export default Error;
