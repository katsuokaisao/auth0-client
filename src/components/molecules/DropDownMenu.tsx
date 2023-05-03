import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";

import LogOutButton from "../atoms/LogOutButton";
import DefaultUserIcon from "../atoms/DefaultUserIcon";

type Props = {
  // ユーザー画像のURL
  imageUrl: string;
};

export default function DropDownMenu({ imageUrl }: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="w-14 h-14 px-2 py-2 bg-transparent">
        {imageUrl === "" ? (
          DefaultUserIcon()
        ) : (
          <Image
            src={imageUrl}
            alt="ユーザー画像"
            fill
            className="rounded-full"
          />
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute w-24 right-0 z-10 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item
            as="div"
            className={"block py-2 px-1 text-xs text-gray-700"}
          >
            <LogOutButton></LogOutButton>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
