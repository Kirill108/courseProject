import { OutputData } from "../output_data/output_data";

function DeleteData(props) {
  const { isRestartPage, setIsRestartPage} = props;

  return (
    <section id="deleteData" className="section-delete">
      <OutputData
        isDelete
        isRestartPage={isRestartPage}
        setIsRestartPage={setIsRestartPage}
      />
    </section>
  );
}

export { DeleteData };
