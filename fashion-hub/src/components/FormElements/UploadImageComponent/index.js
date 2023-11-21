import "../../../styles/add-product/addProduct.css";
import { CiEdit } from "react-icons/ci";
import { IoCamera } from "react-icons/io5";
import { useState } from "react";

const UploadImageComponent = () => {
  const [image, setImage] = useState("");

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleRemoveImage = () => {
    setImage("");
  };

  return (
    <div className="UploadContainer">
      <div className="uploadImageMainContainer">
        <input
          type="file"
          className="uploadImageInput"
          onChange={handleImageUpload}
        />
        {image ? (
          <img
            src={image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="product-img"
          />
        ) : (
          <IoCamera size={60} />
        )}

        <div className="edit">
          <CiEdit size={27} color="white" />
        </div>
      </div>

      <div className="uplpoadImageLabel">
        <p>
          {image ? (
            <button className="removeImageButton" onClick={handleRemoveImage}>
              Remove Image
            </button>
          ) : (
            <button className="uploadImageButton"> Upload Image </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default UploadImageComponent;
