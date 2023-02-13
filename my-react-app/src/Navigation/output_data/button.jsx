function Button(props) {
  const {
    isDelete,
    item,
    salesData,
    setSalesData,
    isRestartPage,
    setIsRestartPage,
    setNumbering,
  } = props;

  const deleteRecorder = (items) => {
    setSalesData(salesData.filter((recorder) => recorder.item !== items));
    setIsRestartPage(false);
  };

  if (isDelete) {
    return (
      <button
        type="button"
        className="button-delete"
        onClick={() => {
          deleteRecorder(item);
        }}
      >
        +
      </button>
    );
  }
  return null;
}

export { Button };
