import { DEFAULT } from "../../const/const";

function FormSubmit(dataInput, setDataInput, salesData, setSalesData) {
  
  setSalesData([...salesData, dataInput]);
  console.log('dataInput: ', dataInput);
  console.log('salesData: ', salesData);

  // setDataInput.map((setData) => {
  //   setData(DEFAULT.VALUE);
  // });
}

export { FormSubmit };
