const courts = [
  {
    date: "1/27",
    time: "19:00-22:00",
    name: "立川市泉市民体育館",
    isReserve: false,
    area: "東京都",
    empty: 10,
  },
  {
    date: "1/27",
    time: "19:00-22:00",
    name: "東大和市体育館",
    isReserve: false,
    area: "東京都",
    empty: 5,
  },
  {
    date: "1/27",
    time: "19:00-22:00",
    name: "第七中学校",
    isReserve: true,
    area: "東京都",
    empty: 5,
  },
];

export const CourtListTable = () => {
  return (
    <table className="w-full border-collapse border-b border-gray-200">
      <thead>
        <tr>
          <th className="border-b border-gray-200 px-4 text-left text-xs font-semibold text-gray-400">
            日時
          </th>
          <th className="border-b border-gray-200 px-4 text-left text-xs font-semibold text-gray-400">
            コート
          </th>{" "}
          <th className="border-b border-gray-200 px-2 text-left text-xs font-semibold text-gray-400">
            空
          </th>
        </tr>
      </thead>
      <tbody>
        {courts.map((court) => {
          return (
            <tr key={court.name}>
              <td className="border-b border-gray-200 px-4 py-2">
                <div>{court.date}</div>
                <div className="whitespace-nowrap">{court.time}</div>
              </td>
              <td className="space-y-2 border-b border-gray-200 px-4 py-2">
                <div className="space-x-2">
                  <span className="rounded-3xl bg-green-500 p-1 px-2 text-xs font-semibold text-white">
                    {court.isReserve ? "予約可" : "予約不可"}
                  </span>
                  <span className="text-xs text-gray-400 ">{court.area}</span>
                </div>
                <div className="w-full overflow-hidden whitespace-nowrap text-lg font-bold">
                  {court.name}
                </div>
              </td>
              <td className="border-b border-gray-200 p-2">{court.empty}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
