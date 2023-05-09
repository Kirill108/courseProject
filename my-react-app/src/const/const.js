const DEFAULT = {
  VALUE: "",
};

const MANAGER = {
  OSIPENKO: "Осипенко Д.І.",
  KORNIENKO: "Корнієнко М.М.",
  ZADOROZHNYA: "Задорожня А.С.",
  KOTENKO: "Котенко О.В.",
};

const TOVAR = {
  HEADPHONE: "проводні навушники",
  BLUETOOTH_SPEAKER: "блютуз колонка",
  PHONE: "телефон",
  COMPUTER: "комп'ютер",
  CAMERA: "фотоапарат",
};

const MAX_LENGTH = {
  TOVAR: 5,
  PRICE: 5,
  SYMBOL: 35,
  PHONE: 10,
};

const SORT = {
  NAME_CLIENT_ASCENDING: "ПІБ клієнта (зростання)",
  NAME_CLIENT_DESCENDING: "ПІБ клієнта (спадання)",
  AMOUNT_TOVAR_ASCENDING: "кількість товару (зростання)",
  AMOUNT_TOVAR_DESCENDING: "кількість товару (спадання)",
};

const TYPE_DELETE = {
  MANAGER: "manager",
  TOVAR: "tovar",
  PHONE: "phone",
};

const TO_PAY = {
  FOUR_LARGEST: "4 найбільших",
  FOUR_LEAST: "4 найменших",
  TOGETHER: "Разом",
};

const REGEX = {
  LETTER: /^[a-zA-Zа-яА-ЯіІїЇєЄ' ]+$/,
  PHONE: /^0\d{9}$/,
};

// const REQUEST = {
//   DATA: "",
// }

export {
  DEFAULT,
  MANAGER,
  TOVAR,
  MAX_LENGTH,
  SORT,
  TYPE_DELETE,
  TO_PAY,
  REGEX,
};
