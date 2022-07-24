import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex h-[80px] items-center justify-between bg-gray-50 px-10 text-gray-700">
      <Link href="/privacy">
        <a className="hover:text-blue-400">プライバシーポリシー</a>
      </Link>
      <p>© 2022 A-Release企画。 All rights reserved</p>
      <div className="flex flex-row space-x-6">
        <FaTwitter size={20} className="hover:text-blue-400" />
        <FaYoutube size={20} className="hover:text-red-400" />
        <FaInstagram size={20} className="hover:text-orange-400" />
      </div>
    </div>
  );
};
