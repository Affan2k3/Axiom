import React from "react";

function Grid() {
  return (
    <div className=" my-20 grid  justify-center gap-y-10 min-[590px]:mx-10 min-[590px]:grid-cols-3">
      <div className="flex flex-col items-center px-6">
        <svg viewBox="0 0 100 100" className="h-[70px] ">
          <path
            d="M15.33 86.58h69.34s-30.67-40.37-69.34 0zM43.15 46.69s9 8.83 9.27 22M82.06 13.43s-27.38-1.32-25.37 25.16c0 0 23 5.54 25.37-25.16zM82.06 13.43L56.69 38.59M63.19 32.17l13.16-.45M70.05 25.35l9.7-.34M63.19 32.17l.45-13.07M70.05 25.35l.34-9.91M50.64 59.11a32.68 32.68 0 0 1 6-20.52M18 21.31S16.67 48.7 43.15 46.69c0 0 5.54-23-25.15-25.38zM17.99 21.31l25.16 25.38M36.73 40.19l-.45-13.16M29.91 33.33l-.34-9.7M36.73 40.19l-13.08-.45M29.91 33.33L20 32.99"
            stroke="#000000"
            stroke-width="3"
            fill="#FFFFFF"
          />
        </svg>
        <h1 className=" items-center pt-2 text-center text-[25px] font-extrabold leading-8 min-[590px]:text-[28px]">
          Sustainable Materials
        </h1>
      </div>
      <div className="flex flex-col items-center px-6">
        <svg viewBox="0 0 100 100" className="h-[70px] ">
          <path
            d="M23.17 58.17l8.79-4a9.51 9.51 0 0 1 6.88-.37l22.25 7.31A4.52 4.52 0 0 1 63.41 68a4.51 4.51 0 0 1-5 1.77L43.8 65.32M79.37 16.94a12.34 12.34 0 0 0-17.44 0l-.79.79-.78-.79a12.34 12.34 0 1 0-17.44 17.45l.78.78 17.44 17.45 17.45-17.45.78-.78a12.34 12.34 0 0 0 0-17.45z M63.41 68l21-10.58a4.16 4.16 0 0 1 5.67 2 4.17 4.17 0 0 1-1.93 5.39L54 82a3.35 3.35 0 0 1-2.16.25L39 75.82l-7.31 3.06M22.76 86.67L9.6 55.92l10.24-4.64 13.17 30.75-10.25 4.64"
            stroke="#000000"
            stroke-width="3"
            fill="#FFFFFF"
          />
        </svg>
        <h1 className=" items-center pt-2 text-center text-[25px] font-extrabold leading-8 min-[590px]:text-[28px]">
          Supporting Local Charity
        </h1>
      </div>
      <div className="flex flex-col items-center px-4">
        <svg viewBox="0 0 100 100" className="h-[70px] ">
          <path
            d="M88.78 28.25v47.18h-9.42v10.58L62.91 75.43H32.55V28.25h56.23zM41.85 42.53h37.51M41.85 51.83h37.51M41.85 61.14h26.58
            M67.45 13.99v14.26h-34.9v35.83l-11.91 7.67V61.16h-9.42V13.99h56.23z"
            stroke="#000000"
            stroke-width="3"
            fill="#FFFFFF"
          />
        </svg>

        <h1 className=" items-center pt-2 text-center text-[25px] font-extrabold leading-8 min-[590px]:text-[28px]">
          90-Days Return Policy
        </h1>
      </div>
    </div>
  );
}

export default Grid;
