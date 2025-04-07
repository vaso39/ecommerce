import AddButton from "../shared/buttons/AddButton";
import AmountButton from "../shared/buttons/AmountButton";
import useMobileScreen from "../hook/useMobileScreen";

function Description() {
  return (
    <>
      <div
        className={`flex flex-col h-[30rem] ${
          useMobileScreen()
            ? "w-[25rem] m-[4rem] justify-evenly "
            : "w-100% mx-[1rem] gap-1"
        }`}
      >
        <h1 className="text-orange font-bold font-kumbh-sans tracking-widest text-left">
          SNEAKER COMPANY
        </h1>
        <h2 className="text-very-dark-blue text-[2.5rem] font-bold font-kumbh-sans text-left leading-[3rem]">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-dark-grayish-blue font-kumbh-sans text-left leading-[1.75rem]">
          These low-profile sneakers are your perfect casual wear comapion.
          Featuring a durable rubber outer sole, they&apos;ll withstand
          everything the weather can offer.
        </p>
        <div>
          <div
            className={`flex  ${
              useMobileScreen() ? "flex-col" : "justify-between items-center"
            }`}
          >
            <div className="flex flex-row">
              <p className="text-very-dark-blue text-[2rem] font-bold font-kumbh-sans text-left">
                $125.00
              </p>
              <span className="bg-pale-orange h-[2rem] px-[0.5rem] rounded-lg flex self-center ml-[1.5rem]">
                <p className="text-orange text-[1.25rem] font-bold font-kumbh-sans">
                  50%
                </p>
              </span>
            </div>
            <p className="text-dark-grayish-blue text-[rem] font-bold font-kumbh-sans line-through text-left">
              $250.00
            </p>
          </div>
        </div>
        <div
          className={` ${
            useMobileScreen()
              ? "h-[3.5rem] grid grid-cols-[1fr_2fr] items-center gap-4"
              : "grid grid-rows-2 gap-2"
          }`}
        >
          <AmountButton />
          <AddButton />
        </div>
      </div>
    </>
  );
}

export default Description;
