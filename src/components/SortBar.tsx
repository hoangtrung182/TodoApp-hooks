import React, { useState } from "react";
import { SelectOptions } from "./SelectOptions";

const SortBar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const btnContainer = [
    { id: 1, title: "Phổ biến" },
    { id: 2, title: "Mới nhất" },
    { id: 3, title: "Bán chạy" },
  ];

  const handleClick = (index: number) => {
    setActiveIndex((p) => (p === index ? null : index));
  };
  return (
    <div className="flex items-center">
      <span>Sắp xếp theo: </span>
      <div className="space-x-3 m-4">
        {btnContainer.map((btn: any, index: number) => {
          return (
            <button
              className={`w-[120px] h-[30px] bg-gray-400 text-white ${
                activeIndex === index && "bg-orange-900"
              } hover:bg-orange-900`}
              onClick={() => handleClick(index)}
              key={btn.id}
            >
              {btn.title}
            </button>
          );
        })}
      </div>
      <SelectOptions />
    </div>
  );
};

export default SortBar;
