import { DEFAULT } from "../../const/const";

function FormSubmit(dataInput, setDataInput, salesData, setSalesData) {
  setSalesData([...salesData, dataInput]);

  // setDataInput.map((setData) => {
  //   setData(DEFAULT.VALUE);
  // });
}

export { FormSubmit };
