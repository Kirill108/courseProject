import { useState } from "react";
import { OutputData } from "../output_data/output_data";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import { DateRequest } from "./content_tab/tab1";
import { TotalSaleRequest } from "./content_tab/tab2";
import { SearchByСriteria } from "./content_tab/tab3";
import { MoreOrLess } from "./content_tab/tab4";
import { FourTovar } from "./content_tab/tab5";

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
            <DateRequest />
          </TabPanel>
          <TabPanel value="2">
            <TotalSaleRequest />
          </TabPanel>
          <TabPanel value="3">
            <SearchByСriteria />
          </TabPanel>
          <TabPanel value="4">
            <MoreOrLess />
          </TabPanel>
          <TabPanel value="5">
            <FourTovar />
          </TabPanel>
        </TabContext>
      </Box>
      <OutputData isRequest />
    </section>
  );
}

export { RequestData };
