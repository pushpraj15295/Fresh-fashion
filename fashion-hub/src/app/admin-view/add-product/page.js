"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import TileComponent from "@/components/FormElements/TileComponent";
import UploadImageComponent from "@/components/FormElements/UploadImageComponent";
import { addNewProduct } from "@/services/product";
import {
  adminAddNewProductformControls,
  AvailableSize,
  firebaseConfig,
  firebaseStorageURL,
} from "@/utils";
import { initializeApp } from "firebase/app";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useState } from "react";
import { resolve } from "styled-jsx/css";
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app, firebaseStorageURL);
const createUniqueFileName = (getFile) => {
  const timestamps = Date.now();
  const randomStringValue = Math.random().toString(36).substring(2, 12);

  return `${getFile.name}-${timestamps}-${randomStringValue}`;
};

async function helperForUPloadingImageToFirebase(file) {
  const getFileName = createUniqueFileName(file);
  const storageReference = ref(storage, `ecommerce/${getFileName}`);
  const uploadImage = uploadBytesResumable(storageReference, file);

  return new Promise((resolve, reject) => {
    uploadImage.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
        reject(error);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref)
          .then((downloadurl) => resolve(downloadurl))
          .catch((error) => reject(error));
      }
    );
  });
}

const initialFormData = {
  name: "",
  price: 0,
  description: "",
  category: "men",
  sizes: [],
  deliveryInfo: "",
  onSale: "no",
  imageUrl: "",
  priceDrop: 0,
};

// ---------------------------------------------------------------------//
const AdminAddNewProduct = () => {
  const [image, setImage] = useState("");
  const [formData, setFormData] = useState(initialFormData);
  async function handleImage(event) {
    const extractImageUrl = await helperForUPloadingImageToFirebase(
      event.target.files[0]
    );

    console.log(extractImageUrl);
    setImage(URL.createObjectURL(event.target.files[0]));

    if (extractImageUrl !== "") {
      setFormData({
        ...formData,
        imageUrl: extractImageUrl,
      });
    }
  }

  const handleTileClick = (getCurrentItem) => {
    let copySizes = [...formData.sizes];
    const index = copySizes.findIndex((item) => item.id === getCurrentItem.id);
    if (index === -1) {
      copySizes.push(getCurrentItem);
    } else {
      copySizes = copySizes.filter((item) => item.id !== getCurrentItem.id);
    }
    setFormData({
      ...formData,
      sizes: copySizes,
    });
  };

  
  async function handleAddProduct(){
     const res = await addNewProduct(formData)
     console.log("addProduct",res)
  }

  return (
    <div className="w-full mt-5 mr-0 ml-0 mb-0 relative">
      <div className="mt-5 lg:ml-40 lg:mr-40 lg:mb-10 lg:pl-40 lg:pr-40 sm:ml-5 sm:mr-5 sm:pl-2 sm:pr-2 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
        <div className="w-full mt-6 mr-0 ml-0 mb-0 space-y-8">
          <UploadImageComponent
            handleImage={handleImage}
            setImage={setImage}
            image={image}
          />

          <div className="flex gap-2 flex-col">
            <label className="text-s font-semibold"> Available sizes </label>
            <TileComponent
              selected={formData.sizes}
              onClick={handleTileClick}
              data={AvailableSize}
            />
          </div>

          {adminAddNewProductformControls?.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                type={controlItem.type}
                label={controlItem.label}
                placeholder={controlItem.placeholder}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
                value={formData[controlItem.id]}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    [controlItem.id]: event.target.value,
                  });
                }}
              />
            ) : null
          )}
          <button className="disabled:opacity-50 rounded-sm inline-flex w-full items-center justify-center bg-black px-6 py-3 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddNewProduct;