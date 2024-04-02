import * as z from "zod";


export const userEditSchema = z
    .object({
        nickName: z.string().optional(),
        imageProfile: z.string().optional(),
        borderColorImg: z.string().optional(),
    })
