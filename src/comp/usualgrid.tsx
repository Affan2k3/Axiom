import React from "react";
import { svgdata } from "./svgriddata";

function Grid() {
  return (
    <div className=" my-20  grid  justify-center gap-y-10 min-[590px]:mx-10 min-[590px]:grid-cols-3">
      {svgdata.map((item) => (
        <div className="flex flex-col items-center px-6">
          <svg viewBox="0 0 100 100" className="h-[70px] ">
            <path
              d={item.svgpath}
              stroke="#000000"
              stroke-width="3"
              fill="#FFFFFF"
            />
          </svg>
          <h1 className=" items-center pt-2 text-center text-[25px] font-extrabold leading-8 min-[590px]:text-[28px]">
            {item.caption}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default Grid;
