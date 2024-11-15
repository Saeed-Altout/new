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
import { registerSchema } from "@/Schemas";
import { Role } from "@/config";
import { Link, useRouter } from "@/i18n/routing";

export const RegisterForm = ({ role }: { role?: Role }) => {
  const ctx = useTranslations("RegisterPage");
  const router = useRouter();
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isRepeatPassword, setIsRepeatPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isRemember, setIsRemember] = useState<boolean>(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmed_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(values);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      router.push("/auth/login");
    }, 3000);

    return () => clearTimeout(timer);
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
          <FormField
            control={form.control}
            name="confirmed_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{ctx("repeat-password-input.label")}</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isRepeatPassword ? "password" : "text"}
                      placeholder={ctx("repeat-password-input.placeholder")}
                      disabled={isLoading}
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
          <div className="flex items-center justify-start gap-3">
            <Checkbox
              checked={isRemember}
              onCheckedChange={() => setIsRemember((prev) => !prev)}
            />
            <Label className="font-normal">
              {ctx("checkbox")}{" "}
              <Link href="/terms" className="font-medium hover:underline">
                {ctx("special_checkbox")}
              </Link>
            </Label>
          </div>
          <Button disabled={isLoading} type="submit" className="w-full">
            {ctx("auth-button")} {isLoading && <Spinner />}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
