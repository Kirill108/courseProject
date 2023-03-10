import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeSalesData } from "../state/slice/data_sale"; 

function useSalesData() {
  const dispatch = useDispatch();

  const updateSalesData = useCallback(
    (data) => {
      dispatch(changeSalesData(data));
    },
    [dispatch]
  );

  return updateSalesData;
}

export { useSalesData };
