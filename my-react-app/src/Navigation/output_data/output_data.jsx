import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "./button";
import { DeleteCategory } from "./delete_category";
import { useSalesData } from "../../helper/use_sales_data";
import "./edit-data.css";

function OutputData(props) {
  const { isDelete, isEdit, isSort } = props;
  const salesData = useSelector((store) => store.dataSales.salesData);
  const updateSalesData = useSalesData();
  // eslint-disable-next-line no-return-assign
  const editItem = useSelector((state) => state.edit.editingRow);
  const tableData = salesData.map((item, index) => (
    <React.Fragment key={index}>
      <tr>
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
          <Button
            key={index}
            isDelete={isDelete}
            item={item}
            salesData={salesData}
            updateSalesData={updateSalesData}
            isEdit={isEdit}
          />
        </td>
      </tr>
    </React.Fragment>
  ));

  if (salesData.length) {
    return (
      <section id="outputData">
        <DeleteCategory
          isDelete={isDelete}
          salesData={salesData}
          updateSalesData={updateSalesData}
        />
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
