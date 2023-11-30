import React from "react";

const Tags = () => {
  const tagLists = [
    { name: "Tag 1", active: false },
    { name: "Tag 2 Todo" },
    { name: "Tag 3 Products", active: true },
    { name: "Tag 4 User" },
    { name: "5" },
  ];

  return (
    <div className="relative h-[30px] overflow-hidden bg-white pr-[120px] shadow-md">
      <ul className="box-border w-full h-full">
        {tagLists.map((tag, index) => (
          <li
            key={index}
            className={`flex items-center float-left ${
              tag.active && "bg-blue-300 text-white"
            }  rounded-sm overflow-hidden cursor-pointer h-[23px] bg-white text-grey-300 text-sm mx-2 my-1 px-2`}
          >
            <p className="float-left max-w-[80px] overflow-hidden whitespace-nowrap text-ellipsis mr-1 text-slate-900">
              {tag.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
