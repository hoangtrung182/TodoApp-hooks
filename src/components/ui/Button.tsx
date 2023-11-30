import React from "react";

type Props = {
  name: string;
};

const Button = ({ name }: Props) => {
  return (
    <button className="px-4 py-2 w-[80px] text-center bg-blue-400 hover:opacity-70 hover:text-black text-white rounded hover:shadow-md">
      {name}
    </button>
  );
};

export default Button;
