"use client";

import { Fragment, useContext } from "react";
import NavItems from "./NavItems";
import { GlobalContext } from "@/context";
import CommonModal from "../CommonModal";

const isAdminView = false;
const isAuthUser = true;
const user = { role: "admin" };

const Navbar = () => {
  const { showNavModal, setShowNavModal } = useContext(GlobalContext);

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex item-center cursor-pointer">
            <span className="slef-center text-2xl font-semibold whitespace-nowwrap">
              Fashion Hub
            </span>
          </div>

          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser && (
              <Fragment>
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
                  Account
                </button>
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
                  Cart
                </button>
              </Fragment>
            )}
            {user?.role === "admin" &&
              (isAdminView ? (
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
                  Client View
                </button>
              ) : (
                <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
                  Admin View
                </button>
              ))}
            {isAuthUser ? (
              <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
                Logout
              </button>
            ) : (
              <button className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white">
                Login
              </button>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setShowNavModal(!showNavModal)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <NavItems isAdminView={isAdminView} />
        </div>
      </nav>

      <CommonModal
        showModelTitle={false}
        mainContent={<NavItems isModalView={true} isAdminView={isAdminView} />}
        show={showNavModal}
        setShow={setShowNavModal}
      />
    </>
  );
};

export default Navbar;
