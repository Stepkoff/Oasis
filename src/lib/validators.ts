import z from 'zod';

export const RegisterValidation = z
    .object({
        username: z
            .string()
            .min(5, { message: 'Username must be at least 5 characters.' })
            .max(40, { message: 'Username must be maximum 40 characters.' }),
        email: z.string().email('Should be a valid email.'),
        password: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters.' })
            .max(40, { message: 'Password must be maximum 40 characters.' }),
        confirmPassword: z
            .string()
            .min(8, { message: 'Password must be at least 8 characters.' }),
        // .max(40, { message: "Password must be maximum 40 characters." }),
    })
    .refine(data => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

export const loginValidation = z.object({
    email: z.string().email('Should be a valid email.'),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters.' })
        .max(40, { message: 'Password must be maximum 40 characters.' }),
});
