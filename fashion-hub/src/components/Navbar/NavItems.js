"use client";

import { adminNavOptions, navOptions, styles } from "@/utils";

const NavItems = ({ isAdminView }) => {
  return (
    <div className={styles.navItem} id="nav-items">
      <ul className={styles.navItem_ul}>
        {isAdminView
          ? adminNavOptions?.map((item) => (
              <li className={styles.navItem_li} key={item?.id}>
                {item.label}
              </li>
            ))
          : navOptions?.map((item) => (
              <li className={styles.navItem_li} key={item?.id}>
                {item.label}
              </li>
            ))}
      </ul>
    </div>
  );
};

export default NavItems;
