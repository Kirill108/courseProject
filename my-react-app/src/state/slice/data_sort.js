import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT } from "../../const/const";

const initialState = {
  optionSort: DEFAULT.VALUE,
};

const DataSort = createSlice({
  name: "dataSort",
  initialState,
  reducers: {
    changeOptionSort: (state, action) => {
      state.optionSort = action.payload;
    },
  },
});

const { actions, reducer } = DataSort;
const { changeOptionSort } = actions;

const sort = reducer;

export { sort, changeOptionSort };
