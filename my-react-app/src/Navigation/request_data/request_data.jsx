import { useState } from "react";
import { OutputData } from "../output_data/output_data";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { Tab1 } from "./content_tab/tab1";
import { Tab3 } from "./content_tab/tab3";
import { Tab4 } from "./content_tab/tab4";

function RequestData() {
  const [tabActive, setTabActive] = useState("1");

  const handleChangeTab = (event, newValue) => {
    setTabActive(newValue);
  };

  return (
    <section id="requestData" className="section-sort">
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          maxWidth: 900,
          margin: "auto",
        }}
      >
        <TabContext value={tabActive}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList
              onChange={handleChangeTab}
              aria-label="lab API tabs example"
            >
              <Tab label="за датою" value="1" />
              <Tab label="вартість продажу за менеджером" value="2" />
              <Tab label="пошук за критеріями" value="3" />
              <Tab label="виведення даних" value="4" />
              <Tab label="4 товари" value="5" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Tab1 />
          </TabPanel>
          <TabPanel value="2">
            розрахувати загальну вартість продажу за ПІБ менеджера, значення
            якого було введено користувачем
          </TabPanel>
          <TabPanel value="3">
            <Tab3 />
          </TabPanel>
          <TabPanel value="4">
            <Tab4 />
          </TabPanel>
          <TabPanel value="5">
            виведення 4 товарів з найменшою та найбільшою ціною
          </TabPanel>
        </TabContext>
      </Box>
      {/* <Box
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
              <Tab1 />
            </TabPanel>
            <TabPanel value="2">
              розрахувати загальну вартість продажу за ПІБ менеджера, значення
              якого було введено користувачем
            </TabPanel>
            <TabPanel value="3">
              пошук за критеріями: назва товару, кількість товару «від-до»
            </TabPanel>
            <TabPanel value="4">
              <Tab4 />
            </TabPanel>
            <TabPanel value="5">
              виведення 4 товарів з найменшою та найбільшою ціною
            </TabPanel>
          </TabContext>
        </Box>
      </Box> */}
      <OutputData isRequest />
    </section>
  );
}

export { RequestData };
