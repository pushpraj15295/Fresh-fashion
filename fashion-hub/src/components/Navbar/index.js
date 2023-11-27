"use client";

import { GlobalContext } from "@/context";
import { adminNavOptions, navOptions } from "@/utils";
import { Fragment, useContext, useEffect } from "react";
import CommonModal from "../CommonModal";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import CartModal from "../CartModal";
import NavItems from "./NavItems";

const Navbar = () => {
  const {
    user,
    setUser,
    isAuthUser,
    showNavModal,
    setIsAuthUser,
    showCartModal,
    setShowNavModal,
    setShowCartModal,
    currentUpdatedProduct,
    setCurrentUpdatedProduct,
  } = useContext(GlobalContext);

  const router = useRouter();
  //save route in pathname
  const pathName = usePathname();

  const handleLogout = () => {
    setIsAuthUser(false);
    setUser(null);
    Cookies.remove("token");
    localStorage.clear();
    router.push("/");
  };

  const isAdminView = pathName.includes("admin-view");

  useEffect(() => {
    if (
      pathName !== "/admin-view/add-product" &&
      currentUpdatedProduct !== null
    )
      setCurrentUpdatedProduct(null);
      setShowCartModal(false);
  }, [pathName]);

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 pl-10 pr-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pb-2 pt-1">
          <div className="flex item-center cursor-pointer">
            <img
              onClick={() => router.push("/")}
              src="/fashionHubLogo.png"
              alt="logo"
              width="160px"
            />
          </div>

          <div className="flex md:order-2 gap-2">
            {!isAdminView && isAuthUser && (
              <Fragment>
                <button
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-sm"
                  onClick={() => router.push("/account")}
                >
                  Account
                </button>
                <button
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-sm"
                  onClick={() => setShowCartModal(!showCartModal)}
                >
                  Cart
                </button>
              </Fragment>
            )}
            {user?.role === "admin" &&
              (isAdminView ? (
                <button
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-sm"
                  onClick={() => router.push("/")}
                >
                  Client View
                </button>
              ) : (
                <button
                  className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-sm"
                  onClick={() => router.push("/admin-view")}
                >
                  Admin View
                </button>
              ))}
            {isAuthUser ? (
              <button
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-sm"
                onClick={handleLogout}
              >
                Logout
              </button>
            ) : (
              <button
                className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white rounded-sm"
                onClick={() => router.push("/login")}
              >
                Login
              </button>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 rounded-sm"
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
          <NavItems isAdminView={isAdminView} router={router} />
        </div>
      </nav>

      <CommonModal
        showModelTitle={false}
        mainContent={
          <NavItems
            isModalView={true}
            isAdminView={isAdminView}
            router={router}
          />
        }
        show={showNavModal}
        setShow={setShowNavModal}
      />

      {showCartModal && <CartModal />}
    </>
  );
};

export default Navbar;
