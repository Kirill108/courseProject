import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DEFAULT } from "../../../const/const";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { handleRequest } from "../../../state/slice/data_request";

function DateRequest() {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(DEFAULT.VALUE);
  const [isResetRequest, setIsResetRequest] = useState(false);
  const salesData = useSelector((store) => store.dataSales.salesData);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleFindDate = (event) => {
    const findRecord = salesData.filter(
      (item) => item.dateSale === selectedDate
    );
    if (!findRecord.length) {
      alert(`Немає записів за обраною датою: ${selectedDate}`);
    } else {
      dispatch(handleRequest(findRecord));
      setIsResetRequest(true);
    }
  };

  const handleReset = (event) => {
    setIsResetRequest(false);
    dispatch(handleRequest([]));
    setSelectedDate(DEFAULT.VALUE);
  };

  return (
    <>
      <p>виведення інформації за введеною користувачем датою</p>
      <Box
        sx={{
          mt: 1,
          maxWidth: 200,
          margin: "auto",
        }}
      >
        <label htmlFor="datePicker">Виберіть дату</label>
        <Box sx={{}}>
          <input
            type="date"
            id="datePicker"
            onChange={handleDateChange}
            value={selectedDate}
          />

          {selectedDate ? (
            <Button
              onClick={handleFindDate}
              sx={{ minWidth: 200 }}
              type="submit"
              variant="contained"
              color="success"
            >
              Знайти запис
            </Button>
          ) : null}
          {isResetRequest ? (
            <Button
              sx={{ minWidth: 200, mt: 2 }}
              variant="outlined"
              onClick={handleReset}
            >
              скинути розрахунки
            </Button>
          ) : null}
        </Box>
      </Box>
    </>
  );
}

export { DateRequest };
