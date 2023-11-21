"use client";

import { adminNavOptions, navOptions } from "@/utils";
const NavItems = ({ isAdminView, isModalView = false, router }) => {
  return (
    <div
      className={`items-center justify-between w-full md:flex md:w-auto pt-3 ${
        !isModalView && "hidden"
      }`}
      id="nav-items"
    >
      <ul
        className={`flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${
          isModalView ? "border-none" : "border border-gray-100"
        }`}
      >
        {isAdminView
          ? adminNavOptions?.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item?.id}
                onClick={() => router.push(item?.path)}
              >
                {item.label}
              </li>
            ))
          : navOptions?.map((item) => (
              <li
                className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0"
                key={item?.id}
                onClick={() => router.push(item?.path)}
              >
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default NavItems;
