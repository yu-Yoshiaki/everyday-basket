import { Dialog, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { signOut } from "firebase/auth";
import Link from "next/link";
import type { FC, ReactNode } from "react";
import { Fragment, useState } from "react";
import { useAuth } from "src/libs/auth";
import { auth } from "src/libs/firebase";

const items = [
  {
    name: "お知らせ",
    href: "/news",
  },
  {
    name: "チャット",
    href: "/chat",
  },
  {
    name: "My ブログ",
    href: "/user/blog",
  },
  {
    name: "クレジットカード情報",
    href: "/credit",
  },
  {
    name: "予約したコードの一覧",
    href: "/user/court/reserved",
  },
  {
    name: "気になるイベント",
    href: "/user/news/like",
  },
  {
    name: "気になるコート",
    href: "/user/court/like",
  },
  {
    name: "アカウント設定",
    href: "/account/setting",
  },
  {
    name: "お問合せ",
    href: "/contact",
  },
];

export const UserMenu: FC<{ children: ReactNode }> = (props) => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((pre) => {
      return !pre;
    });
  };

  const handleSignout = () => {
    return signOut(auth);
  };

  return (
    <div>
      <button className="font-semibold" onClick={handleIsOpen}>
        {props.children}
      </button>
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-200 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="border-b px-4 sm:px-6">
                        <Dialog.Title className={"flex items-center"}>
                          <Link
                            href={`/user/${user?.uid}/info`}
                            onClick={handleIsOpen}
                            className="flex items-center gap-2 text-lg font-medium text-gray-900"
                          >
                            <UserCircleIcon width={50} height={50} />
                            マイページ
                          </Link>
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <div className="absolute inset-0 space-y-8 px-4 sm:px-6">
                          {items.map(({ name }) => {
                            return <div key={name}>{name}</div>;
                          })}
                          <button onClick={handleSignout}>ログアウト</button>
                        </div>

                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};
