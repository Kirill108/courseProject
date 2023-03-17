import { createSlice } from "@reduxjs/toolkit";

let salesData;

async function fetchData() {
  try {
    const response = await fetch("http://localhost:3001/api/read_json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error(error);
  }
}

salesData = await fetchData();

// try {
//   salesData = JSON.parse(localStorage.getItem("salesData"));
// } catch(error) {
//   alert(error)
// }

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
