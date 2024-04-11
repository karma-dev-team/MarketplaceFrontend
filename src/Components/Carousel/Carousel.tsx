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
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.053 0.40657C10.8843 0.053226 10.3881 -0.106957 10.026 0.0767822C9.94658 0.114472 8.92454 1.05672 7.7487 2.17329C6.57781 3.28985 5.59546 4.20384 5.5657 4.20384C5.53593 4.20384 4.55358 3.28985 3.3827 2.17329C2.20685 1.05672 1.18481 0.114472 1.10543 0.0767816C1.03101 0.0343804 0.867284 0.00140164 0.748211 0.00140163C0.281843 0.00140161 -0.0604914 0.397147 0.0089677 0.854138C0.0387359 1.06614 0.0982722 1.12268 2.55415 3.46417C3.93837 4.78332 5.13406 5.89046 5.21344 5.93286C5.39205 6.02238 5.73934 6.02238 5.91795 5.93287C5.99733 5.89046 7.19302 4.78332 8.57228 3.46417C10.6511 1.48545 11.0927 1.04259 11.1175 0.910673C11.1621 0.679822 11.1522 0.618576 11.053 0.40657Z" fill="#787878"/>
        <path d="M11.053 0.40657C10.8843 0.053226 10.3881 -0.106957 10.026 0.0767822C9.94658 0.114472 8.92454 1.05672 7.7487 2.17329C6.57781 3.28985 5.59546 4.20384 5.5657 4.20384C5.53593 4.20384 4.55358 3.28985 3.3827 2.17329C2.20685 1.05672 1.18481 0.114472 1.10543 0.0767816C1.03101 0.0343804 0.867284 0.00140164 0.748211 0.00140163C0.281843 0.00140161 -0.0604914 0.397147 0.0089677 0.854138C0.0387359 1.06614 0.0982722 1.12268 2.55415 3.46417C3.93837 4.78332 5.13406 5.89046 5.21344 5.93286C5.39205 6.02238 5.73934 6.02238 5.91795 5.93287C5.99733 5.89046 7.19302 4.78332 8.57228 3.46417C10.6511 1.48545 11.0927 1.04259 11.1175 0.910673C11.1621 0.679822 11.1522 0.618576 11.053 0.40657Z" fill="#787878"/>
        </svg>
        </button>
        <button className="next-button" onClick={handleNext}>
        <svg width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.053 0.40657C10.8843 0.053226 10.3881 -0.106957 10.026 0.0767822C9.94658 0.114472 8.92454 1.05672 7.7487 2.17329C6.57781 3.28985 5.59546 4.20384 5.5657 4.20384C5.53593 4.20384 4.55358 3.28985 3.3827 2.17329C2.20685 1.05672 1.18481 0.114472 1.10543 0.0767816C1.03101 0.0343804 0.867284 0.00140164 0.748211 0.00140163C0.281843 0.00140161 -0.0604914 0.397147 0.0089677 0.854138C0.0387359 1.06614 0.0982722 1.12268 2.55415 3.46417C3.93837 4.78332 5.13406 5.89046 5.21344 5.93286C5.39205 6.02238 5.73934 6.02238 5.91795 5.93287C5.99733 5.89046 7.19302 4.78332 8.57228 3.46417C10.6511 1.48545 11.0927 1.04259 11.1175 0.910673C11.1621 0.679822 11.1522 0.618576 11.053 0.40657Z" fill="#787878"/>
        <path d="M11.053 0.40657C10.8843 0.053226 10.3881 -0.106957 10.026 0.0767822C9.94658 0.114472 8.92454 1.05672 7.7487 2.17329C6.57781 3.28985 5.59546 4.20384 5.5657 4.20384C5.53593 4.20384 4.55358 3.28985 3.3827 2.17329C2.20685 1.05672 1.18481 0.114472 1.10543 0.0767816C1.03101 0.0343804 0.867284 0.00140164 0.748211 0.00140163C0.281843 0.00140161 -0.0604914 0.397147 0.0089677 0.854138C0.0387359 1.06614 0.0982722 1.12268 2.55415 3.46417C3.93837 4.78332 5.13406 5.89046 5.21344 5.93286C5.39205 6.02238 5.73934 6.02238 5.91795 5.93287C5.99733 5.89046 7.19302 4.78332 8.57228 3.46417C10.6511 1.48545 11.0927 1.04259 11.1175 0.910673C11.1621 0.679822 11.1522 0.618576 11.053 0.40657Z" fill="#787878"/>
        </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
