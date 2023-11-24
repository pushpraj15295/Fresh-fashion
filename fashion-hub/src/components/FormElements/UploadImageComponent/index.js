import "../../../styles/add-product/addProduct.css";
import { CiEdit } from "react-icons/ci";
import { IoCamera } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { IoCloudUpload } from "react-icons/io5";

const UploadImageComponent = ({
  handleImage,
  image,
  handleRemoveImage,
  inputRef,
}) => {
  return (
    <div className="UploadContainer">
      <div className="uploadImageMainContainer">
        <input
          ref={inputRef}
          type="file"
          className="uploadImageInput"
          onChange={handleImage}
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
              Remove Image &nbsp; <MdDeleteForever size="20" />
            </button>
          ) : (
            <button className="uploadImageButton">
              Upload Image &nbsp; <IoCloudUpload size="20" />
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default UploadImageComponent;
