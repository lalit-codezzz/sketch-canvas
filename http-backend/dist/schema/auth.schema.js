import z from "zod";
export const signupSchema = z.object({
    name: z.string().trim().min(2, "Invalid name!"),
    email: z.email({ pattern: z.regexes.email, error: "Invalid email!" }),
    password: z
        .string()
        .trim()
        .min(5, "Minimum 5 characters password is required!"),
});
export const signinSchema = z.object({
    email: z.email({ pattern: z.regexes.email, error: "Invalid email!" }),
    password: z
        .string()
        .trim()
        .min(5, "Minimum 5 characters password is required!"),
});
