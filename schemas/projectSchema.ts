import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, { message: "Title is required." }),
  description: z.string().min(1, { message: "Description is required." }),
  budget: z.number().positive("Budget must be a positive number."),
  jobCategory: z.enum([
    "WEB_DEVELOPMENT",
    "MOBILE_DEVELOPMENT",
    "GRAPHIC_DESIGN",
    "DIGITAL_MARKETING",
    "WRITING",
    "VIDEO_EDITING",
    "OTHER",
  ]),
});

export const requestSchema = z.object({
  project: projectSchema,
  userRole: z.enum(["CLIENT", "FREELANCER"]),
  userId: z.string({ message: "User ID is required." }),
});

export const updatedProjectSchema = z.object({
  project: projectSchema,
  userId: z.string({ message: "User ID is required." }),
});
