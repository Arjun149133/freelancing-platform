import { z } from "zod";

export const proposalSchema = z.object({
  freelancerId: z.string(),
  coverLetter: z.string().min(1, "Cover letter is required"),
  price: z.number().int().positive("Price must be a positive number"),
  deliveryDate: z.string().datetime(),
});
