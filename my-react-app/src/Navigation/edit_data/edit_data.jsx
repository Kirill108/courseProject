import { OutputData } from "../output_data/output_data";
import { InputData } from "../input_data/input_data";
import { useSelector, useDispatch } from "react-redux";

function EditData(props) {
  const { isRestartPage, setIsRestartPage  } = props;

  const itemEdit = useSelector((store) => store.edit.editingRow);
  if (!itemEdit) {
    return (
      <section id="EditData">
        <OutputData
          isRestartPage={isRestartPage}
          setIsRestartPage={setIsRestartPage}
          isEdit
        />
      </section>
    );
  }
  return (
    <section id="EditData">
      <InputData
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        isEdit
      />
    </section>
  );
}

export { EditData };
