import { useEffect, useState } from "react";
import ProductThumbnail from "../shared/buttons/ProductThumbnail";
import NextButton from "../shared/buttons/NextButton";
import PreviousButton from "../shared/buttons/PreviousButton";
import CloseButton from "../shared/buttons/CloseButton";
import useMobileScreen from "../hook/useMobileScreen";
import React from "react";
interface LinkDTO {
  id: string;
  url: string;
}

export interface ImageDTO {
  id: string;
  name: string;
  image: { small: LinkDTO; large: LinkDTO };
}

function ProductImageGallery(props: any) {
  function handleImageClick(value: ImageDTO) {
    const index = productImages.findIndex((img) => img.id === value.id);
    setSelectedImageIndex(index);
  }

  let productImages: ImageDTO[] = [
    {
      id: "1",
      name: "product-1",
      image: {
        small: { id: "1-a", url: "./images/image-product-1-thumbnail.jpg" },
        large: { id: "1-b", url: "./images/image-product-1.jpg" },
      },
    },
    {
      id: "2",
      name: "product-2",
      image: {
        small: { id: "2-a", url: "./images/image-product-2-thumbnail.jpg" },
        large: { id: "2-b", url: "./images/image-product-2.jpg" },
      },
    },
    {
      id: "3",
      name: "product-3",
      image: {
        small: { id: "3-a", url: "./images/image-product-3-thumbnail.jpg" },
        large: { id: "3-b", url: "./images/image-product-3.jpg" },
      },
    },
    {
      id: "4",
      name: "product-4",
      image: {
        small: { id: "4-a", url: "./images/image-product-4-thumbnail.jpg" },
        large: { id: "4-b", url: "./images/image-product-4.jpg" },
      },
    },
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(
    props.selectedImageIndex ? props.selectedImageIndex : 0
  );
  const [isEnlarged, setIsEnlarged] = useState(false);

  const mobileScreen = useMobileScreen();

  useEffect(() => {
    if (!mobileScreen) {
      setIsEnlarged(false);
    }
  }, [mobileScreen]);

  const handleEnlargeClick = () => {
    if (!props.isPop) {
      setIsEnlarged((prevState) => !prevState);
    }
  };

  const handleClose = () => {
    setIsEnlarged(false);
  };

  const handlePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleNext = () => {
    if (selectedImageIndex + 1 === productImages.length) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex((prevState: number) => prevState + 1);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex === 0) {
      setSelectedImageIndex(productImages.length - 1);
    } else {
      setSelectedImageIndex((prevState: number) => prevState - 1);
    }
  };

  return (
    <>
      <div
        className={`w-[25rem] relative ${
          !mobileScreen ? "m-[0rem] w-full" : "m-[4rem] h-[30rem]"
        } ${props.isPop && "h-[40rem] w-[30rem]"}`}
      >
        <div className={`mb-[2rem] relative `}>
          <div className="">
            <img
              onClick={mobileScreen ? handleEnlargeClick : undefined}
              src={productImages[selectedImageIndex].image.large.url}
              className={`cursor-pointer ${
                !mobileScreen ? "rounded-none z-[8]" : "rounded-xl"
              }`}
              alt={productImages[selectedImageIndex].name}
            />
            {(props.isPop || !mobileScreen) && (
              <>
                <button
                  onClick={handleNext}
                  className={`absolute flex items-center justify-center bg-white rounded-full ${
                    mobileScreen
                      ? "-right-[1.5rem] top-[14rem] size-[3rem]"
                      : "right-[0.5rem] top-[50%] translate-y-[-50%] size-[2.5rem]"
                  }`}
                >
                  <NextButton />
                </button>
                <button
                  onClick={handlePrevious}
                  className={`absolute flex items-center justify-center bg-white rounded-full ${
                    mobileScreen
                      ? "-left-[1.5rem] top-[14rem] size-[3rem]"
                      : "left-[0.5rem] top-[50%] translate-y-[-50%] size-[2.5rem]"
                  }`}
                >
                  <PreviousButton />
                </button>
              </>
            )}
          </div>
        </div>
        {mobileScreen && (
          <div
            className={`flex flex-row justify-between ${
              props.isPop && "mx-[2rem]"
            }`}
          >
            {productImages.map((item, index) => (
              <ProductThumbnail
                handlePicture={handleImageClick}
                image={item}
                key={index}
                selectedPicture={productImages[selectedImageIndex]}
              />
            ))}
          </div>
        )}
      </div>
      {isEnlarged && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-80 z-[10]"
          onClick={handleClose}
        >
          <div onClick={handlePropagation} className="relative">
            <button
              onClick={handleClose}
              className="absolute right-[4rem] top-[2rem]"
            >
              <CloseButton />
            </button>
            <ProductImageGallery
              isPop={true}
              selectedImageIndex={selectedImageIndex}
            />
          </div>
        </div>
      )}
    </>
  );
}

function ProductImage() {
  return (
    <>
      <ProductImageGallery />
    </>
  );
}

export default ProductImage;
