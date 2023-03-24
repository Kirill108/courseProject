import React from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { ActionButton } from "./button";
import { DeleteCategory } from "./delete_category";
import { useSalesData } from "../../helper/use_sales_data";
import "./edit-data.css";

function OutputData(props) {
  const { isDelete, isEdit, optionSort } = props;
  let salesData = useSelector((store) => store.dataSales.salesData);
  const sortingData = useSelector((store) => store.sort.sortingData);
  salesData = optionSort ? sortingData : salesData;
  const updateSalesData = useSalesData();
  // eslint-disable-next-line no-return-assign

  const tableData = useMemo(
    () =>
      salesData.map((item, index) => (
        <tr key={index}>
          <td>{item.item}</td>
          <td>{item.dateSale}</td>
          <td>{item.salesManager}</td>
          <td>{item.nameTovar}</td>
          <td>{item.amountTovar}</td>
          <td>{item.priceOne}</td>
          <td>{item.pay}</td>
          <td>{item.fioClient}</td>
          <td>{item.phone}</td>
          <td className="button-action">
            <ActionButton
              key={index}
              isDelete={isDelete}
              item={item}
              salesData={salesData}
              updateSalesData={updateSalesData}
              isEdit={isEdit}
            />
          </td>
        </tr>
      )),
    [salesData, isDelete, isEdit]
  );

  if (salesData.length) {
    return (
      <section id="outputData">
        <DeleteCategory
          isDelete={isDelete}
          salesData={salesData}
          updateSalesData={updateSalesData}
        />
        <div className="scrol">
          <table>
            <caption>Дані продажу</caption>
            <thead>
              <tr>
                <th>№ п/п</th>
                <th>Дата продажу</th>
                <th>Менеджер з продажу</th>
                <th>Назва товару</th>
                <th>кількість товару</th>
                <th>ціна за одиницю</th>
                <th>сума до сплати</th>
                <th>ПІБ Клієнта</th>
                <th>номер телефону клієнта</th>
              </tr>
            </thead>
            <tbody>{tableData}</tbody>
          </table>
        </div>
      </section>
    );
  }
  return (
    <section id="outputData">
      <h1>Спочатку введіть дані!</h1>
    </section>
  );
}

export { OutputData };
