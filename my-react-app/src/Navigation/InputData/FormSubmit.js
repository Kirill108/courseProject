import { DEFAULT } from "../../js/const";

function FormSubmit(dataInput, setDataInput, salesData, setSalesData) {
  setSalesData([...salesData, dataInput]);

  // setDataInput.map((setData) => {
  //   setData(DEFAULT.VALUE);
  // });
}

export { FormSubmit };
