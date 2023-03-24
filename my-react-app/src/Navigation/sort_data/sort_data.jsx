import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OutputData } from "../output_data/output_data";
import { ListReact } from "../../helper/react_list";
import { SORT } from "../../const/const";
import { sorting } from "./sorting/sorting";
import { sortingData } from "../../state/slice/data_sort";
import { DEFAULT } from "../../const/const";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

import "./sort_data.css";

function SortData() {
  const [optionSort, setOptionSort] = useState(DEFAULT.VALUE);
  const dispatch = useDispatch();
  const dataSale = useSelector((store) => store.dataSales.salesData);
  const sortOption = ListReact(Object.values(SORT));

  const handleSort = (event) => {
    const typeSort = event.target.value;
    setOptionSort(typeSort);

    const sortArr = sorting(dataSale, typeSort);
    dispatch(sortingData(sortArr));
  };

  const handleReset = () => {
    setOptionSort(DEFAULT.value);
  };

  if (dataSale.length) {
    return (
      <section id="sortData" className="section-sort">
        <Box sx={{ minWidth: 200, mt: 5 }}>
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
        {optionSort ? (
          <Button
            sx={{ minWidth: 200, mt: 2 }}
            variant="outlined"
            onClick={handleReset}
          >
            скинути сортування
          </Button>
        ) : null}

        <OutputData optionSort={optionSort} />
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
