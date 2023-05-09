import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { changeSalesData } from "../state/slice/data_sale";

function useSalesData() {
  const dispatch = useDispatch();

  const updateSalesData = useCallback(
    (salesData) => {
      try {
        const newSalesData = salesData.map((recorder, index) => ({
          ...recorder,
          item: index + 1,
        }));
        fetch("http://localhost:3001/api/update_json", {
          method: "POST",
          body: JSON.stringify(newSalesData),
        });
        dispatch(changeSalesData(newSalesData));
      } catch (error) {
        alert(error);
      }
    },
    [dispatch]
  );

  return updateSalesData;
}

export { useSalesData };
