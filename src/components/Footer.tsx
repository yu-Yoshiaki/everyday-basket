import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="grid grid-rows-3 flex-col gap-4 bg-gray-800 py-8 px-20 text-center text-gray-200">
      <div className="order-first flex items-center justify-center gap-6 md:order-none">
        <FaTwitter size={20} className="text-blue-400 hover:text-white" />
        <FaYoutube size={20} className="text-red-400 hover:text-white" />
        <FaInstagram size={20} className="text-orange-400 hover:text-white" />
      </div>
      <div className="flex justify-center gap-4">
        <Link
          href="/privacy"
          className="border-b-2 border-gray-800 font-semibold hover:text-gray-500"
        >
          プライバシーポリシー
        </Link>
        <Link
          href="/privacy"
          className="border-b-2 border-gray-800 font-semibold hover:text-gray-500"
        >
          特定商取引
        </Link>
      </div>
      <p>© 2022 A-Release企画 All rights reserved</p>
    </div>
  );
};
