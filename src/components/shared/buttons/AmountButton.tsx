import { useAppSelector, useAppDispatch } from "../../../store/hook";
import {
  incrementAmount,
  decrementAmount,
} from "../../../store/shoppingItemSlice";

function AmountButton() {
  const amount = useAppSelector((state) => state.shoppingItem.amount);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-light-grayish-blue flex flex-row justify-between rounded-lg h-[3.5rem]">
      <button
        className={`w-[2rem] flex justify-center items-center active:bg-pale-grayish-blue rounded-l-lg `}
        onClick={() => dispatch(decrementAmount())}
      >
        <img src="./images/icon-minus.svg" alt="Decrease" />
      </button>
      <div className="flex justify-center items-center font-bold px-[1.75rem]">
        {amount}
      </div>
      <button
        className={`w-[2rem] flex justify-center items-center
          active:bg-pale-grayish-blue rounded-r-lg `}
        onClick={() => dispatch(incrementAmount())}
      >
        <img src="./images/icon-plus.svg" alt="Increase" />
      </button>
    </div>
  );
}

export default AmountButton;
