import { z } from "zod";
export const AddressSchema = z.object({
  street: z.string().min(1, "A rua é obrigatória."),
  city: z.string().min(1, "A cidade é obrigatória."),
  state: z.string().min(1, "O estado é obrigatório."),
  country: z.string().min(1, "O país é obrigatório."),
  cep: z.string().min(8, "O CEP é inválido.")
});
