import { Checkbox, FormControlLabel } from "@mui/material";
import { useForm } from "react-hook-form";

type FormCheckboxGroupProps = {
  label: string;
  id: string;
  register: ReturnType<typeof useForm>["register"];
  error?: string;
  options: { value: string; label: string }[];
};

const CustomCheckbox: React.FC<FormCheckboxGroupProps> = ({
  label,
  id,
  register,
  error,
  options
}) => (
  <div className="flex flex-col gap-2">
    <label>{label}</label>
    <div className="space-y-2">
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={<Checkbox {...register(id)} value={option.value} />}
          label={option.label}
        />
      ))}
    </div>
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

export default CustomCheckbox;
