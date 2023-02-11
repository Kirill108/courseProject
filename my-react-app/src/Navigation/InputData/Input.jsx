function Input(props) {
  const { className, typeInput, placeholder, name, id, onChange, value } = props;
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
