import * as z from "zod";


export const loginSchema = z
    .object({
        email: z.string().email("Ingresa un e-mail valido."),
        loginKey: z.string().min(8, "Contraseña incorrecta"),
        recordarme: z.boolean().default(false),
    })
    .required();
