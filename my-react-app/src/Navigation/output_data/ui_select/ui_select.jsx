import { useState, useMemo, useContext } from "react";
import { ListReact } from "../../../helper/react_list";
import { DEFAULT } from "../../../const/const";
import { Grid } from "@mui/material";
import { TYPE_DELETE } from "../../../const/const";
import { SelectFilter } from "./select_filter/select_filter";
import { getUniqueValues } from "../../../helper/get_uniqe_values";
import { ListOptionDeleteContext } from "../../../context/list_delete";
import Button from "@mui/material/Button";

function UiSelect(props) {
  const { salesData, updateSalesData, isList } = props;

  const [oldData, setOldData] = useState(null);

  const [valueOption, setValueOption] = useState(DEFAULT.VALUE);
  const [valueOptionTovar, setValueOptionTovar] = useState(DEFAULT.VALUE);
  const [optionPhone, setOptionPhone] = useState(DEFAULT.VALUE);

  const [isFilter, setIsFilter] = useState(false);

  const setListOptionDelete = useContext(ListOptionDeleteContext);

  const salesManagers = useMemo(
    () => getUniqueValues(salesData, "salesManager"),
    [salesData]
  );
  const allProducts = useMemo(
    () => getUniqueValues(salesData, "nameTovar"),
    [salesData]
  );
  const allNumberPhone = useMemo(
    () => getUniqueValues(salesData, "phone"),
    [salesData]
  );

  const allManager = ListReact(salesManagers);

  const allTovar = ListReact(allProducts);

  const JSX_AllPhone = ListReact(allNumberPhone);

  const handleReset = () => {
    updateSalesData(salesData.concat(oldData));
    setIsFilter(false);
    setListOptionDelete(null);
    setOldData(null);
    setValueOption(DEFAULT.VALUE);
    setValueOptionTovar(DEFAULT.VALUE);
    setOptionPhone(DEFAULT.VALUE);
  };

  const handleOptionChange = (event, filterType) => {
    const option = event.target.value;

    let setState;
    let filterParam;
    let filterParam2;

    switch (filterType) {
      case TYPE_DELETE.MANAGER:
        setState = setValueOption;
        filterParam = "salesManager";
        filterParam2 = salesManagers[0];
        break;
      case TYPE_DELETE.TOVAR:
        setState = setValueOptionTovar;
        filterParam = "nameTovar";
        filterParam2 = allProducts[0];
        break;
      case TYPE_DELETE.PHONE:
        setState = setOptionPhone;
        filterParam = "phone";
        filterParam2 = allNumberPhone[0];
        break;
      default:
        break;
    }

    setState(option);
    event.preventDefault();

    if (!isList) {
      updateSalesData(
        salesData.filter((recorder) => recorder[filterParam] !== option)
      );
      if (allManager.length === 1) {
        updateSalesData(
          salesData.filter((recorder) => recorder[filterParam] !== filterParam2)
        );
      }
    } else {
      if (!oldData) {
        setOldData(
          salesData.filter((recorder) => recorder[filterParam] !== option)
        );
      }
      setListOptionDelete(
        salesData.filter((recorder) => recorder[filterParam] === option)
      );
      if (allManager.length === 1) {
        setListOptionDelete(
          salesData.filter((recorder) => recorder[filterParam] === filterParam2)
        );
      }
      setIsFilter(true);
    }
  };

  const selectConfig = [
    {
      label: "за менеджером",
      value: valueOption,
      onChange: (event) => {
        handleOptionChange(event, TYPE_DELETE.MANAGER);
      },
      options: allManager,
    },
    {
      label: "за товаром",
      value: valueOptionTovar,
      onChange: (event) => {
        handleOptionChange(event, TYPE_DELETE.TOVAR);
      },
      options: allTovar,
    },
    {
      label: "за номером телефона",
      value: optionPhone,
      onChange: (event) => {
        handleOptionChange(event, TYPE_DELETE.PHONE);
      },
      options: JSX_AllPhone,
    },
  ];

  return (
    <>
      <Grid container spacing={3}>
        {selectConfig.map((config, index) => (
          <SelectFilter key={index} {...config} />
        ))}
      </Grid>
      {isFilter ? (
        <Button
          sx={{ minWidth: 200, mt: 2, ml: 27 }}
          variant="outlined"
          onClick={handleReset}
        >
          скинути фільтрацію
        </Button>
      ) : null}
    </>
  );
}

export { UiSelect };
