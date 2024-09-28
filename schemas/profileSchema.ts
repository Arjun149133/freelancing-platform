import { z } from "zod";

const skillSchema = z.object({
  name: z.string().min(1, "Skill name is required"),
});

const experienceSchema = z.object({
  companyName: z.string().min(1, "Company name is required"),
  role: z.string().min(1, "Role is required"),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().optional(),
  description: z.string().optional(),
});

const educationSchema = z.object({
  schoolName: z.string().min(1, "School name is required"),
  degree: z.string().min(1, "Degree is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  startDate: z.string().datetime(),
  endDate: z.string().datetime().optional(),
});

const certificateSchema = z.object({
  name: z.string().min(1, "Certificate name is required"),
  issuingOrg: z.string().min(1, "Issuing organization is required"),
  issueDate: z.string().datetime(),
  expiryDate: z.string().datetime().optional(),
});

export const profileSchema = z.object({
  userId: z.string(),
  bio: z.string().optional(),
  profilePictureUrl: z.string().optional(),
  skills: z.array(skillSchema).optional(),
  experience: z.array(experienceSchema).optional(),
  education: z.array(educationSchema).optional(),
  certificates: z.array(certificateSchema).optional(),
});
