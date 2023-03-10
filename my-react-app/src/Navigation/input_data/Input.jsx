// import { Theme, useTheme } from "@mui/material/styles";
import "./input.css";

function Input(props) {
  const {
    className,
    typeInput,
    placeholder,
    name,
    id,
    onChange,
    value,
    isSelect,
    dataSelect,
    isEdit,
  } = props;

  if (isSelect) {
    return (
      <>
      {value && isEdit ? <p className="description-input">{placeholder}</p> : ""}
        <select
          value={value}
          onChange={onChange}
          className={(className, "select_date")}
          required="required"
        >
          {isEdit ? (
            <option value="">{value}</option>
          ) : (
            <option value="">{placeholder}</option>
          )}

          {Object.keys(dataSelect).map((key) => (
            <option key={key} value={dataSelect[key]}>
              {dataSelect[key]}
            </option>
          ))}
        </select>
      </>
    );
  }

  return (
    <div className={className}>
      {value && isEdit ? <p className="description-input">{placeholder}</p> : ""}
      <input
        type={typeInput}
        placeholder={placeholder}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}

export { Input };
