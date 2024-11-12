import moment from "moment";
import { z } from "zod";
export const PersonalInfoSchema = z.object({
  fullName: z.string().min(1, "O nome completo é obrigatório."),
  birthDate: z
    .string()
    .refine(
      (date) => moment().diff(moment(date, "YYYY-MM-DD"), "years") >= 18,
      "Você deve ser maior de idade."
    )
    .optional(),
  email: z
    .string()
    .email("Digite um endereço de e-mail válido.")
    .nonempty("O e-mail é obrigatório."),
  phone: z.string().min(14, "Digite um telefone válido")
});
