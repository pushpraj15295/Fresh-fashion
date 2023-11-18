export const navOptions = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "listing",
    label: "All Products",
    path: "/product/listing/all-products",
  },
  {
    id: "listingMen",
    label: "Men",
    path: "/product/listing/men",
  },
  {
    id: "listingWomen",
    label: "Women",
    path: "/product/listing/women",
  },
  {
    id: "listingKids",
    label: "kids",
    path: "/product/listing/kids",
  },
];

export const adminNavOptions = [
  {
    id: "adminNewProduct",
    label: "Add New Product",
    path: "/admin-view/add-product",
  },
  {
    id: "adminListing",
    label: "Manage All Products",
    path: "/admin-view/all-product",
  },
];

export const styles = {
    nav:"bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200",
    button:"mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
    nav_container:"max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
    logo_container:"flex item-center cursor-pointer",
    logo_span:"slef-center text-2xl font-semibold whitespace-nowwrap",
    category_container:"flex md:order-2 gap-2",
    menu_button:"inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    navItem_li:"cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0",
   
}