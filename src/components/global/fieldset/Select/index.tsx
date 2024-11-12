import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from "@mui/material";
import { UseFormSetValue } from "react-hook-form";

type FormSelectFieldProps = {
  id: string;
  label: string;
  setValue: UseFormSetValue<any>;
  error?: string;
  options: { value: string; label: string }[];
  multiple?: boolean;
  value: any;
};

const CustomSelectField: React.FC<FormSelectFieldProps> = ({
  id,
  label,
  setValue,
  error,
  options,
  multiple = false,
  value
}) => {
  const handleSelectChange = (event: SelectChangeEvent<any>) => {
    setValue(id, event.target.value);
  };

  return (
    <FormControl fullWidth variant="outlined" error={!!error}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        multiple={multiple}
        value={value || []}
        onChange={handleSelectChange}
        renderValue={(selected) =>
          Array.isArray(selected) ? selected.join(", ") : selected
        }
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </FormControl>
  );
};

export default CustomSelectField;
