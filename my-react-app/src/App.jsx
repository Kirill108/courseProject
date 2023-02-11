import { useState, useEffect } from "react";
// import { InputDepartment } from "./components/InputDepartment";
import { Nav } from "./Navigation/nav";
import { InputData } from "./Navigation/InputData/InputData";
import { OutputData } from "./Navigation/OutputData/OutputData";
import { DeleteData } from "./Navigation/DeleteData/DeleteData";
import { EditData } from "./Navigation/EditData/EditData";
import "./App.css";

function App() {
  const [salesData, setSalesData] = useState([]);
  const [isRestartPage, setIsRestartPage] = useState(true);
  let i = 0;
  const [numbering, setNumbering] = useState(1);

  useEffect(() => {
    setNumbering(
      salesData.map((recorder) => {
        i += 1;
        return (recorder.item = i);
      })
    );
  }, [salesData]);

  return (
    <>
      <Nav />
      <InputData
        salesData={salesData}
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
      />
      <OutputData
        salesData={salesData}
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        setNumbering={setNumbering}
        numbering={numbering}
      />
      <EditData
        salesData={salesData}
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        setNumbering={setNumbering}
        numbering={numbering}
      />
      <DeleteData
        salesData={salesData}
        setSalesData={setSalesData}
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
        setNumbering={setNumbering}
        numbering={numbering}
      />
    </>
  );
}

export default App;
