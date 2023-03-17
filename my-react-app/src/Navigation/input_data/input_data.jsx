import { useState, useEffect } from "react";
import { Input } from "./Input";
import { FormSubmit } from "./form_submit";
import { DEFAULT } from "../../const/const";
import { MANAGER, TOVAR, MAX_LENGTH } from "../../const/const";
import { useSelector, useDispatch } from "react-redux";
import { changeEditingRow } from "../../state/slice/action_row";
import { useSalesData } from "../../helper/use_sales_data";

function InputData(props) {
  const { isEdit } = props;
  const [dateSale, setDateSale] = useState(DEFAULT.VALUE);
  const [fio, setFio] = useState(DEFAULT.VALUE);
  const [nameTovar, setNameTovar] = useState(DEFAULT.VALUE);
  const [amountTovar, setAmountTovar] = useState(DEFAULT.VALUE);
  const [priceOne, setPriceOne] = useState(DEFAULT.VALUE);
  const [fioClient, setFioClient] = useState(DEFAULT.VALUE);
  const [phone, setPhone] = useState(DEFAULT.VALUE);

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  const itemEdit = useSelector((store) => store.edit.editingRow);
  const salesData = useSelector((store) => store.dataSales.salesData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemEdit) {
      setDateSale(salesData[itemEdit.item - 1].dateSale);
      setFio(salesData[itemEdit.item - 1].salesManager);
      setNameTovar(salesData[itemEdit.item - 1].nameTovar);
      setAmountTovar(salesData[itemEdit.item - 1].amountTovar);
      setPriceOne(salesData[itemEdit.item - 1].priceOne);
      setFioClient(salesData[itemEdit.item - 1].fioClient);
      setPhone(salesData[itemEdit.item - 1].phone);
    }
  }, [itemEdit]);

  const checkNumber = (event, set) => {
    if (event.target.value.search(/\d/) !== -1) {
      alert("Вводьте лише літери!");
    } else {
      set(event.target.value);
    }
  };

  const checkLetters = (event, set) => {
    if (/[^0-9]+/g.test(event.target.value)) {
      alert("Вводьте лише числа!");
    } else {
      set(event.target.value);
    }
  };

  const checkLength = (sentences, setSentences, limitSymbol) => {
    if (sentences.length > limitSymbol) {
      alert("Лімит символів перевищено!");
      setSentences(sentences.slice(0, limitSymbol));
    }
  };

  const onChangeDateSale = (event) => {
    setDateSale(event.target.value);
  };

  const onChangeFio = (event) => {
    checkNumber(event, setFio);
  };

  const onChangeNameTovar = (event) => {
    setNameTovar(event.target.value);
  };

  const onChangeAmountTovar = (event) => {
    checkLetters(event, setAmountTovar);
    checkLength(amountTovar, setAmountTovar, MAX_LENGTH.TOVAR);
  };

  const onChangePriceOne = (event) => {
    checkLetters(event, setPriceOne);
    checkLength(priceOne, setPriceOne, MAX_LENGTH.PRICE);
  };

  const onChangeFioClient = (event) => {
    checkNumber(event, setFioClient);
    checkLength(fioClient, setFioClient, MAX_LENGTH.SYMBOL);
  };

  const onChangePhone = (event) => {
    checkLetters(event, setPhone);
    checkLength(phone, setPhone, MAX_LENGTH.PHONE);
  };

  const dataInput = {
    dateSale,
    salesManager: fio,
    nameTovar,
    amountTovar,
    priceOne,
    pay: Number(amountTovar) * Number(priceOne),
    fioClient,
    phone,
    item: salesData.length + 1,
  };

  const setDataInput = [
    setFio,
    setNameTovar,
    setAmountTovar,
    setPriceOne,
    setFioClient,
    setPhone,
    setDateSale,
  ];

  const updateSalesData = useSalesData();

  const formSubmit = (event) => {
    event.preventDefault();
    if (phone.length === 10) {
      FormSubmit(
        dataInput,
        setDataInput,
        salesData,
        updateSalesData,
        setIsFormSubmit
      );
    } else {
      alert("Введіть валідний номер телефону!");
    }
  };

  const formEdit = (event) => {
    event.preventDefault();
    if (phone.length === 10) {
      const updateData = salesData.map((recorder) => {
        if (recorder.item === itemEdit.item) {
          return {
            ...recorder,
            amountTovar,
            dateSale,
            fioClient,
            item: itemEdit.item,
            nameTovar,
            phone,
            priceOne,
            salesManager: fio,
          };
        }
        return recorder;
      });
      updateSalesData(updateData);
      dispatch(changeEditingRow(null));
    } else {
      alert("Введіть валідний номер телефону!");
    }
  };

  const inputConfig = [
    {
      className: "name",
      typeInput: "date",
      placeholder: "Дата продажу",
      name: "name",
      id: 1,
      onChange: onChangeDateSale,
      value: dateSale,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "за менеджером",
      name: "name",
      id: 2,
      onChange: onChangeFio,
      value: fio,
      isSelect: true,
      dataSelect: MANAGER,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "Оберіть товар",
      name: "name",
      id: 3,
      onChange: onChangeNameTovar,
      value: nameTovar,
      isSelect: true,
      dataSelect: TOVAR,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "Кількість товару",
      name: "name",
      id: 4,
      onChange: onChangeAmountTovar,
      value: amountTovar,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "Ціна за одиницю",
      name: "name",
      id: 5,
      onChange: onChangePriceOne,
      value: priceOne,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "ПІБ клієнта",
      name: "name",
      id: 6,
      onChange: onChangeFioClient,
      value: fioClient,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "телефон (095562359)",
      name: "name",
      id: 7,
      onChange: onChangePhone,
      value: phone,
    },
  ];

  const input = inputConfig.map(
    ({
      className,
      typeInput,
      placeholder,
      name,
      id,
      onChange,
      value,
      isSelect,
      dataSelect,
    }) => (
      <Input
        key={id}
        className={className}
        typeInput={typeInput}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        isSelect={isSelect}
        dataSelect={dataSelect}
        isEdit={isEdit}
      />
    )
  );
  return (
    <section id="inputData">
      <div id="container">
        <h1>&bull; {isEdit ? "Редагувати" : "Введіть"} дані продажу &bull;</h1>
        <div className="underline" />
        <form
          action="#"
          method="post"
          id="contact_form"
          onSubmit={isEdit ? formEdit : formSubmit}
        >
          {input}
          <div className="submit">
            <input
              type="submit"
              value={isEdit ? "Редагувати" : "Додати запис"}
              id="form_button"
            />
          </div>
          {isFormSubmit && (
            <div className="message-form-submit">Запис додано</div>
          )}
        </form>
      </div>
    </section>
  );
}

export { InputData };
