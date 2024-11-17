"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
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

import { registerSchema } from "@/Schemas";
import { Link } from "@/i18n/routing";
import { useRegisterStudent } from "@/hooks/use-register";
import { WrapperForm } from "./wrapper-form";

export const RegisterStudentForm = () => {
  // State Management
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isRepeatPassword, setIsRepeatPassword] = useState<boolean>(true);

  // Localization
  const ctx = useTranslations("RegisterStudentPage");

  // Hooks
  const { mutate, isPending } = useRegisterStudent();

  // Form
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      password_confirmation: "",
      terms: false,
    },
  });

  // Handlers
  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    mutate({
      ...values,
      role: "student",
    });
  };

  return (
    <WrapperForm title={ctx("title")} role={"student"} google facebook>
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
            name="password_confirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ctx("repeat-password-input.label")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isRepeatPassword ? "password" : "text"}
                      placeholder={ctx("repeat-password-input.placeholder")}
                      disabled={isPending}
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

          <Button disabled={isPending} type="submit" className="w-full">
            {ctx("auth-button")} {isPending && <Spinner />}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};