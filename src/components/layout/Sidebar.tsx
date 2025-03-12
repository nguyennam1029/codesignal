"use client";
import { menuItems } from "@/constants";
import { TMenuItem } from "@/types";
import { UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { ActiveLink } from "../common";
import { ModeToggle } from "../common/ModeToggle";
import { IconNext, IconUsers } from "../icons";

const Sidebar = () => {
  const { userId } = useAuth();
  return (
    <div className="p-5 my-2 ml-1 rounded-lg border-r border-r-gray-200 dark:border-opacity-10 bg-white dark:bg-grayDarker flex flex-col">
      <a
        href="/"
        className="font-bold text-3xl inline-block mb-5 h-10 self-start"
      >
        <span className="text-primary">U</span>
        <span className="text-2xl font-semibold">cademy</span>
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between dark:bg-[#0000005d] bg-opacity-10 mx-5 mb-5 p-3 rounded-lg border border-gray-500 dark:border-opacity-50">
        {!userId ? (
          <>
            <Link
              href="/sign-in"
              className="flex items-center justify-center gap-2 px-3 py-[7px] text-sm rounded-md text-white font-bold bg-[#8a67ff] hover:text-primary hover:bg-primary hover:bg-opacity-10 duration-150 ease-in-out"
            >
              Start Now
              <IconNext className="size-3 animate-bounce-right" />
            </Link>
          </>
        ) : (
          <UserButton />
        )}
        <ModeToggle />
      </div>
    </div>
  );
};

function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}

export default Sidebar;
