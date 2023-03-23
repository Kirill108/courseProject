import { useState, useMemo } from "react";
import { ListReact } from "../../../helper/react_list";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DEFAULT } from "../../../const/const";

function UiSelect(props) {
  const { salesData, updateSalesData, isList } = props;

  const [valueOption, setValueOption] = useState(DEFAULT.VALUE);
  const [valueOptionTovar, setValueOptionTovar] = useState(DEFAULT.VALUE);
  const [optionPhone, setOptionPhone] = useState(DEFAULT.VALUE);
  //   const [optionItem, setOptionItem] = useState(DEFAULT.VALUE);

  const salesManagers = useMemo(
    () => Array.from(new Set(salesData.map((item) => item.salesManager))),
    [salesData]
  );

  const allProducts = useMemo(
    () => Array.from(new Set(salesData.map((item) => item.nameTovar))),
    [salesData]
  );

  const allNumberPhone = useMemo(
    () => Array.from(new Set(salesData.map((item) => item.phone))),
    [salesData]
  );

  //   const allItem = useMemo(
  //     () => Array.from(new Set(salesData.map((item) => item.item))),
  //     [salesData]
  //   );

  const allManager = ListReact(salesManagers);

  const allTovar = ListReact(allProducts);

  const JSX_AllPhone = ListReact(allNumberPhone);

  //   const JSX_AllItem = ListReact(allItem);

  const onChangeValueOption = (event) => {
    const option = event.target.value;
    setValueOption(option);

    event.preventDefault();
    updateSalesData(
      salesData.filter((recorder) => recorder.salesManager !== option)
    );
    if (allManager.length === 1) {
      updateSalesData(
        salesData.filter(
          (recorder) => recorder.salesManager !== salesManagers[0]
        )
      );
    }
  };

  const onChangeValueTovar = (event) => {
    const option = event.target.value;
    setValueOptionTovar(option);

    event.preventDefault();
    updateSalesData(
      salesData.filter((recorder) => recorder.nameTovar !== option)
    );
    if (allTovar.length === 1) {
      updateSalesData(
        salesData.filter((recorder) => recorder.nameTovar !== allProducts[0])
      );
    }
  };

  const onChangeValuePhone = (event) => {
    const option = event.target.value;
    setOptionPhone(option);

    event.preventDefault();
    updateSalesData(salesData.filter((recorder) => recorder.phone !== option));
    if (JSX_AllPhone.length === 1) {
      updateSalesData(
        salesData.filter((recorder) => recorder.phone !== allNumberPhone[0])
      );
    }
  };

  //   const onChangeValueItem = (event) => {
  //     const option = event.target.value;
  //     setOptionItem(option);

  //     event.preventDefault();
  //     updateSalesData(
  //       salesData.filter((recorder) => recorder.item !== Number(option))
  //     );
  //     if (JSX_AllItem.length === 1) {
  //       updateSalesData(
  //         salesData.filter((recorder) => recorder.item !== allItem[0])
  //       );
  //     }
  //   };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 1,
        gridTemplateColumns: "repeat(2, 1fr)",
      }}
    >
      <Box sx={{ minWidth: 200, pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">за менеджером</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueOption}
            label="за менеджером"
            onChange={onChangeValueOption}
          >
            {allManager}
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ minWidth: 220, pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">за товаром</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueOptionTovar}
            label="за товаром"
            onChange={onChangeValueTovar}
          >
            {allTovar}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 220, pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            за номером телефона
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={optionPhone}
            label="за номером телефона"
            onChange={onChangeValuePhone}
          >
            {JSX_AllPhone}
          </Select>
        </FormControl>
      </Box>
      {/* <Box sx={{ minWidth: 200, pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            за номером запису
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={optionItem}
            label="за номером запису"
            onChange={onChangeValueItem}
          >
            {JSX_AllItem}
          </Select>
        </FormControl>
      </Box> */}
    </Box>
  );
}

export { UiSelect };
