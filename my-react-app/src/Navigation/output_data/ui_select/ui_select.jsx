import { useState, useMemo } from "react";
import { ListReact } from "../../../helper/react_list";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DEFAULT } from "../../../const/const";
import { Grid } from "@mui/material";
import { TYPE_DELETE } from "../../../const/const";
import { SelectFilter } from "./select_filter/select_filter";

function UiSelect(props) {
  const { salesData, updateSalesData, isList } = props;

  const [valueOption, setValueOption] = useState(DEFAULT.VALUE);
  const [valueOptionTovar, setValueOptionTovar] = useState(DEFAULT.VALUE);
  const [optionPhone, setOptionPhone] = useState(DEFAULT.VALUE);

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

  const allManager = ListReact(salesManagers);

  const allTovar = ListReact(allProducts);

  const JSX_AllPhone = ListReact(allNumberPhone);

  const handleOptionChange = (event, filterType) => {
    const option = event.target.value;

    let setState;
    let filterParam;
    let filterParam2;

    switch (filterType) {
      case TYPE_DELETE.MANAGER:
        setState = setValueOption;
        filterParam = "salesManager";
        filterParam2 = salesManagers[0];
        break;
      case TYPE_DELETE.TOVAR:
        setState = setValueOptionTovar;
        filterParam = "nameTovar";
        filterParam2 = allProducts[0];
        break;
      case TYPE_DELETE.PHONE:
        setState = setOptionPhone;
        filterParam = "phone";
        filterParam2 = allNumberPhone[0];
        break;
      default:
        break;
    }

    setState(option);

    event.preventDefault();
    updateSalesData(
      salesData.filter((recorder) => recorder[filterParam] !== option)
    );
    if (allManager.length === 1) {
      updateSalesData(
        salesData.filter((recorder) => recorder[filterParam] !== filterParam2)
      );
    }

    event.preventDefault();
  };

  const selectConfig = [
    {
      label: "за менеджером",
      value: valueOption,
      onChange: (event) => {
        handleOptionChange(event, TYPE_DELETE.MANAGER);
      },
      options: allManager,
    },
    {
      label: "за товаром",
      value: valueOptionTovar,
      onChange: (event) => {
        handleOptionChange(event, TYPE_DELETE.TOVAR);
      },
      options: allTovar,
    },
    {
      label: "за номером телефона",
      value: optionPhone,
      onChange: (event) => {
        handleOptionChange(event, TYPE_DELETE.PHONE);
      },
      options: JSX_AllPhone,
    },
  ];

  return (
    <Grid container spacing={3}>
      {selectConfig.map((config, index) => (
        <SelectFilter key={index} {...config} />
      ))}

      {/* <SelectFilter
        label="за менеджером"
        value={valueOption}
        onChange={(event) => {
          handleOptionChange(event, TYPE_DELETE.MANAGER);
        }}
        options={allManager}
      />
      <SelectFilter
        label="за товаром"
        value={valueOptionTovar}
        onChange={(event) => {
          handleOptionChange(event, TYPE_DELETE.TOVAR);
        }}
        options={allTovar}
      />
      <SelectFilter
        label="за номером телефона"
        value={optionPhone}
        onChange={(event) => {
          handleOptionChange(event, TYPE_DELETE.PHONE);
        }}
        options={JSX_AllPhone}
      /> */}
      {/* <Grid item xs={6} sx={{ pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">за менеджером</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueOption}
            label="за менеджером"
            onChange={(event) => {
              handleOptionChange(event, TYPE_DELETE.MANAGER);
            }}
            // onChange={onChangeValueOption}
          >
            {allManager}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={6} sx={{ minWidth: 220, pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">за товаром</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={valueOptionTovar}
            label="за товаром"
            onChange={(event) => {
              handleOptionChange(event, TYPE_DELETE.TOVAR);
            }}
            // onChange={onChangeValueTovar}
          >
            {allTovar}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sx={{ minWidth: 220, pr: 5 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            за номером телефона
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={optionPhone}
            label="за номером телефона"
            onChange={(event) => {
              handleOptionChange(event, TYPE_DELETE.PHONE);
            }}
            // onChange={onChangeValuePhone}
          >
            {JSX_AllPhone}
          </Select>
        </FormControl>
      </Grid> */}
    </Grid>
  );
}

export { UiSelect };
