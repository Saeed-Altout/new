"use client";

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
import { useSendOtp } from "@/hooks/auth/use-send-otp";

export const ForgetPasswordForm = ({ role }: { role: Role }) => {
  const ctx = useTranslations("ForgetPasswordPage.SendOtp");

  const { mutate, isPending } = useSendOtp({ role });

  const form = useForm<z.infer<typeof forgetPasswordSchema>>({
    resolver: zodResolver(forgetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof forgetPasswordSchema>) => {
    mutate(values);
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
                    disabled={isPending}
                    {...field}
                  />
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
