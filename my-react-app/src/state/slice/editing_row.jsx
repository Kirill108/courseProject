import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingRow: null,
};

const editData = createSlice({
  name: "editingRow",
  initialState,
  reducers: {
    changeEditingRow: (state, action) => {
      state.editingRow = action.payload;
    },
  },
});

const { actions, reducer } = editData;
const { changeEditingRow } = actions;

const edit = reducer;

export { edit, changeEditingRow };
