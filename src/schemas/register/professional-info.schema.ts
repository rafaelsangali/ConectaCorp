import { z } from "zod";

const required = "Campo obrigatório.";
export const ProfessionalInfoSchema = z.object({
  occupation: z.string().min(1, "A ocupação atual é obrigatória."),
  company: z.string().min(1, "A empresa onde trabalha é obrigatória."),
  activitySector: z.string().min(1, "O ramo de atividade é obrigatório."),
  salary: z.string().min(1, "O salário aproximado é obrigatório.")
});
