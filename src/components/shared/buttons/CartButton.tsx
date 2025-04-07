import { useEffect, useState } from "react";
import { useAppSelector } from "../../../store/hook";
import DeleteButton from "./DeleteButton";
import useMobileScreen from "../../hook/useMobileScreen";

function CartButton(prop: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartAmount = useAppSelector((state) => state.shoppingItem.cartAmount);

  const mobileScreen = useMobileScreen();

  useEffect(() => {
    if (cartAmount > 0) {
      setTotalAmount(cartAmount * 125);
    }
  }, [cartAmount]);

  function handleClick() {
    setIsOpen((prevState) => !prevState);
  }

  useEffect(() => {
    if (prop.setSelectedBurgerMenu) {
      setIsOpen(false);
    }
  }, [prop.setSelectedBurgerMenu]);

  return (
    <>
      <div className="flex relative items-center mx-8">
        <svg
          width="22"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          className="inline object-scale-down cursor-pointer fill-[#69707D] hover:fill-very-dark-blue"
          onClick={handleClick}
        >
          <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" />
        </svg>
        {cartAmount > 0 && (
          <span
            className={`bg-orange font-bold text-light-grayish-blue px-1.5 text-xsm rounded-lg absolute -right-1.5 ${
              mobileScreen ? "bottom-[1.75rem]" : "bottom-[1.25rem]"
            }`}
          >
            {cartAmount}
          </span>
        )}

        {isOpen && (
          <div
            className={` bg-white rounded shadow-2xl z-[9] ${
              mobileScreen
                ? "absolute w-[22rem] -left-[10rem] top-[4rem] "
                : "absolute top-[3.75rem] w-[93vw] -right-[5rem] m-[0.25rem] "
            }`}
          >
            <p className="text-left font-bold m-4">Cart</p>
            <hr className="border-grayish-blue" />
            {cartAmount > 0 ? (
              <div className="mx-4 my-6 flex flex-col gap-[1.5rem]">
                <div className="flex flex-row justify-between items-center gap-[1rem]">
                  <div>
                    <img
                      className="rounded h-[3rem] w-[3rem]"
                      src="./images/image-product-1-thumbnail.jpg"
                    />
                  </div>
                  <div>
                    <div>
                      <p className="text-dark-grayish-blue text-start">
                        Fall Limited Edition Sneakers
                      </p>
                    </div>
                    <div>
                      <p className="text-dark-grayish-blue text-start">
                        $125.00 x {cartAmount}
                        <span className="font-bold text-black">
                          {" "}
                          ${totalAmount}.00
                        </span>
                      </p>
                    </div>
                  </div>
                  <DeleteButton />
                </div>
                <button
                  className={`bg-orange font-bold text-light-grayish-blue rounded-[8px] h-[3rem] w-full active:bg-dark-orange hover:opacity-80
                  `}
                >
                  Checkout
                </button>
              </div>
            ) : (
              <div className="h-[10.5rem] flex justify-center items-center font-bold text-dark-grayish-blue">
                <p>Your cart is empty.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CartButton;
