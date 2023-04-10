import { useState } from "react";
import { OutputData } from "../output_data/output_data";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";

function RequestData() {
  const [tabActive, setTabActive] = useState("1");
  const [selectedDate, setSelectedDate] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChangeTab = (event, newValue) => {
    setTabActive(newValue);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section id="requestData" className="section-sort">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 15,
          mb: 10,
        }}
      >
        <h2>Виконання запитів</h2>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabActive}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <TabList
                onChange={handleChangeTab}
                aria-label="lab API tabs example"
                sx={{ justifyContent: "center" }}
              >
                <Tab label="за датою" value="1" />
                <Tab label="вартість продажу за менеджером" value="2" />
                <Tab label="пошук за критеріями" value="3" />
                <Tab label="виведення даних" value="4" />
                <Tab label="4 товари" value="5" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <p>виведення інформації за введеною користувачем датою</p>
              <Box
                sx={{
                  mt: 1,
                  maxWidth: 200,
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
            </TabPanel>
            <TabPanel value="2">
              розрахувати загальну вартість продажу за ПІБ менеджера, значення
              якого було введено користувачем
            </TabPanel>
            <TabPanel value="3">
              пошук за критеріями: назва товару, кількість товару «від-до»
            </TabPanel>
            <TabPanel value="4">
              виведення даних за сумою до сплати більше або менше значення, яке
              було введене користувачем
              <Box
                sx={{
                  maxWidth: 200,
                  margin: "auto",
                }}
              >
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <Input
                    sx={{
                      mt: 2,
                    }}
                    type="number"
                    defaultValue=""
                    placeholder="Введіть число"
                    onChange={handleInputChange}
                    value={inputValue}
                    required
                  />
                  <Box
                    sx={{
                      mt: 2,
                      // // maxWidth: 200,
                      // display: "flex",
                      // alignItems: "space-between",
                    }}
                  >
                    <Button
                      sx={{ mr: 3.4 }}
                      type="submit"
                      variant="contained"
                      color="success"
                    >
                      Більше
                    </Button>
                    <Button
                      sx={{}}
                      type="submit"
                      variant="contained"
                      color="error"
                    >
                      Менше
                    </Button>
                  </Box>
                </form>
              </Box>
            </TabPanel>
            <TabPanel value="5">
              виведення 4 товарів з найменшою та найбільшою ціною
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
      <OutputData isRequest />
    </section>
  );
}

export { RequestData };

