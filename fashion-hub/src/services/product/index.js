// add product

import Cookies from "js-cookie";

export const addNewProduct = async (FormData) => {
  try {
    const responce = await fetch("/api/admin/add-product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(FormData),
    });

    const finalData = await responce.json();
    return finalData;
     
  } catch (err) {
    console.log(err);
  }
};
