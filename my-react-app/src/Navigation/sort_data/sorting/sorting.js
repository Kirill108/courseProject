import { SORT } from "../../../const/const";

function sorting(arr, typeSorting) {
  switch (typeSorting) {
    case SORT.NAME_CLIENT_ASCENDING: {
      return [...arr].sort((a, b) => a.fioClient.localeCompare(b.fioClient));
    }

    case SORT.NAME_CLIENT_DESCENDING: {
      return [...arr]
        .sort((a, b) => a.fioClient.localeCompare(b.fioClient))
        .reverse();
    }

    case SORT.AMOUNT_TOVAR_ASCENDING: {
      return [...arr].sort((a, b) => a.amountTovar - b.amountTovar);
    }

    case SORT.AMOUNT_TOVAR_DESCENDING: {
      return [...arr].sort((a, b) => a.amountTovar - b.amountTovar).reverse();
    }
  }
  return null;
}

export { sorting };
