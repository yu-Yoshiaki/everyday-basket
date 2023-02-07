import Link from "next/link";
import type { FC } from "react";
import React from "react";
import { kanto, kinki, other } from "src/utils/prefectures";

const items = [
  { label: "エブリデイバスケとは", href: "" },
  { label: "利用規約", href: "" },
  { label: "空きコート", href: "" },
  { label: "バッシュ", href: "" },
  { label: "ニュース", href: "" },
  { label: "ショップ", href: "" },
  { label: "お問合せ", href: "" },
  { label: "よくある質問", href: "" },
  { label: "プライバシーポリシー", href: "" },
];
export const Footer: FC = () => {
  return (
    <div className="space-y-10 bg-gray-800 py-8 px-6 pb-32 text-gray-200">
      <div className="py-2 text-2xl font-bold md:text-3xl">
        <span className="inline-block">🏀</span>エブリデイバスケ
      </div>
      <div className="mb-10 grid grid-cols-2 justify-center gap-x-8 gap-y-2">
        {items.map(({ href, label }) => {
          return (
            <Link
              key={label}
              href={href}
              className="whitespace-nowrap border-b-2 border-gray-800 text-left font-semibold hover:text-white"
            >
              {label}
            </Link>
          );
        })}
      </div>
      <div className="space-y-6 border-t py-5">
        <div className="text-lg font-bold">バスケットコートを探す</div>
        <div>
          <div className="mb-4 border-gray-300 font-semibold text-white">
            関東のバスケットコート
          </div>
          <ul className="flex flex-wrap gap-3">
            {kanto.map((area) => {
              return (
                <li key={area}>
                  <button
                    value={area}
                    className="rounded-md border border-gray-400 py-1 px-4 font-semibold "
                  >
                    {area}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <div className=" mb-4 border-gray-300 font-semibold text-white">
            近畿のバスケットコート
          </div>
          <ul className="flex flex-wrap gap-3">
            {kinki.map((area) => {
              return (
                <li key={area}>
                  <button
                    value={area}
                    className="rounded-md border border-gray-400 py-1 px-4 font-semibold "
                  >
                    {area}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <div className="mb-4 border-gray-300 font-semibold text-white">
            各地域のバスケットコート
          </div>
          <ul className="flex flex-wrap gap-3">
            {other.map((area) => {
              return (
                <li key={area}>
                  <button
                    value={area}
                    className="rounded-md border border-gray-400 py-1 px-4 font-semibold "
                  >
                    {area}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div>© 2022 α-Release企画 All rights reserved</div>
    </div>
  );
};
