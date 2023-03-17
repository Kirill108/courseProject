import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT } from "../../const/const";

const initialState = {
  sortingData: [],
  optionSort: DEFAULT.VALUE,
};

const DataSort = createSlice({
  name: "dataSort",
  initialState,
  reducers: {
    changeOptionSort: (state, action) => {
      state.optionSort = action.payload;
    },
    sortingData: (state, action) => {
      state.sortingData = action.payload;
    },
  },
});

const { actions, reducer } = DataSort;
const { changeOptionSort, sortingData } = actions;

const sort = reducer;

export { sort, changeOptionSort, sortingData };
