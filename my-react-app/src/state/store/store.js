import { configureStore } from "@reduxjs/toolkit";
import { edit } from "../slice/editing_row";
import { dataSales } from "../slice/data_sale";
import { sort } from "../slice/data_sort";

const store = configureStore({
  reducer: {
    edit,
    dataSales,
    sort,
  },
});

export { store };
