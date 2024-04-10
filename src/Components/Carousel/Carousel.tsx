import React, { useState } from "react";
import "./Carousel.css";

interface ImageType {
  [key: string]: string;
}

type Props = {
  images: ImageType;
};

const CarouselComponent: React.FC<Props> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageKeys = Object.keys(images);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imageKeys.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imageKeys.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="root-carousel">
      <div className="image-container">
        {imageKeys.map((key, index) => (
          <img
            key={index}
            src={images[key]}
            alt={`Slide ${index}`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          />
        ))}
        <div className="dots-container">
          {imageKeys.map((_, index) => (
            <span
              key={index}
              className={index === currentIndex ? "dot active" : "dot"}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
        <button className="prev-button" onClick={handlePrev}>
            
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
