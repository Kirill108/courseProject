import { OutputData } from "../output_data/output_data";
import { InputData } from "../input_data/input_data";
import { useSelector } from "react-redux";

function EditData() {
  const itemEdit = useSelector((store) => store.edit.editingRow);
  if (!itemEdit) {
    return (
      <section id="EditData">
        <OutputData isEdit />
      </section>
    );
  }
  return (
    <section id="EditData">
      <InputData isEdit />
    </section>
  );
}

export { EditData };
