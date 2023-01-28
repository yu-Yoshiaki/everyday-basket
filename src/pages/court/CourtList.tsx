// import Image from "next/image";
// import { useState } from "react";
import { Meta } from "src/components/Meta";
import { CourtListTable } from "src/pages/court/CourtListTable";

export const CourtList = () => {
  // const [area, setArea] = useState();
  return (
    <>
      <Meta />
      <div className="space-y-5">
        <div className="mt-5 flex w-full items-center gap-2 overflow-x-scroll px-4">
          <button
            className={`whitespace-nowrap rounded-md py-2 px-4 text-lg  ${
              true
                ? "bg-green-500 font-semibold text-white"
                : "border border-lime-600 text-green-500"
            }`}
          >
            全国
          </button>
          <button
            className={`whitespace-nowrap rounded-md py-2 px-4 text-lg ${
              false
                ? "bg-green-500 font-semibold text-white"
                : "border border-green-500 text-green-500"
            }`}
          >
            募集中
          </button>
          <button
            className={`whitespace-nowrap rounded-md py-2 px-4 text-lg ${
              true
                ? "bg-green-500 font-semibold text-white"
                : "border border-green-500 text-green-500"
            }`}
          >
            レベル
          </button>
          <button
            className={`whitespace-nowrap rounded-md py-2 px-4 text-lg ${
              false
                ? "bg-green-500 font-semibold text-white"
                : "border border-green-500 text-green-500"
            }`}
          >
            日時
          </button>
          <div className="text-center">
            <button
              className={`h-8 w-8 whitespace-nowrap rounded-full border border-green-500 text-center text-green-500`}
            >
              ✖️
            </button>
          </div>
        </div>
        <CourtListTable />
      </div>
    </>
  );
};
