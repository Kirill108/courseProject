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
    handleRequest: (state, action) => {
      state.requestData = action.payload;
    },
  },
});

const { actions, reducer } = DataRequest;
const { handleRequest } = actions;

const request = reducer;

export { request, handleRequest };
