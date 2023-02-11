import { OutputData } from "../OutputData/OutputData";

function DeleteData(props) {
  const {
    salesData,
    setSalesData,
    isRestartPage,
    setIsRestartPage,
    setNumbering,
    numbering,
  } = props;

  return (
    <section id="deleteData" className="section-delete">
      <OutputData
        salesData={salesData}
        isDelete
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        setNumbering={setNumbering}
        numbering={numbering}
      />
    </section>
  );
}

export { DeleteData };
