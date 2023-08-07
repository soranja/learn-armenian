import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectInitialState } from "../../types/selectInitialState";

const initialState: SelectInitialState = {
  label: "",
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setSelectLabel: (state, action: PayloadAction<string>) => {
      state.label = action.payload;
    },
  },
});

export const selectActions = selectSlice.actions;
export const selectReducer = selectSlice.reducer;
