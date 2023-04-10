import { createSlice } from "@reduxjs/toolkit";
// import { DEFAULT } from "../../const/const";

const initialState = {
  requestData: [],
  //   typeRequest: null,
};

const DataRequest = createSlice({
  name: "dataRequest",
  initialState,
  reducers: {
    dateRequest: (state, action) => {
      state.requestData = action.payload;
    },
    sellingPriceRequest: (state, action) => {
      state.requestData = action.payload;
    },
    searchCriteriaRequest: (state, action) => {
      state.requestData = action.payload;
    },
    dataOutputPayment: (state, action) => {
      state.requestData = action.payload;
    },
    OutputFourTovar: (state, action) => {
      state.requestData = action.payload;
    },
  },
});

const { actions, reducer } = DataRequest;
const { dataOutputPayment, searchCriteriaRequest } = actions;

const request = reducer;

export { request, dataOutputPayment, searchCriteriaRequest };
