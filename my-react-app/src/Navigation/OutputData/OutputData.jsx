import { Button } from "./Button";
import { DeleteCategory } from "./DeleteCategory";

function OutputData(props) {
  const {
    salesData,
    isDelete,
    setSalesData,
    isRestartPage,
    setIsRestartPage,
    setNumbering,
    numbering,
  } = props;
  let i = 0;
  // eslint-disable-next-line no-return-assign

  const tableData = salesData.map((item) => (
    <>
      <tr key={numbering[i]}>
        <td>{numbering[i]}</td>
        <td>{item.dateSale}</td>
        <td>{item.salesManager}</td>
        <td>{item.nameTovar}</td>
        <td>{item.amountTovar}</td>
        <td>{item.priceOne}</td>
        <td>{item.pay}</td>
        <td>{item.fioClient}</td>
        <td>{item.phone}</td>
      </tr>
      <Button
        key={numbering[i]}
        isDelete={isDelete}
        item={numbering[i++]}
        salesData={salesData}
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        setNumbering={setNumbering}
      />
    </>
  ));
  if (salesData.length) {
    return (
      <section id="outputData">
        <DeleteCategory
          isDelete={isDelete}
          salesData={salesData}
          setSalesData={setSalesData}
          setIsRestartPage={setIsRestartPage}
        />
        <table>
          <caption>Данні продажу</caption>
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
      <h1>Спочатку введіть данні!</h1>
    </section>
  );
}

export { OutputData };
