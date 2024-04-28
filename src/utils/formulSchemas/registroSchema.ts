import * as z from "zod";


export const registroSchema = z
    .object({
        nickName: z
            .string()
            .min(4, "Mínimo 4 caracteres")
            .max(15, "Máximo 15 carácteres"),
        email: z.string().email("Ingresa un e-mail valido."),
        password: z
            .string()
            .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*()?]).{8,}$/, "Ver requerimientos"),
        passwordConfirm: z.string().min(8, "Contraseña incorrecta"),
    })
    .required()
    .refine((data) => data.password === data.passwordConfirm, {
        message: "Las contraseñas no coinciden",
    });