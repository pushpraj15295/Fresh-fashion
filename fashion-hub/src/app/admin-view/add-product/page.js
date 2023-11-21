"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import TileComponent from "@/components/FormElements/TileComponent";
import { adminAddNewProductformControls, AvailableSize } from "@/utils";

const AdminAddNewProduct = () => {
  const handleImageUpload = () => {};

  return (
    <div className="w-full mt-5 mr-0 ml-0 mb-0 relative">
      <div className="mt-5 ml-40 mr-40 mb-10 pl-40 pr-40 flex flex-col items-start justify-start p-10 bg-white shadow-2xl rounded-xl relative">
        <div className="w-full mt-6 mr-0 ml-0 mb-0 space-y-8">
          <input
            accept="image/*"
            max="1000000"
            type="file"
            onChange={handleImageUpload}
          />

          <div className="flex gap-2 flex-col">
            <label className="text-s font-semibold"> Available sizes </label>
            <TileComponent data={AvailableSize} />
          </div>

          {adminAddNewProductformControls?.map((controlItem) =>
            controlItem.componentType === "input" ? (
              <InputComponent
                type={controlItem.type}
                label={controlItem.label}
                placeholder={controlItem.placeholder}
              />
            ) : controlItem.componentType === "select" ? (
              <SelectComponent
                label={controlItem.label}
                options={controlItem.options}
              />
            ) : null
          )}
          <button className="disabled:opacity-50 rounded-sm inline-flex w-full items-center justify-center bg-black px-6 py-3 text-lg text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide">
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAddNewProduct;
