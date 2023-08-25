"use client";

import { demos, type Item } from "@/lib/demos";
// import { NextLogo } from "#/ui/next-logo";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
// import { MenuAlt2Icon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { useState } from "react";
import Byline from "./byline";

export function EditorNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

return (
  <div className="pt-20">
    <div className="fixed z-10 h-full w-1/3 bg-white lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">

    <div className="flex flex-col items-center">
    <div className="row flex pt-2">
      <button className="border-2 border-solid border-indigo-500 text-black hover:text-white flex h-8 w-2/3 items-center justify-center text-sm transition-all focus:outline-none font-semibold pr-4 pl-4 mr-4">
        <p>ASSETS</p>
      </button>

      <button className="border-2 border-solid border-indigo-500 text-black hover:text-white flex h-8 w-2/3 items-center justify-center text-sm transition-all focus:outline-none font-semibold pr-4 pl-4 mr-4">
        <p>FABBRIC</p>
      </button>

      <button className="border-2 border-solid border-indigo-500 text-black hover:text-white flex h-8 w-2/3 items-center justify-center text-sm transition-all focus:outline-none font-semibold pr-4 pl-4">
        <p>AD-ONS</p>
      </button>

    </div>

      <nav className="space-y-6 px-2 py-5">
        {demos.map((section) => {
          return (
            <div key={section.name}>

              <div className="mb-2 px-3 text-xs text-primary font-semibold uppercase tracking-wider">
                <div>{section.name}</div>
              </div>

              <div className="absolute left-0 bottom-0 h-0.5 bg-primary w-full" />

              <div className="space-y-1">
                {section.items.map((item) => (
                  <GlobalNavItem key={item.slug} item={item} close={close} />
                ))}

              </div>
            </div>
          );
        })}
      </nav>

      <Byline className="absolute hidden sm:block" />
    </div>

    </div>
  </div>


);

}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
