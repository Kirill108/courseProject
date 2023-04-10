import { configureStore } from "@reduxjs/toolkit";
import { edit } from "../slice/action_row";
import { dataSales } from "../slice/data_sale";
import { sort } from "../slice/data_sort";
import { modal } from "../slice/modal_status";
import { request } from "../slice/data_request";

const store = configureStore({
  reducer: {
    edit,
    dataSales,
    sort,
    modal,
    request,
  },
});

export { store };
