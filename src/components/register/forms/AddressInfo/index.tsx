import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import React from "react";
import { mapAddressFields } from "@/constants/register/address-info.constant";
import { Fieldset } from "@/components/global/fieldset";
import useCep from "@/hooks/useCep";
import mask from "@/utils/mask";
import { AddressSchema } from "@/schemas/register/address.schema";
import useStepStore from "@/core/stepper-store";
import useFormStore from "@/core/form-store";

export default function AddressInfo() {
  const { setStep } = useStepStore();
  const { addForm } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue
  } = useForm({
    resolver: zodResolver(AddressSchema)
  });

  useCep(watch("cep"), (data) => {
    const obj = {
      street: data.logradouro,
      city: data.localidade,
      state: data.estado,
      country: "Brasil"
    };
    Object.entries(obj).forEach((arg) => {
      const key = arg[0];
      const value = arg[1];
      setValue(key, value);
    });
  });
  const onSubmit = (data: any) => {
    console.log("Informações de endereço enviadas:", data);
    setStep("step-3");
    addForm(data);
  };

  const mapFields = [
    {
      id: "cep",
      label: "CEP",
      placeholder: "Insira o CEP",
      type: "text",
      onChange: (e: any) => setValue("cep", mask.cep(e.target.value))
    },
    ...mapAddressFields
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 space-y-4 max-w-lg mx-auto w-full"
    >
      {/* Endereço residencial */}
      <div className="space-y-4">
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
      </div>

      {/* Botão de envio */}
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Enviar
      </Button>
    </form>
  );
}
