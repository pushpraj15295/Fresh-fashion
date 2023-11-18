"use client";

import { Fragment } from "react";
import NavItems from "./NavItems";
import { styles } from "@/utils";

const isAdminView = true;
const isAuthUser = false;
const user = { role: "admin" };

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav_container}>
        <div className={styles.logo_container}>
          <span className={styles.logo_span}>Fashion Hub</span>
        </div>

        <div className={styles.category_container}>
          {!isAdminView && isAuthUser && (
            <Fragment>
              <button className={styles.button}>Account</button>
              <button className={styles.button}>Cart</button>
            </Fragment>
          )}
          {user?.role === "admin" &&
            (isAdminView ? (
              <button className={styles.button}>Client View</button>
            ) : (
              <button className={styles.button}>Admin View</button>
            ))}
          {isAuthUser ? (
            <button className={styles.button}>Logout</button>
          ) : (
            <button className={styles.button}>Login</button>
          )}

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className={styles.menu_button}
            aria-controls="navbar-sticky"
            aria-expanded="false"
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
                d="M3 5a1 1 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <NavItems isAdminView={isAdminView} />
      </div>
    </nav>
  );
};

export default Navbar;
