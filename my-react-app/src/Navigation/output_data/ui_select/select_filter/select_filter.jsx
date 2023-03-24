import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid } from "@mui/material";

function SelectFilter({
  label,
  value,
  onChange,
  options,
  minWidth = 220,
  pr = 5,
}) {
  return (
    <Grid item xs={6} sx={{ minWidth, pr }}>
      <FormControl fullWidth>
        <InputLabel id={`demo-simple-select-label-${label}`}>
          {label}
        </InputLabel>
        <Select
          labelId={`demo-simple-select-label-${label}`}
          id={`demo-simple-select-${label}`}
          value={value}
          label={label}
          onChange={onChange}
        >
          {options}
        </Select>
      </FormControl>
    </Grid>
  );
}

export { SelectFilter };
