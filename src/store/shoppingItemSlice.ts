import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingItemState {
  name: string;
  amount: number;
  price: number;
  total: number;
  cart: boolean;
  cartAmount: number;
}

const initialState: ShoppingItemState = {
  name: "",
  amount: 1,
  price: 0,
  total: 0,
  cart: false,
  cartAmount: 0,
};

const shoppingItemSlice = createSlice({
  name: "shoppingItem",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
      state.total = state.amount * state.price;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
      state.total = state.amount * state.price;
    },
    incrementAmount: (state) => {
      state.amount += 1;
      state.total = state.amount * state.price;
    },
    decrementAmount: (state) => {
      state.amount = Math.max(1, state.amount - 1);
      state.total = state.amount * state.price;
    },
    setCart: (state, action: PayloadAction<boolean>) => {
      state.cart = action.payload;
    },
    setCartAmount: (state, action: PayloadAction<number>) => {
      state.cartAmount = state.cartAmount + action.payload;
    },
    resetAmount: (state, action: PayloadAction<number>) => {
      state.cartAmount = action.payload;
    },
  },
});

export const {
  setName,
  setAmount,
  setPrice,
  incrementAmount,
  decrementAmount,
  setCart,
  setCartAmount,
  resetAmount,
} = shoppingItemSlice.actions;

export default shoppingItemSlice.reducer;
