import { ChevronLeftIcon, HeartIcon } from "@heroicons/react/24/outline";
import { FacebookIcon, LineIcon, TwitterIcon } from "react-share";

const courtData = {
  images: [],
  name: "立川市泉市民体育館",
  area: "東京都",
  homepage: "https://home.com",
  reservepage: "https://reserve.com",
  tel: "042-123-4567",
  daylimit: "7:00~22:00",
  holiday: "毎週木",
  address: "東京都立川市泉町",
  access: "多摩モノレール　泉体育館を降りて目の前",
  map: "",
  prices: [{ planName: "市内", description: "400円" }],
  insitution: "トイレあり、プールあり、シャワーあり、更衣室、駐車場",
};

export const Detail = () => {
  return (
    <div>
      <div className="p-2">
        <button className="flex items-center gap-2 p-2 font-semibold">
          <ChevronLeftIcon width={16} height={16} /> 前へ戻る
        </button>
      </div>
      <div className="flex h-[240px] w-full items-center justify-center bg-white">
        Image
      </div>

      <div className="space-y-10 p-4">
        <div className="space-y-3">
          <span className="font-semibold text-green-500">東京都</span>
          <h2 className="text-3xl font-bold">{courtData.name}</h2>
          <div className="flex gap-5">
            <TwitterIcon className="h-7 w-7 rounded-full" />
            <LineIcon className="h-7 w-7 rounded-full" />
            <FacebookIcon className="h-7 w-7 rounded-full" />
            {true ? (
              <HeartIcon className="h-7 w-7 rounded-full text-red-400" />
            ) : (
              <HeartIcon className="h-7 w-7 rounded-full" />
            )}
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">空きコート・予約</h3>
          <p>現在の空き状況です。予約サイトで予約を行ってください。</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">コート情報</h3>
          <p className="rounded-md bg-yellow-200 p-2">
            ⚠️ご利用の際は公式ホームページの方をご確認ください。
          </p>
          <dl className="divide-y">
            <div className="flex items-center justify-between border-t bg-white py-3">
              <dt className="text-sm font-semibold ">ホームページ</dt>
              <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                {courtData.homepage}
              </dd>
            </div>
            <div className="flex items-center justify-between bg-white py-3">
              <dt className="text-sm font-semibold ">予約ページ</dt>
              <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                {courtData.reservepage}
              </dd>
            </div>
            <div className="flex items-center justify-between bg-white py-3">
              <dt className="text-sm font-semibold ">電話番号</dt>
              <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                {courtData.tel}
              </dd>
            </div>
            <div className="flex items-center justify-between bg-white py-3">
              <dt className="text-sm font-semibold ">営業時間</dt>
              <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                {courtData.daylimit}
              </dd>
            </div>
          </dl>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">料金</h3>
          {courtData.prices.map((price, index) => {
            return (
              <dl className="divide-y" key={index}>
                <div className="flex items-center justify-between gap-6 border-t bg-white py-3">
                  <dt className="text-sm font-semibold ">{price.planName}</dt>
                  <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                    {price.description}
                  </dd>
                </div>
              </dl>
            );
          })}
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl font-bold">施設情報</h3>
          <dl className="divide-y">
            <div className="flex items-center justify-between gap-6 border-t bg-white py-3">
              <dt className="whitespace-nowrap text-sm font-semibold">
                {"施設"}
              </dt>
              <dd className="mt-1 text-gray-900 sm:col-span-2 sm:mt-0">
                {courtData.insitution}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};
