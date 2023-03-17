import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../modal/modal";
import Button from "@mui/material/Button";
import { changeModalStatus } from "../state/slice/modal_status";
import { confirmDelete } from "../state/slice/action_row";

function AllModal() {
  const dispatch = useDispatch();
  const isActiveConfirmationDelete = useSelector((store) => store.modal.delete);

  return (
    <Modal isActive={isActiveConfirmationDelete}>
      <h2>Видалити запис?</h2>
      <Button
        onClick={() => {
          dispatch(confirmDelete(true));
        }}
        variant="outlined"
      >
        Так
      </Button>
      <Button
        onClick={() => {
          dispatch(changeModalStatus(false));
        }}
        variant="contained"
      >
        Ні
      </Button>
    </Modal>
  );
}

export { AllModal };
