import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import { loginValidation } from '@/lib/validators';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from './ui/form';
// import { Link } from 'react-router-dom';

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    const form = useForm<z.infer<typeof loginValidation>>({
        resolver: zodResolver(loginValidation),
        defaultValues: {
            password: '',
            email: '',
        },
        mode: 'onChange',
    });

    const handleSubmit = (values: z.infer<typeof loginValidation>) => {
        console.log('values', values);
        form.reset();
    };

    return (
        <div className={cn('flex flex-col gap-6', className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(handleSubmit)}>
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="mail@example.com"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    placeholder="********"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="text-end text-sm">
                                    {/* <Link
                                        to={'/resetPassword'}
                                        className="underline underline-offset-4"
                                    >
                                        Forgot password?
                                    </Link> */}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <Button
                                        className="w-full cursor-pointer"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                </div>
                            </div>
                            <div className="mt-4 text-center text-sm">
                                Don&apos;t have an account?{' '}
                                {/* <Link
                                    to={'/register'}
                                    className="underline underline-offset-4"
                                >
                                    Sign up
                                </Link> */}
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
