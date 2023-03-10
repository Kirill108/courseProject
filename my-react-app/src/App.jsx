import { useState } from "react";
// import { InputDepartment } from "./components/InputDepartment";
import { Nav } from "./navigation/nav";
import { InputData } from "./navigation/input_data/input_data";
import { OutputData } from "./navigation/output_data/output_data";
import { DeleteData } from "./navigation/delete_data/delete_data";
import { EditData } from "./navigation/edit_data/edit_data";
import "./App.css";

function App() {
  const [isRestartPage, setIsRestartPage] = useState(true);

  return (
    <>
      <Nav />
      <InputData
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
      />
      <OutputData
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}

      />
      <EditData
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}

      />
      <DeleteData
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
      />
    </>
  );
}

export default App;
