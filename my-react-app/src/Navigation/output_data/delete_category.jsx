import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { UiSelect } from "./ui_select/ui_select";

function DeleteCategory(props) {
  const { isDelete, salesData, updateSalesData } = props;

  const [tabActive, setTabActive] = useState("1");

  const handleChangeTab = (event, newValue) => {
    setTabActive(newValue);
  };

  if (isDelete) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 0,
          mb: 10,
        }}
      >
        <h2>Оберіть видалення</h2>
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
                <Tab label="відразу" value="1" />
                <Tab label="фільтрація" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <UiSelect
                salesData={salesData}
                updateSalesData={updateSalesData}
              />
            </TabPanel>
            <TabPanel value="2">
              <UiSelect
                salesData={salesData}
                updateSalesData={updateSalesData}
                isList
              />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    );
  }
  return null;
}

export { DeleteCategory };
