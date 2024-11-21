"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Checkbox } from "@/components/ui/checkbox";

import { loginSchema } from "@/Schemas";
import { Role } from "@/config/enums";
import { WrapperForm } from "./wrapper-form";
import { useLogin } from "@/hooks/auth/use-login";

export const LoginForm = ({ role }: { role: Role }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const { mutate, isPending } = useLogin({ role });
  const ctx = useTranslations("LoginPage");

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember_me: false,
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    mutate({ ...values });
  };

  return (
    <WrapperForm title={ctx("title")} role={role} google facebook>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ctx("email-input.label")}</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder={ctx("email-input.placeholder")}
                    disabled={isPending}
                    {...field}
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
                <FormLabel>{ctx("password-input.label")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isPassword ? "password" : "text"}
                      placeholder={ctx("password-input.placeholder")}
                      disabled={isPending}
                      {...field}
                    />
                    <div
                      role="button"
                      onClick={() => setIsPassword((prev) => !prev)}
                      className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-11 w-11 flex justify-center items-center"
                    >
                      {isPassword ? (
                        <Eye className="h-5 w-5 text-[#999999]" />
                      ) : (
                        <EyeOff className="h-5 w-5 text-[#999999]" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="remember_me"
            render={({ field }) => (
              <FormItem className="flex items-center justify-start gap-3">
                <FormControl>
                  <Checkbox
                    disabled={isPending}
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal pb-2">
                  {ctx("checkbox")}
                </FormLabel>
              </FormItem>
            )}
          />
          <div className="flex justify-end items-center flex-col gap-4">
            <Button disabled={isPending} type="submit" className="w-full">
              {ctx("auth-button")} {isPending && <Spinner />}
            </Button>
            <Button
              variant="link"
              size="sm"
              disabled={isPending}
              className="px-0 w-fit ml-auto"
              asChild
            >
              <Link href={`/${role}/auth/forget-password`}>
                {ctx("forgot-password-link")}
              </Link>
            </Button>
          </div>
        </form>
      </Form>
    </WrapperForm>
  );
};
