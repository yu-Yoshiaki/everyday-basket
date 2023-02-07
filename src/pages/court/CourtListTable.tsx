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
      <table className="w-full border-collapse border-b border-gray-200">
        <thead>
          <tr>
            <th className="border-b border-gray-200 px-4 text-left text-xs font-semibold text-gray-400">
              日時
            </th>
            <th className="border-b border-gray-200 px-4 text-left text-xs font-semibold text-gray-400">
              コート
            </th>
            <th className="border-b border-gray-200 px-2 text-left text-xs font-semibold text-gray-400">
              空
            </th>
          </tr>
        </thead>
        <tbody className="bg-green-50">
          {props.data?.map((court) => {
            return (
              <tr key={court.id}>
                <td className="max-w-[130px] truncate border-b border-gray-200 px-4 py-2">
                  <div className="whitespace-nowrap text-xs font-semibold">
                    {todayText}
                  </div>
                  <div className="whitespace-nowrap text-xs font-semibold">
                    {court.openToClose}
                  </div>
                </td>
                <td className="space-y-2 border-b border-gray-200 px-4 py-2">
                  <div className="space-x-2">
                    <span className="rounded-3xl bg-green-500 py-1 px-2 text-xs font-semibold text-white">
                      {true ? "予約可" : "予約不可"}
                    </span>
                    <span className="text-xs text-gray-400 ">
                      {court.location?.prefecture}
                    </span>
                  </div>
                  <div className="w-full overflow-hidden whitespace-nowrap font-bold">
                    {court.name}
                  </div>
                </td>
                <td className="border-b border-gray-200 p-2">
                  {court.price?.citizens}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
