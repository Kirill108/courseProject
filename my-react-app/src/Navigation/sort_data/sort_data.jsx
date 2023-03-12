import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OutputData } from "../output_data/output_data";
import { ListReact } from "../../helper/react_list";
import { SORT } from "../../const/const";
import { changeOptionSort } from "../../state/slice/data_sort";
import { changeSalesData } from "../../state/slice/data_sale";
import { sorting } from "./sorting/sorting";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./sort_data.css";

function SortData() {
  const [optionSort, setOptionSort] = useState();
  const dispatch = useDispatch();
  const dataSale = useSelector((store) => store.dataSales.salesData);
  const sortOption = ListReact(Object.values(SORT));

  function handleSort(event) {
    const typeSort = event.target.value;
    setOptionSort(typeSort);

    const sortArr = sorting(dataSale, typeSort);
    dispatch(changeSalesData(sortArr));

    // dispatch(changeOptionSort(typeSort));
  }

  if(dataSale.length) {
    return (
      <section id="sortData" className="section-sort">
        <Box sx={{ minWidth: 200, m: 4 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Оберіть сортування
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={optionSort}
              label="Оберіть сортування"
              onChange={handleSort}
            >
              {sortOption}
            </Select>
          </FormControl>
        </Box>
        <OutputData isSort />
      </section>
    );
  }
  return (
    <section id="sortData">
      <h1>Спочатку введіть дані!</h1>
    </section>
  );
  
}

export { SortData };
