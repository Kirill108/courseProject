import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OutputData } from "../output_data/output_data";
import { ListReact } from "../../helper/react_list";
import { SORT } from "../../const/const";
import { changeOptionSort } from "../../state/slice/data_sort";
import { changeSalesData } from "../../state/slice/data_sale";
import { sorting } from "./sorting/sorting";
import "./sort_data.css";

function SortData() {
  const [optionSort, setOptionSort] = useState();
  const dispatch = useDispatch();
  const dataSale = useSelector((store) => store.dataSales.salesData);
  const sortOption = ListReact(Object.values(SORT));

  function handleSort(event) {
    const typeSort = event.target.value;
    setOptionSort(typeSort);

    const sortArr = sorting(dataSale, typeSort)
    dispatch(changeSalesData(sortArr));

    // dispatch(changeOptionSort(typeSort));
  }

  return (
    <section id="sortData" className="section-sort">
      <div className="sort-container">
        <h2>Сортування</h2>
        <select onChange={handleSort} value={optionSort} defaultValue="">
          <option value="" disabled>
            Оберіть сортування
          </option>
          {sortOption}
        </select>
      </div>
      <OutputData isSort />
    </section>
  );
}

export { SortData };
