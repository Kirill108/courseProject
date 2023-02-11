import { useState } from "react";

function DeleteCategory(props) {
  const { isDelete, salesData, setSalesData, setIsRestartPage } = props;

  const [valueOption, setValueOption] = useState();
  const [valueOptionTovar, setValueOptionTovar] = useState();

  const salesManagers = Array.from(
    new Set(salesData.map((item) => item.salesManager))
  );

  const allProducts = Array.from(
    new Set(salesData.map((item) => item.nameTovar))
  );

  const onChangeValueOption = (event) => {
    setValueOption(event.target.value);
  };

  const onChangeValueTovar = (event) => {
    setValueOptionTovar(event.target.value);
  };

  const allManager = salesManagers.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const allTovar = allProducts.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const DeleteSelectedManager = (event) => {
    event.preventDefault();
    setSalesData(
      salesData.filter((recorder) => recorder.salesManager !== valueOption)
    );
    if (allManager.length === 1) {
      setSalesData(
        salesData.filter(
          (recorder) => recorder.salesManager !== salesManagers[0]
        )
      );
    }
    setIsRestartPage(false);
  };

  const DeleteSelectedProducts = (event) => {
    event.preventDefault();
    setSalesData(
      salesData.filter((recorder) => recorder.nameTovar !== valueOptionTovar)
    );
    if (allTovar.length === 1) {
      setSalesData(
        salesData.filter((recorder) => recorder.nameTovar !== allProducts[0])
      );
    }
    setIsRestartPage(false);
  };

  if (isDelete) {
    return (
      <div className="container-form-delete">
        <form className="manager-delete-form" onSubmit={DeleteSelectedManager}>
          <label>Видалити за менеджером</label>
          <select
            id="cars"
            name="cars"
            onChange={onChangeValueOption}
            value={valueOption}
            required
          >
            <option disabled>Оберіть менеджера</option>
            {allManager}
          </select>
          <input type="submit" value="Видалити" />
        </form>

        <form className="product-delete-form" onSubmit={DeleteSelectedProducts}>
          <label>Видалити за товаром</label>
          <select
            id="cars"
            name="cars"
            onChange={onChangeValueTovar}
            value={valueOptionTovar}
            required
          >
            <option disabled>Оберіть товар</option>
            {allTovar}
          </select>
          <input type="submit" value="Видалити" />
        </form>
      </div>
    );
  }
  return null;
}

export { DeleteCategory };
