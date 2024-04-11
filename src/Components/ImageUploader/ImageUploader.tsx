import React, { useState, useRef } from "react";
import "./ImageUploader.css";
import ImageScheme from "src/Schemas/Image";
import binIcon from "@images/Bin.svg"

type Props = {
  images: ImageScheme[];
  setImages: React.Dispatch<React.SetStateAction<ImageScheme[]>>;
  elementHeight?: string;
  elementWidth?: string;
  elementBgColor?: string;
};

const ImageUploaderComponent: React.FC<Props> = (props) => {
  const [imageBinaries, setImageBinaries] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages: ImageScheme[] = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          if (typeof reader.result === "string") {
            newImages.push({
              fileId: files[i].name,
              filePath: files[i].name,
              fileBinary: reader.result,
            });
            setImageBinaries([...imageBinaries, reader.result]);
            props.setImages([...props.images, ...newImages]);
          }
        };
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files) {
      const newImages: ImageScheme[] = [];
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          if (typeof reader.result === "string") {
            newImages.push({
              fileId: files[i].name,
              filePath: reader.result,
            });
            setImageBinaries([...imageBinaries, reader.result]);
            props.setImages([...props.images, ...newImages]);
          }
        };
      }
    }
  };

  const handleClickUploadIcon = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="root-imageuploader">
      <div
        className="image-drop-box"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{ 
            backgroundColor: props.elementBgColor,
            maxWidth: props.elementWidth || "auto", 
        }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png,.png,image/jpeg,.jpg,.jpeg"
          multiple
          onChange={handleImageUpload}
          tabIndex={-1}
          style={{ display: "none" }}
        />
        <div
          className="upload-drop-icon"
          onClick={handleClickUploadIcon}
        >
            <svg width="75" height="68" viewBox="0 0 81 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.968" fill-rule="evenodd" clip-rule="evenodd" d="M7.01255 0.0133111C27.2003 -0.0221764 47.3878 0.0133111 67.5751 0.119561C71.413 1.19481 73.9275 3.63856 75.1188 7.45081C75.2605 25.3716 75.2605 43.2926 75.1188 61.2133C74.6526 64.017 73.0588 65.8233 70.3376 66.6321C49.1583 66.7738 27.9793 66.7738 6.80005 66.6321C3.41705 65.8692 1.1858 63.8504 0.106303 60.5758C-0.0354344 42.8676 -0.0354344 25.1591 0.106303 7.45081C1.14415 3.75799 3.44617 1.27896 7.01255 0.0133111ZM8.28755 4.26331C27.6253 4.22782 46.9628 4.26331 66.3001 4.36956C68.673 5.04255 70.1958 6.56532 70.8688 8.93831C71.0105 21.1925 71.0105 33.4466 70.8688 45.7008C66.2488 41.8505 61.6091 38.0255 56.9501 34.2258C53.271 37.2316 49.6233 40.2774 46.0063 43.3633C41.9541 39.0287 37.9166 34.708 33.8938 30.4008C23.9773 37.1657 14.1315 44.0365 4.3563 51.0133C4.21457 36.9175 4.21457 22.8216 4.3563 8.72581C4.82508 6.45312 6.13557 4.96562 8.28755 4.26331ZM49.9376 15.9508C52.8739 15.736 54.3259 17.0817 54.2938 19.9883C53.2717 22.4641 51.5364 23.1369 49.0876 22.0071C46.9621 19.639 47.2454 17.6202 49.9376 15.9508ZM33.1501 35.7133C37.389 40.0793 41.5328 44.5418 45.5813 49.1008C49.0083 46.3117 52.373 43.443 55.6751 40.4946C56.1406 40.0868 56.6364 39.8033 57.1626 39.6446C61.7509 43.4088 66.3196 47.1983 70.8688 51.0133C71.0105 53.9883 71.0105 56.9633 70.8688 59.9383C70.8527 61.2182 70.2506 62.0327 69.0626 62.3821C48.7333 62.5238 28.4043 62.5238 8.07505 62.3821C6.17743 62.1269 4.93792 61.0998 4.3563 59.3008C4.21457 58.1676 4.21457 57.0341 4.3563 55.9008C13.9337 49.118 23.5315 42.3888 33.1501 35.7133Z" fill="#414357"/>
                <path opacity="0.944" fill-rule="evenodd" clip-rule="evenodd" d="M49.7252 11.4883C54.799 11.2059 57.8095 13.5434 58.7564 18.5008C58.586 24.196 55.6465 26.994 49.9377 26.8945C44.9496 25.7249 42.7894 22.5727 43.4564 17.4383C44.3553 14.1658 46.4448 12.1823 49.7252 11.4883ZM49.9377 15.9508C47.2455 17.6202 46.9622 19.6389 49.0877 22.007C51.5365 23.1369 53.2718 22.4641 54.2939 19.9883C54.326 17.0817 52.874 15.7359 49.9377 15.9508Z" fill="#414357"/>
                <rect x="59" y="50" width="22" height="22" rx="11" fill="#404256"/>
                <rect width="11.8462" height="1.69231" rx="0.846154" transform="matrix(-1 0 0 1 75.9233 60.1539)" fill="#262836"/>
                <rect width="11.8462" height="1.69231" rx="0.846154" transform="matrix(4.37114e-08 1 1 -4.37114e-08 69.1543 55.0771)" fill="#262836"/>
            </svg>
        </div>
        <div>
          <p>
            Перетащите изображения в эту область, или нажмите внутри неё
          </p>
          <em>
            Максимум 3 изображения, только .jpeg и .png <br /> Каждое
            изображение не должно превышать 20мб
          </em>
        </div>
      </div>
      <div className="uploaded-images-list">
        {props.images.map((image, index) => (
            <div className="uploaded-image" style={{ 
                backgroundColor: props.elementBgColor,
                maxWidth: props.elementWidth || "auto", 
            }}>
                <div className="uploaded-image-container">
                    <img
                        key={index}
                        src={image.fileBinary}
                        alt={`Uploaded ${index + 1}`}
                        height={"75px"}
                        width={"75px"}
                        className="uploaded-image-image"
                    />
                    <h2>{image.filePath}</h2>
                </div>
                <div className="uploaded-image-clear" onClick={() => { 
                    props.setImages([
                        ...props.images.slice(0, index),
                        ...props.images.slice(index + 1, props.images.length)
                    ])
                }}>
                    <img src={binIcon} alt="" width={35} height={35}/>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploaderComponent;
