import { useState } from "react";

import Box from "@mui/material/Box";

function Tab1() {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
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
        <input
          type="date"
          id="datePicker"
          onChange={handleDateChange}
          value={selectedDate}
        />
      </Box>
    </>
  );
}

export { Tab1 };
