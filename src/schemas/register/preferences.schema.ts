import { z } from "zod";
export const PreferencesSchema = z.object({
  interests: z
    .array(z.string())
    .min(1, "Você deve selecionar pelo menos um produto ou serviço."),
  knownFrom: z
    .array(z.string())
    .min(
      1,
      "Você deve selecionar pelo menos uma forma de conhecer a ConectaCorp."
    )
});
