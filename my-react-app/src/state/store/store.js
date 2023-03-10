import { configureStore } from "@reduxjs/toolkit";
import { edit } from "../slice/editing_row";
import { dataSales } from "../slice/data_sale";

const store = configureStore({
  reducer: {
    edit,
    dataSales,
  },
});

export { store };
