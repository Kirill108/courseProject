import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DEFAULT } from "../../../const/const";
import { handleRequest } from "../../../state/slice/data_request";

import Box from "@mui/material/Box";
import Input from "@mui/joy/Input";
import Button from "@mui/material/Button";

function MoreOrLess() {
  const dispatch = useDispatch();

  const [inputNumber, setInputNumber] = useState(DEFAULT.VALUE);
  const [isMore, setIsMore] = useState(true);
  const [isResetRequest, setIsResetRequest] = useState(false);

  const salesData = useSelector((store) => store.dataSales.salesData);

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
  };

  const handleReset = (event) => {
    setIsResetRequest(false);
    dispatch(handleRequest([]));
    setInputNumber(DEFAULT.VALUE);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const resultRequest = salesData.filter((item) => {
      if (isMore) {
        return item.pay > inputNumber;
      }
      return item.pay < inputNumber;
    });
    if (resultRequest.length) {
      dispatch(handleRequest(resultRequest));
      setIsResetRequest(true);
      // setInputNumber(DEFAULT.VALUE);
    } else {
      const choice = isMore ? "більше" : "менше";
      alert(`Немає даних за сумою до сплати ${choice} за ${inputNumber}`);
    }
  };

  return (
    <>
      <p>
        виведення даних за сумою до сплати більше або менше значення, яке було
        введене користувачем
      </p>
      <Box
        sx={{
          maxWidth: 200,
          margin: "auto",
        }}
      >
        <form onSubmit={handleSubmitForm}>
          <Input
            sx={{
              mt: 2,
            }}
            type="number"
            placeholder="Введіть число"
            onChange={handleInputChange}
            value={inputNumber}
            required
          />
          <Box
            sx={{
              mt: 2,
              // // maxWidth: 200,
              // display: "flex",
              // alignItems: "space-between",
            }}
          >
            <Button
              sx={{ mr: 3.4 }}
              type="submit"
              variant="contained"
              color="success"
              onClick={() => {
                setIsMore(true);
              }}
            >
              Більше
            </Button>
            <Button
              onClick={() => {
                setIsMore(false);
              }}
              type="submit"
              variant="contained"
              color="error"
            >
              Менше
            </Button>
            {isResetRequest ? (
              <Button
                sx={{ minWidth: 200, mt: 2 }}
                variant="outlined"
                onClick={handleReset}
              >
                скинути запит
              </Button>
            ) : null}
          </Box>
        </form>
      </Box>
    </>
  );
}

export { MoreOrLess };
