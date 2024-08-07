import { z } from "zod";

const VALIDATIONS_MESSAGES = {
    required: (field: string) => `${field} link is required`,
};

export const SaveAvatarSchema = z.object({
    url: z
        .string({
            required_error: VALIDATIONS_MESSAGES.required('URL'),
        })
});

export const ProfileFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters.").max(50, "First name must not exceed 50 characters."),
    lastName: z.string().min(2, "Last name must be at least 2 characters.").max(50, "Last name must not exceed 50 characters."),
    phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number.").optional(),
    extras: z.record(z.string(), z.any()).optional(),
})