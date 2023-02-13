import { useState, useEffect } from "react";
import { Input } from "./Input";
import { FormSubmit } from "./form_submit";
import { DEFAULT } from "../../const/const";
import { MANAGER, TOVAR, MAX_LENGTH } from "../../const/const";

function InputData(props) {
  const { salesData, setSalesData, isRestartPage, setIsRestartPage } = props;
  const [dateSale, setDateSale] = useState(DEFAULT.VALUE);
  const [fio, setFio] = useState(DEFAULT.VALUE);
  const [nameTovar, setNameTovar] = useState(DEFAULT.VALUE);
  const [amountTovar, setAmountTovar] = useState(DEFAULT.VALUE);
  const [priceOne, setPriceOne] = useState(DEFAULT.VALUE);
  const [fioClient, setFioClient] = useState(DEFAULT.VALUE);
  const [phone, setPhone] = useState(DEFAULT.VALUE);

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  useEffect(() => {
    if (!isRestartPage) {
      try {
        localStorage.setItem("salesData", JSON.stringify(salesData));
        fetch("http://localhost:3001/api/update_json", {
          method: "POST",
          body: JSON.stringify(salesData),
        });
        console.log("efect");
      } catch (error) {
        alert(error);
      }
    }
  }, [salesData]);

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem("salesData"));
      if (data) {
        setSalesData(data);
      }
    } catch (error) {
      alert(error);
    }
  }, []);

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
    // number: isRestartPage,
    dateSale,
    salesManager: fio,
    nameTovar,
    amountTovar,
    priceOne,
    pay: Number(amountTovar) * Number(priceOne),
    fioClient,
    phone,
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

  const formSubmit = (event) => {
    event.preventDefault();
    FormSubmit(dataInput, setDataInput, salesData, setSalesData);
    setIsFormSubmit(true);
    setIsRestartPage(false);
    setTimeout(() => {
      setIsFormSubmit(false);
    }, 1000);
  };

  const inputConfig = [
    {
      className: "name",
      typeInput: "date",
      placeholder: "Дата продажу",
      name: "name",
      id: "name_input",
      onChange: onChangeDateSale,
      value: dateSale,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "Оберіть менеджера",
      name: "name",
      id: "name_input",
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
      id: "name_input",
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
      id: "name_input",
      onChange: onChangeAmountTovar,
      value: amountTovar,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "Ціна за одиницю",
      name: "name",
      id: "name_input",
      onChange: onChangePriceOne,
      value: priceOne,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "ПІБ клієнта",
      name: "name",
      id: "name_input",
      onChange: onChangeFioClient,
      value: fioClient,
    },
    {
      className: "name",
      typeInput: "text",
      placeholder: "телефон (095562359)",
      name: "name",
      id: "name_input",
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
        className={className}
        typeInput={typeInput}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        isSelect={isSelect}
        dataSelect={dataSelect}
      />
    )
  );
  return (
    <section id="inputData">
      <div id="container">
        <h1>&bull; Введіть дані продажу &bull;</h1>
        <div className="underline" />
        <form action="#" method="post" id="contact_form" onSubmit={formSubmit}>
          {input}
          <div className="submit">
            <input type="submit" value="Додати запис" id="form_button" />
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
