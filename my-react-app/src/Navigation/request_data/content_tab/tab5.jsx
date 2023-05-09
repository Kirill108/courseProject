import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { handleRequest } from "../../../state/slice/data_request";
import { TO_PAY } from "../../../const/const";

function FourTovar() {
  const dispatch = useDispatch();
  const salesData = useSelector((store) => store.dataSales.salesData);
  const [isResetRequest, setIsResetRequest] = useState(false);

  const handleFilter = (typeAction) => {
    const sortIncrease = [...salesData].sort((a, b) => a.pay - b.pay);
    let resultRequest;

    // eslint-disable-next-line default-case
    switch (typeAction) {
      case TO_PAY.FOUR_LARGEST: {
        resultRequest = sortIncrease.slice(-4);
        break;
      }
      case TO_PAY.FOUR_LEAST: {
        resultRequest = sortIncrease.slice(0, 4);
        break;
      }
      case TO_PAY.TOGETHER: {
        resultRequest = sortIncrease.slice(0, 4).concat(sortIncrease.slice(-4));
        break;
      }
    }

    dispatch(handleRequest(resultRequest));
    setIsResetRequest(true);
  };

  const handleReset = () => {
    setIsResetRequest(false);
    dispatch(handleRequest([]));
  };

  return (
    <>
      <p>виведення 4 товарів з найменшою та найбільшою ціною</p>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              handleFilter(TO_PAY.FOUR_LARGEST);
            }}
            sx={{ mr: "1rem" }}
            color="success"
            variant="contained"
          >
            {TO_PAY.FOUR_LARGEST}
          </Button>
          <Button
            onClick={() => {
              handleFilter(TO_PAY.FOUR_LEAST);
            }}
            color="secondary"
            variant="contained"
          >
            {TO_PAY.FOUR_LEAST}
          </Button>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Button
            onClick={() => {
              handleFilter(TO_PAY.TOGETHER);
            }}
            color="info"
            variant="contained"
          >
            {TO_PAY.TOGETHER}
          </Button>
        </Box>
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

export { FourTovar };
