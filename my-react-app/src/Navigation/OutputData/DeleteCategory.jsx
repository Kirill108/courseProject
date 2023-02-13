import { useState } from "react";
import { ListReact } from "../../helper/react_list";

function DeleteCategory(props) {
  const { isDelete, salesData, setSalesData, setIsRestartPage } = props;

  const [valueOption, setValueOption] = useState();
  const [valueOptionTovar, setValueOptionTovar] = useState();
  const [optionPhone, setOptionPhone] = useState();
  const [optionItem, setOptionItem] = useState();

  const salesManagers = Array.from(
    new Set(salesData.map((item) => item.salesManager))
  );

  const allProducts = Array.from(
    new Set(salesData.map((item) => item.nameTovar))
  );

  const allNumberPhone = Array.from(
    new Set(salesData.map((item) => item.phone))
  );

  const allItem = Array.from(new Set(salesData.map((item) => item.item)));

  const allManager = ListReact(salesManagers);

  const allTovar = ListReact(allProducts);

  const JSX_AllPhone = ListReact(allNumberPhone);

  const JSX_AllItem = ListReact(allItem);

  const onChangeValueOption = (event) => {
    setValueOption(event.target.value);
  };

  const onChangeValueTovar = (event) => {
    setValueOptionTovar(event.target.value);
  };

  const onChangeValuePhone = (event) => {
    setOptionPhone(event.target.value);
  };

  const onChangeValueItem = (event) => {
    setOptionItem(event.target.value);
  };

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

  const DeleteSelectedPhone = (event) => {
    event.preventDefault();
    setSalesData(
      salesData.filter((recorder) => recorder.phone !== optionPhone)
    );
    if (JSX_AllPhone.length === 1) {
      setSalesData(
        salesData.filter((recorder) => recorder.phone !== allNumberPhone[0])
      );
    }
    setIsRestartPage(false);
  };

  const DeleteSelectedItem = (event) => {
    event.preventDefault();
    setSalesData(
      salesData.filter((recorder) => recorder.item !== Number(optionItem))
    );
    console.log("optionItem: ", optionItem);
    if (JSX_AllItem.length === 1) {
      setSalesData(
        salesData.filter((recorder) => recorder.item !== allItem[0])
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
            <option selected>Оберіть менеджера</option>
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
            <option selected>Оберіть товар</option>
            {allTovar}
          </select>
          <input type="submit" value="Видалити" />
        </form>
        <form className="product-delete-form" onSubmit={DeleteSelectedPhone}>
          <label>Видалити за номером телефона</label>
          <select
            id="cars"
            name="cars"
            onChange={onChangeValuePhone}
            value={optionPhone}
            required
          >
            <option selected>Оберіть номер</option>
            {JSX_AllPhone}
          </select>
          <input type="submit" value="Видалити" />
        </form>
        <form className="product-delete-form" onSubmit={DeleteSelectedItem}>
          <label>Видалити за номером запису</label>
          <select
            id="cars"
            name="cars"
            onChange={onChangeValueItem}
            value={optionItem}
            required
          >
            <option selected>Оберіть номер</option>
            {JSX_AllItem}
          </select>
          <input type="submit" value="Видалити" />
        </form>
      </div>
    );
  }
  return null;
}

export { DeleteCategory };
