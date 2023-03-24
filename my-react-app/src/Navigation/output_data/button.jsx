import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { changeEditingRow } from "../../state/slice/action_row";
import Button from "@mui/material/Button";

import "./button.css";

function ActionButton(props) {
  const {
    isDelete,
    item,
    salesData,
    updateSalesData,

    isEdit,
  } = props;

  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const dispatch = useDispatch();
  const itemEditIcon = useSelector((store) => store.edit.editingRow);

  const deleteRecorder = (items) => {
    console.log('items: ', items);
    const newData = salesData.filter(
      (recorder) => recorder.item !== items.item
    );
    updateSalesData(newData);
    setConfirmationDelete(false);
  };

  const editRecorder = (items) => {
    dispatch(changeEditingRow(items));
  };

  if (isDelete) {
    if (confirmationDelete) {
      return (
        <>
          <Button
            sx={{ ml: 1, mr: 1 }}
            onClick={() => {
              deleteRecorder(item);
            }}
            variant="outlined"
          >
            Так
          </Button>
          <Button
            onClick={() => {
              setConfirmationDelete(false);
            }}
            variant="contained"
          >
            Ні
          </Button>
        </>
      );
    }
    return (
      <button
        type="button"
        className="button-delete"
        onClick={() => {
          setConfirmationDelete(true);
        }}
      >
        +
      </button>
    );
  }

  if (isEdit) {
    if (itemEditIcon !== item) {
      return (
        <button
          type="button"
          className="edit-icon"
          onClick={() => {
            editRecorder(item);
          }}
        >
          <i className="fa fa-pencil"></i>
        </button>
      );
    }
  }

  return null;
}

export { ActionButton };
