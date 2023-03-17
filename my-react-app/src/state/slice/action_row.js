import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingRow: null,
  deleteRow: false,
};

const editData = createSlice({
  name: "editingRow",
  initialState,
  reducers: {
    changeEditingRow: (state, action) => {
      state.editingRow = action.payload;
    },
    confirmDelete: (state, action) => {
      state.deleteRow = action.payload;
    },
  },
});

const { actions, reducer } = editData;
const { changeEditingRow, confirmDelete } = actions;

const edit = reducer;

export { edit, changeEditingRow, confirmDelete };
