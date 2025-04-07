import { useState, useEffect } from "react";
import NavButton, { NavButtonProps } from "../shared/buttons/NavButton";
import CartButton from "../shared/buttons/CartButton";
import useMobileScreen from "../hook/useMobileScreen";

function Nav() {
  let navButtons: NavButtonProps[] = [
    { label: "Collections" },
    { label: "Men" },
    { label: "Women" },
    { label: "About" },
    { label: "Contact" },
  ];

  const [selectedBtn, setSelectedBtn] = useState<NavButtonProps | null>(null);

  const [selectedBurgerMenu, setSelectedBurgerMenu] = useState(false);

  const mobileScreen = useMobileScreen();

  useEffect(() => {
    if (mobileScreen) {
      setSelectedBurgerMenu(false);
    }
  }, [mobileScreen]);

  function handleBtn(btn: NavButtonProps) {
    setSelectedBtn(btn);
  }

  function handleBurgerMenu() {
    setSelectedBurgerMenu((prevState) => !prevState);
  }

  const handlePropagation = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {selectedBurgerMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-[10]"
          onClick={handleBurgerMenu}
        >
          <div
            className="fixed top-0 left-0 h-full w-[10rem] bg-white shadow-2xl p-4"
            onClick={handlePropagation}
          >
            <button
              type="button"
              onClick={handleBurgerMenu}
              className="flex justify-start mt-[0.25rem]"
            >
              <img className="object-scale-down" src="images\icon-close.svg" />
            </button>
            <ul className="mt-[3rem]">
              {navButtons.map((item) => (
                // eslint-disable-next-line react/jsx-key
                <li className="my-4 text-left font-kumbh-sans font-bold">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <nav
        className={`flex justify-between items-start mx-[1rem] ${
          !mobileScreen ? "mb-[1rem] mt-[1rem]" : "mt-[2rem]"
        }`}
      >
        <div className="flex flex-row items-start">
          {!mobileScreen && (
            <button
              type="button"
              onClick={handleBurgerMenu}
              className="mr-4 mt-1"
            >
              <img
                className="object-scale-down mt-[0.25rem]"
                src="images\icon-menu.svg"
              />
            </button>
          )}
          <img
            className={`object-scale-down mr-8 ${
              mobileScreen ? "mt-[1rem]" : "mt-[0.25rem]"
            }`}
            src="images\logo.svg"
          />
          {mobileScreen && (
            <div className="flex flex-row h-20">
              {navButtons.map((item, index) => (
                <NavButton
                  key={index}
                  label={item.label}
                  selectedBtn={selectedBtn || undefined}
                  onClick={handleBtn}
                />
              ))}
            </div>
          )}
        </div>
        <div className="flex">
          <CartButton setSelectedBurgerMenu={setSelectedBurgerMenu} />
          <img
            className={`object-scale-down cursor-pointer hover:border-orange rounded-full border-2 border-transparent ${
              mobileScreen ? "size-12" : "size-9"
            }`}
            src="./images/image-avatar.png"
          />
        </div>
      </nav>
      <hr className="border-grayish-blue" />
    </>
  );
}

export default Nav;
