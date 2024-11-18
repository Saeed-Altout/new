"use client";

import { useState } from "react";

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
import { forgetPasswordSchema } from "@/Schemas";
import { Role } from "@/config/enums";
import { useTranslations } from "next-intl";

export const ForgetPasswordForm = ({ role }: { role?: Role }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ctx = useTranslations("ForgetPasswordPage");

  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof forgetPasswordSchema>) => {
    console.log(values);
    setIsLoading(true);
  };

  return (
    <WrapperForm title={ctx("title")} role={role}>
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
          <Button disabled={isLoading} type="submit" className="w-full">
            {ctx("auth-button")} {isLoading && <Spinner />}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
