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
import { Label } from "@/components/ui/label";

import { WrapperForm } from "./wrapper-form";
import { loginSchema } from "@/Schemas";
import { Role } from "@/config";
import { Link } from "@/i18n/routing";

export const LoginForm = ({ role }: { role?: Role }) => {
  const ctx = useTranslations("LoginPage");
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRemember, setIsRemember] = useState<boolean>(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    console.log(values);
    setIsLoading(true);
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
                    disabled={isLoading}
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
                      disabled={isLoading}
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
          <div className="flex items-center justify-start gap-3">
            <Checkbox
              checked={isRemember}
              onCheckedChange={() => setIsRemember((prev) => !prev)}
            />
            <Label>{ctx("checkbox")}</Label>
          </div>
          <div className="flex justify-end items-center flex-col gap-4">
            <Button disabled={isLoading} type="submit" className="w-full">
              {ctx("auth-button")} {isLoading && <Spinner />}
            </Button>
            <Button
              variant="link"
              size="sm"
              className="px-0 w-fit ml-auto"
              asChild
            >
              <Link href="/auth/forget-password">
                {ctx("forgot-password-link")}
              </Link>
            </Button>
          </div>
        </form>
      </Form>
    </WrapperForm>
  );
};
