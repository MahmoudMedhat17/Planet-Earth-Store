import { z } from "zod";


export const formSchema = z.object({
    fullName: z.string().min(3, { message: "Full name must contain at least 3 characters." }).refine((name) => name.trim().split(" ").length > 1, { message: "Full name must include at least a first and last name." }),
    phoneNo: z.string().min(1, { message: "Add a phone number please" }),
    email: z.string().email("Invalid email address"),
    message: z.string().max(500)
});