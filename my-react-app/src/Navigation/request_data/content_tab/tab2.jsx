import { useState, useMemo } from "react";
import { getUniqueValues } from "../../../helper/get_uniqe_values";
import { useSelector, useDispatch } from "react-redux";
import { ListReact } from "../../../helper/react_list";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { handleRequest } from "../../../state/slice/data_request";
import { DEFAULT } from "../../../const/const";

function TotalSaleRequest() {
  const dispatch = useDispatch();

  const [manager, setManager] = useState(DEFAULT.VALUE);
  const [count, setCount] = useState(0);
  const [isResetRequest, setIsResetRequest] = useState(false);

  const salesData = useSelector((store) => store.dataSales.salesData);

  const allManagers = useMemo(
    () => getUniqueValues(salesData, "salesManager"),
    [salesData]
  );

  const allManager = ListReact(allManagers);

  const handleChangeManager = (event) => {
    setManager(event.target.value);
    setCount(0);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const resultCounting = salesData.filter(
      (item) => item.salesManager === manager
    );

    const totalPay = resultCounting.reduce(
      (accumulator, item) => accumulator + item.pay,
      0
    );
    setCount(totalPay);

    dispatch(handleRequest(resultCounting));
    setIsResetRequest(true);
  };

  const handleReset = (event) => {
    setIsResetRequest(false);
    dispatch(handleRequest([]));
    setManager(DEFAULT.VALUE);
    setCount(0);
  };

  return (
    <>
      <p>
        розрахувати загальну вартість продажу за ПІБ менеджера, значення якого
        було введено користувачем
      </p>
      <Box
        sx={{
          mt: 1,
          maxWidth: 200,
          // margin: "auto",
          ml: 40,
        }}
      >
        <form onSubmit={handleSubmitForm}>
          <FormControl fullWidth>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                Оберіть менеджера
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={manager}
                label="Виберіть товар"
                onChange={handleChangeManager}
                required
                sx={{ mr: 2, minWidth: 200 }}
              >
                {allManager}
              </Select>
              {count ? (
                <Box sx={{ minWidth: 350 }}>Результат розрахунку: {count}</Box>
              ) : null}
            </Box>
            <Button
              sx={{ mt: 2, minWidth: 200 }}
              type="submit"
              variant="contained"
              color="success"
            >
              розрахувати
            </Button>
          </FormControl>
        </form>
        {isResetRequest ? (
          <Button
            sx={{ minWidth: 200, mt: 2 }}
            variant="outlined"
            onClick={handleReset}
          >
            скинути розрахунки
          </Button>
        ) : null}
      </Box>
    </>
  );
}

export { TotalSaleRequest };
