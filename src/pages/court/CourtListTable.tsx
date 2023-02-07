import Link from "next/link";
import type { FC } from "react";
import type { SSGReadCourt } from "src/libs/court";
import { week } from "src/utils/week";

export const CourtListTable: FC<{ data: SSGReadCourt[] }> = (props) => {
  const today = new Date();
  const todayText = `${today.getMonth() + 1}/${today.getDate()}(${
    week[today.getDay()]
  })`;

  return (
    <div>
      <div className="grid w-full border-collapse grid-cols-[100px,1fr,50px] border-b border-gray-200">
        <div className="border-b border-gray-200 px-4 text-left text-xs font-semibold text-gray-400">
          日時
        </div>
        <div className="border-b border-gray-200 px-4 text-left text-xs font-semibold text-gray-400">
          コート
        </div>
        <div className="border-b border-gray-200 px-2 text-left text-xs font-semibold text-gray-400">
          空
        </div>

        {props.data?.map((court) => {
          return (
            <Link
              href={`/court/${court.id}`}
              key={court.id}
              className="col-span-3 grid grid-cols-[100px,1fr,50px]"
            >
              <div className="overflow-hidden border-b border-gray-200 px-4 py-2">
                <div className="whitespace-nowrap text-xs font-semibold">
                  {todayText}
                </div>
                <div className="whitespace-nowrap text-xs font-semibold">
                  {court.openToClose}
                </div>
              </div>
              <div className="space-y-2 overflow-hidden border-b border-gray-200 px-4 py-2">
                <div className="space-x-2">
                  <span className="rounded-3xl bg-green-500 py-[1px] px-2 text-xs font-semibold text-white">
                    {true ? "予約可" : "予約不可"}
                  </span>
                  <span className="text-xs text-gray-400 ">
                    {court.location?.prefecture}
                  </span>
                </div>
                <div className="w-full overflow-hidden whitespace-nowrap font-bold">
                  {court.name}
                </div>
              </div>
              <div className="border-b border-gray-200 p-2">
                {court.price?.citizens}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
