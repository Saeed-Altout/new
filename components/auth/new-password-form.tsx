"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

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

import { WrapperForm } from "./wrapper-form";
import { newPasswordSchema } from "@/Schemas";
import { Role } from "@/config/enums";
import { useNewPassword } from "@/hooks/auth/use-new-password";
import { useTranslations } from "next-intl";

export const NewPasswordForm = ({ role }: { role: Role }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState<boolean>(true);

  const ctx = useTranslations("ForgetPasswordPage.NewPassword");
  const { mutate, isPending } = useNewPassword({ role });

  const form = useForm<z.infer<typeof newPasswordSchema>>({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: "",
      password_confirmation: "",
    },
  });

  const onSubmit = (values: z.infer<typeof newPasswordSchema>) => {
    mutate(values);
  };

  return (
    <WrapperForm title={ctx("title")} role={role}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
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
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ctx("confirmed-password-input.label")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isConfirmedPassword ? "password" : "text"}
                      placeholder={ctx("confirmed-password-input.placeholder")}
                      disabled={isPending}
                      {...field}
                    />
                    <div
                      role="button"
                      onClick={() => setIsConfirmedPassword((prev) => !prev)}
                      className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-11 w-11 flex justify-center items-center"
                    >
                      {isConfirmedPassword ? (
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
          <Button disabled={isPending} type="submit" className="w-full">
            {ctx("auth-button")} {isPending && <Spinner />}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
