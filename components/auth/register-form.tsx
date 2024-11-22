"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Link, useRouter } from "@/i18n/routing";
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
import { Checkbox } from "@/components/ui/checkbox";

import { Role } from "@/config/enums";
// import { useRegister } from "@/hooks/auth/use-register";
import { registerSchema } from "@/Schemas";
import { WrapperForm } from "./wrapper-form";

export const RegisterForm = ({ role }: { role: Role }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isRepeatPassword, setIsRepeatPassword] = useState<boolean>(true);
  const ctx = useTranslations("RegisterPage");
  const router = useRouter();
  // const { mutate, isPending } = useRegister();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
      terms: false,
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    const data = { ...values, role };
    localStorage.setItem("currentUser", JSON.stringify(data));
    router.push(`/${role}/auth/create-new-team`);
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
                <FormLabel>{ctx("repeat-password-input.label")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isRepeatPassword ? "password" : "text"}
                      placeholder={ctx("repeat-password-input.placeholder")}
                      {...field}
                    />
                    <div
                      role="button"
                      onClick={() => setIsRepeatPassword((prev) => !prev)}
                      className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-11 w-11 flex justify-center items-center"
                    >
                      {isRepeatPassword ? (
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
            name="terms"
            render={({ field }) => (
              <FormItem className="flex items-center justify-start gap-3">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="font-normal pb-2">
                  {ctx("checkbox")}
                  <Link href="/terms" className="font-medium hover:underline">
                    {ctx("special_checkbox")}
                  </Link>
                </FormLabel>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            {ctx("auth-button")}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
