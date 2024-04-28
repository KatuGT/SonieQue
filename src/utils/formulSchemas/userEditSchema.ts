import * as z from "zod";


export const userEditSchema = z
    .object({
        nickName: z.string().optional(),
        imageProfile: z.instanceof(File).optional(),
        borderColorImg: z.string().optional(),
})
