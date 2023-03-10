function ListReact(array) {
  return array.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
}

export { ListReact };
