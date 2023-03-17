import { configureStore } from "@reduxjs/toolkit";
import { edit } from "../slice/action_row";
import { dataSales } from "../slice/data_sale";
import { sort } from "../slice/data_sort";
import { modal } from "../slice/modal_status";

const store = configureStore({
  reducer: {
    edit,
    dataSales,
    sort,
    modal,
  },
});

export { store };
