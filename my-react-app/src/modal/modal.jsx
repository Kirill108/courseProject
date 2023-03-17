/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch } from "react-redux";
import { changeModalStatus } from "../state/slice/modal_status";
import "./modal.css";

function Modal(props) {
  const { isActive, children } = props;
  const dispatch = useDispatch();

  if (isActive) {
    return (
      <div
        className={isActive ? "modal active" : "active"}
        onClick={() => {
          dispatch(changeModalStatus(false));
        }}
      >
        <div
          className={isActive ? "modal-content active" : "active"}
          onClick={(event) => event.stopPropagation()}
        >
          {children}
        </div>
      </div>
    );
  }
  return null;
}

export { Modal };
