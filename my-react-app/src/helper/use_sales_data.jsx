import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeSalesData } from "../state/slice/data_sale"; 

function useSalesData() {
  const dispatch = useDispatch();

  const updateSalesData = useCallback(
    (salesData) => {
      try {
        localStorage.setItem("salesData", JSON.stringify(salesData));
        fetch("http://localhost:3001/api/update_json", {
          method: "POST",
          body: JSON.stringify(salesData),
        });
        dispatch(changeSalesData(salesData));
      } catch (error) {
        alert(error);
      }
    },
    [dispatch]
  );

  return updateSalesData;
}

export { useSalesData };
