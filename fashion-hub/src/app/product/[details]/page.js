'use client'
import CommonDetails from "@/components/CommonDetails";
import { productById } from "@/services/product";

export default async function ProductDetails({ params }) {
  const productDetailsData = await productById(params.details);

  console.log(productDetailsData, "data");

  return productDetailsData ? (
    <CommonDetails item={productDetailsData.data} />
  ) : (
    <> productDetailsData not found </>
  );
}
