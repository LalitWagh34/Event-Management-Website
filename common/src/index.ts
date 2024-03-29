import z from "zod";

export const signupBody =z.object({
    username:z.string().email(),
    password:z.string().min(6),
    firstname:z.string(),
    lastname:z.string()

})
export const signinBody =z.object({
    username:z.string().email(),
    password:z.string().min(6),
})

export type SignupBody = z.infer<typeof signupBody>
export type SigninBody = z.infer<typeof signinBody>