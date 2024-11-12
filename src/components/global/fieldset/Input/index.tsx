import React from "react";
import { TextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { UseFormRegister, FieldValues, useFormContext } from "react-hook-form";

interface CustomTextFieldProps
  extends Omit<MuiTextFieldProps, "error" | "helperText"> {
  id: string;
  register: UseFormRegister<FieldValues>;
  error?: boolean;
  helperText?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  label,
  error,
  helperText,
  register,
  ...rest
}) => {
  return (
    <TextField
      label={label}
      fullWidth
      slotProps={{ inputLabel: { shrink: true } }}
      error={error}
      helperText={helperText}
      {...register(id)}
      {...rest}
    />
  );
};

export default CustomTextField;
