import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { ProfessionalInfoSchema } from "@/schemas/register/professional-info.schema";
import { mapProfessionalInfoFields } from "@/constants/register/professional-info.constant";
import { Fieldset } from "@/components/global/fieldset";
import useStepStore from "@/core/stepper-store";
import useFormStore from "@/core/form-store";

export default function ProfessionalInfoForm() {
  const { setStep } = useStepStore();
  const { addForm } = useFormStore();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(ProfessionalInfoSchema)
  });

  const onSubmit = (data: any) => {
    console.log("Dados profissionais enviados:", data);
    setStep("step-4");
    addForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-4 max-w-lg mx-auto w-full"
    >
      {mapProfessionalInfoFields.map((field) =>
        field.type === "text" ? (
          <Fieldset.Input
            key={field.id}
            label={field.label}
            id={field.id}
            register={register}
            helperText={errors?.[field.id]?.message as string}
          />
        ) : (
          <Fieldset.Select
            value={watch(field.id)}
            key={field.id}
            label={field.label}
            id={field.id}
            setValue={setValue}
            error={errors[field.id]?.message as string}
            options={field.options || []}
          />
        )
      )}

      {/* Botão de envio */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </form>
  );
}
