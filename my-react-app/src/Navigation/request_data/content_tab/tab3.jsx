import { useState, useMemo } from "react";
import { getUniqueValues } from "../../../helper/get_uniqe_values";
import { useSelector, useDispatch } from "react-redux";
import { ListReact } from "../../../helper/react_list";
import { handleRequest } from "../../../state/slice/data_request";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DEFAULT } from "../../../const/const";

function Tab3() {
  const dispatch = useDispatch();

  const [tovar, setTovar] = useState(DEFAULT.VALUE);
  const [from, setFrom] = useState(DEFAULT.VALUE);
  const [to, setTo] = useState(DEFAULT.VALUE);
  const [isResetRequest, setIsResetRequest] = useState(false);

  const salesData = useSelector((store) => store.dataSales.salesData);

  const allProducts = useMemo(
    () => getUniqueValues(salesData, "nameTovar"),
    [salesData]
  );

  const allTovar = ListReact(allProducts);

  const handleChangeTovar = (event) => {
    setTovar(event.target.value);
  };

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const resultSearch = salesData.filter(
      (item) =>
        item.nameTovar === tovar &&
        item.amountTovar > Number(from) &&
        item.amountTovar < Number(to)
    );
    if (resultSearch.length) {
      dispatch(handleRequest(resultSearch));
      setIsResetRequest(true);
    } else {
      alert(
        `Немає записів для товару "${tovar}" з кількістью від ${from} до ${to}`
      );
    }
  };

  const handleReset = (event) => {
    setIsResetRequest(false);
    dispatch(handleRequest([]));
    setTovar(DEFAULT.VALUE);
    setFrom(DEFAULT.VALUE);
    setTo(DEFAULT.VALUE);
  };

  return (
    <>
      <p>пошук за критеріями: назва товару, кількість товару «від-до»</p>
      <Box
        sx={{
          mt: 1,
          maxWidth: 200,
          // margin: "auto",
          ml: 13,
        }}
      >
        <form onSubmit={handleSubmitForm}>
          <FormControl fullWidth>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Виберіть товар
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tovar}
                label="Виберіть товар"
                onChange={handleChangeTovar}
                required
                sx={{ mr: 2, minWidth: 200 }}
              >
                {allTovar}
              </Select>
              <TextField
                id="outlined-number"
                label="кількість товару «від»"
                type="number"
                placeholder="«від»"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={handleFromChange}
                value={from}
                required
                sx={{ mr: 2, minWidth: 210 }}
              />
              <TextField
                id="outlined-number"
                label="кількість товару «до»"
                type="number"
                placeholder="«до»"
                // InputLabelProps={{
                //   shrink: true,
                // }}
                onChange={handleToChange}
                value={to}
                required
                sx={{ mr: 0, minWidth: 200 }}
              />
            </Box>
            <Button
              sx={{ mt: 2, ml: 27, minWidth: 208 }}
              type="submit"
              variant="contained"
              color="success"
            >
              Знайти
            </Button>
          </FormControl>
        </form>
        {isResetRequest ? (
          <Button
            sx={{ minWidth: 208, mt: 2, ml: 27 }}
            variant="outlined"
            onClick={handleReset}
          >
            скинути пошук
          </Button>
        ) : null}
      </Box>
    </>
  );
}

export { Tab3 };
