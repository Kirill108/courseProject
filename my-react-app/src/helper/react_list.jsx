import MenuItem from "@mui/material/MenuItem";

function ListReact(array) {
  return array.map((item, index) => (
    <MenuItem key={index} value={item}>
      {item}
    </MenuItem>
  ));
}

export { ListReact };
