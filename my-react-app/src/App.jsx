import { Nav } from "./navigation/nav";
import { InputData } from "./navigation/input_data/input_data";
import { OutputData } from "./navigation/output_data/output_data";
import { DeleteData } from "./navigation/delete_data/delete_data";
import { EditData } from "./navigation/edit_data/edit_data";
import { SortData } from "./navigation/sort_data/sort_data";
import { RequestData } from "./navigation/request_data/request_data";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <InputData />
      <OutputData />
      <EditData />
      <DeleteData />
      <SortData />
      <RequestData />
    </>
  );
}

export default App;