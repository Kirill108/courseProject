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
  } = props;

  if (isSelect) {
    return (
      <select
        value={value}
        onChange={onChange}
        className={(className, "select_date")}
        required="required"
      >
        <option value="">{placeholder}</option>
        {Object.keys(dataSelect).map((key) => (
          <option key={key} value={dataSelect[key]}>
            {dataSelect[key]}
          </option>
        ))}
      </select>
    );
  }

  return (
    <div className={className}>
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
