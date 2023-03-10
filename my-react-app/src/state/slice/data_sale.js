import { createSlice } from "@reduxjs/toolkit";

let salesData;

try {
  salesData = JSON.parse(localStorage.getItem("salesData"));
} catch(error) {
  alert(error)
}

const initialState = {
  salesData: salesData ?? [],
};

const DataSale = createSlice({
  name: "editingRow",
  initialState,
  reducers: {
    changeSalesData: (state, action) => {
      state.salesData = action.payload;
    },
  },
});

const { actions, reducer } = DataSale;
const { changeSalesData } = actions;

const dataSales = reducer;

export { dataSales, changeSalesData };
