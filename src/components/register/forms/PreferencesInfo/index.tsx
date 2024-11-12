import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import { mapPreferencesFields } from "@/constants/register/preferences.constant";
import { Fieldset } from "@/components/global/fieldset";
import useStepStore from "@/core/stepper-store";
import { PreferencesSchema } from "@/schemas/register/preferences.schema";
import useFormStore from "@/core/form-store";

export default function PreferencesInfo() {
  const { setStep } = useStepStore();
  const { addForm } = useFormStore();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(PreferencesSchema)
  });

  const onSubmit = (data: any) => {
    console.log("Preferências e interesses enviados:", data);
    setStep("step-5");
    addForm(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-4 max-w-lg mx-auto w-full"
    >
      {mapPreferencesFields.map((field) => {
        switch (field.type) {
          case "select":
            return (
              <Fieldset.Select
                key={field.id}
                value={watch(field.id)}
                label={field.label}
                id={field.id}
                setValue={setValue}
                error={errors?.[field.id]?.message as string}
                options={field.options}
                multiple={field.multiple}
              />
            );
          case "checkboxGroup":
            return (
              <Fieldset.Checkbox
                key={field.id}
                label={field.label}
                id={field.id}
                register={register}
                error={errors?.[field.id]?.message as string}
                options={field.options}
              />
            );
          default:
            return null;
        }
      })}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </form>
  );
}
