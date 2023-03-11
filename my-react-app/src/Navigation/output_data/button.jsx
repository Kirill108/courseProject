import { useSelector, useDispatch } from "react-redux";
import { changeEditingRow } from "../../state/slice/editing_row";
import "./button.css";

function Button(props) {
  const {
    isDelete,
    item,
    salesData,
    updateSalesData,

    isEdit,
  } = props;

  const dispatch = useDispatch();
  const itemEditIcon = useSelector((store) => store.edit.editingRow);

  const deleteRecorder = (items) => {
    const newData = salesData.filter(
      (recorder) => recorder.item !== items.item
    );
    updateSalesData(
      newData.map((recorder, index) => ({
        ...recorder,
        item: index + 1,
      }))
    );

  };

  const editRecorder = (items) => {
    dispatch(changeEditingRow(items));

  };

  const saveRecorder = (items) => {
    // dispatch(changeEditingRow(items));

  };

  if (isDelete) {
    return (
      <button
        type="button"
        className="button-delete"
        onClick={() => {
          deleteRecorder(item);
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
    return (
      <button
        type="button"
        className="button-save"
        onClick={() => {
          saveRecorder();
        }}
      >
        save
      </button>
    );
  }
  return null;
}

export { Button };
