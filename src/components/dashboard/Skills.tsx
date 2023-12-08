import React from "react";

type Props = {
  number: string;
  color: string;
};

const Skills = ({ number, color }: Props) => {
  const width = `w-[${Number(number)}%]`;
  return (
    <div className="relative leading-none flex items-center">
      <div className="grow box-border">
        <div className="h-2 rounded bg-gray-400 overflow-hidden relative">
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 w-[30%] bg-${color}-700`}
          ></div>
        </div>
      </div>
      <div className="">{number}%</div>
    </div>
  );
};

export default Skills;
