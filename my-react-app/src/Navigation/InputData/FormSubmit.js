import { DEFAULT } from "../../const/const";

function FormSubmit(dataInput, setDataInput, salesData, setSalesData) {
  const isDuplicate = salesData.find(
    (sale) =>
      sale.dateSale === dataInput.dateSale &&
      sale.salesManager === dataInput.salesManager &&
      sale.nameTovar === dataInput.nameTovar &&
      sale.amountTovar === dataInput.amountTovar &&
      sale.priceOne === dataInput.priceOne &&
      sale.pay === dataInput.pay &&
      sale.fioClient === dataInput.fioClient &&
      sale.phone === dataInput.phone
  );

  if (!isDuplicate) {
    setSalesData([...salesData, dataInput]);
  } else {
    alert('Уже есть такая запись!')
  }

  // setDataInput.map((setData) => {
  //   setData(DEFAULT.VALUE);
  // });
}

export { FormSubmit };
