"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { Fieldset } from "@/components/global/fieldset";
import { mapPersonalInfoFields } from "@/constants/register/personal-info.constant";
import { PersonalInfoSchema } from "@/schemas/register/personal-info.schema";
import mask from "@/utils/mask";
import useStepStore from "@/core/stepper-store";
import useFormStore from "@/core/form-store";

export default function PersonalInfoForm() {
  const { setStep } = useStepStore();
  const { addForm } = useFormStore();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(PersonalInfoSchema)
  });

  const onSubmit = (data: any) => {
    console.log("Dados enviados:", data);
    setStep("step-2");
    addForm(data);
  };

  const mapFields = [
    ...mapPersonalInfoFields,
    {
      id: "phone",
      label: "Telefone",
      placeholder: "(11) 12345-6789",
      type: "text",
      onChange: (e: any) => setValue("phone", mask.phone(e.target.value))
    }
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      id="form-step-1"
      className="p-6 space-y-4 max-w-lg mx-auto w-full"
    >
      {mapFields.map((props) => (
        <div key={props.id}>
          <Fieldset.Input
            error={!!errors?.[props.id]}
            fullWidth
            helperText={errors?.[props.id]?.message as string}
            register={register}
            {...props}
          />
        </div>
      ))}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Próximo
      </Button>
    </form>
  );
}
