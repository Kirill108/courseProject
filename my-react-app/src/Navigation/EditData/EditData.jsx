import { OutputData } from "../OutputData/OutputData";

function EditData(props) {
  const {
    salesData,
    setSalesData,
    isRestartPage,
    setIsRestartPage,
    setNumbering,
    numbering,
  } = props;

  return (
    <section id="EditData">
      <OutputData
        salesData={salesData}
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        setNumbering={setNumbering}
        numbering={numbering}
      />
    </section>
  );
}

export { EditData };
