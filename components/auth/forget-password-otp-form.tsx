"use client";

import { useEffect, useState } from "react";
import { REGEXP_ONLY_DIGITS } from "input-otp";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { WrapperForm } from "./wrapper-form";
import { forgetPasswordOtpSchema } from "@/Schemas";
import { Role } from "@/config/enums";
import { useVerifyOtp } from "@/hooks/auth/use-verify-otp";
import { EMAIL } from "@/config/constants";
import { useTranslations } from "next-intl";

export const ForgetPasswordOtpForm = ({ role }: { role: Role }) => {
  const [email, setEmail] = useState<string>("");
  const { mutate, isPending } = useVerifyOtp(role);
  const ctx = useTranslations("ForgetPasswordPage.VerifyOtp");

  const form = useForm<z.infer<typeof forgetPasswordOtpSchema>>({
    resolver: zodResolver(forgetPasswordOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  const onSubmit = (values: z.infer<typeof forgetPasswordOtpSchema>) => {
    mutate({
      otp: +values.otp,
      email,
    });
  };

  useEffect(() => {
    const currentEmail = localStorage.getItem(EMAIL);
    if (currentEmail) {
      setEmail(currentEmail);
    }
  }, []);

  return (
    <WrapperForm title={ctx("title")} role={role} className="w-fit">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem className="mx-auto w-fit">
                <FormLabel>{ctx("otp-input-label")}</FormLabel>
                <FormControl>
                  <InputOTP
                    pattern={REGEXP_ONLY_DIGITS}
                    maxLength={6}
                    disabled={isPending}
                    {...field}
                  >
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
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
