import React from "react";
import { Link } from "react-router-dom";

const AdDashboardPage = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3 px-3">
          <div className="h-[250px] mb-5 bg-white hover:shadow-lg rounded">
            <div className="p-5">
              <div className="flex items-center pb-5 mb-5 border-b border-b-slate-600">
                <span className=" rounded-[50%]">
                  <img
                    src="https://picsum.photos/120/120"
                    className=" object-cover rounded-[50%]"
                    alt=""
                  />
                </span>
                <div className="pl-[50px]">
                  <h3 className=" text-3xl text-black">Admin</h3>
                  <p className="text-sm text-grey-200">Hoang v trung</p>
                </div>
              </div>
              <div className=" text-sm">
                Sinh ngày:
                <span className="ml-[70px]">18/2/1999</span>
              </div>
              <div className="text-sm">
                Chuyên ngành
                <span className="ml-[46px]">Front-end</span>
              </div>
            </div>
          </div>
          <div className="h-[250px] mb-5 bg-white hover:shadow-lg rounded pb-4">
            <div className="p-5 border-b border-slate-300 box-border">
              <span>Kỹ Năng</span>
            </div>
            <div className="p-5 mb-4">
              Vue
              <div className="relative leading-none flex items-center">
                <div className="grow box-border">
                  <div className="h-2 rounded bg-gray-400 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-[79.4%] bg-green-700"></div>
                  </div>
                </div>
                <div className="">79.4%</div>
              </div>
              TypeScript
              <div className="relative leading-none flex items-center">
                <div className="grow box-border">
                  <div className="h-2 rounded bg-gray-400 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-[61.5%] bg-red-600"></div>
                  </div>
                </div>
                <div className="">61.5%</div>
              </div>
              HTML
              <div className="relative leading-none flex items-center">
                <div className="grow box-border">
                  <div className="h-2 rounded bg-gray-400 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-[40%] bg-yellow-300"></div>
                  </div>
                </div>
                <div className="">40%</div>
              </div>
              CSS
              <div className="relative leading-none flex items-center">
                <div className="grow box-border">
                  <div className="h-2 rounded bg-gray-400 overflow-hidden relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 w-[33.3%] bg-blue-800"></div>
                  </div>
                </div>
                <div className="">33.3%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">B</div>
      </div>
      <div className="nho"></div>
    </div>
  );
};

export default AdDashboardPage;
