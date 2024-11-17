"use client";

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
import { verificationOtpSchema } from "@/Schemas";
import { useVerifyEmail } from "@/hooks/use-verify-email";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { EMAIL } from "@/config/constants";

export const VerificationOtpStudentForm = () => {
  // State management
  const [email, setEmail] = useState<string>("");

  // hook
  const { mutate, isPending } = useVerifyEmail("student");

  // Localization
  const ctx = useTranslations("VerifyStudentPage");

  // Form
  const form = useForm<z.infer<typeof verificationOtpSchema>>({
    resolver: zodResolver(verificationOtpSchema),
    defaultValues: {
      otp: "",
    },
  });

  // Handler
  const onSubmit = (values: z.infer<typeof verificationOtpSchema>) => {
    mutate({
      otp: +values.otp,
      email: email,
    });
  };

  useEffect(() => {
    const currentEmail = localStorage.getItem(EMAIL);
    if (currentEmail) {
      setEmail(currentEmail);
    }
  }, []);

  return (
    <WrapperForm title={ctx("title")} role="student" className="w-fit">
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
                    disabled={isPending}
                    maxLength={6}
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
