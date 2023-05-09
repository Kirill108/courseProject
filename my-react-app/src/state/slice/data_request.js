import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  requestData: [],
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
