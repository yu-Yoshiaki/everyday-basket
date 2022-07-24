import Link from "next/link";
import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-gray-50 px-10 text-gray-700 md:flex-row">
      <Link href="/privacy">
        <a className="flex h-[40px] items-center justify-center hover:text-blue-400 md:h-[80px]">
          プライバシーポリシー
        </a>
      </Link>
      <p className="flex h-[40px] items-center justify-center md:h-[80px]">
        © 2022 A-Release企画 All rights reserved
      </p>
      <div className="order-first flex h-[40px] flex-row items-center justify-center space-x-6 md:order-none md:h-[80px]">
        <FaTwitter size={20} className="hover:text-blue-400" />
        <FaYoutube size={20} className="hover:text-red-400" />
        <FaInstagram size={20} className="hover:text-orange-400" />
      </div>
    </div>
  );
};
