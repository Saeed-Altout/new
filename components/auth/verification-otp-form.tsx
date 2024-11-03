"use client";

import { useState } from "react";
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
import { Role } from "@/config";

export const VerificationOtpForm = ({ role }: { role?: Role }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof verificationOtpSchema>>({
    resolver: zodResolver(verificationOtpSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof verificationOtpSchema>) => {
    console.log(values);
    setIsLoading(true);
  };

  return (
    <WrapperForm title="2Factor Authentication" role={role} className="w-fit">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="mx-auto w-fit">
                <FormLabel>OTP Verify</FormLabel>
                <FormControl>
                  <InputOTP
                    pattern={REGEXP_ONLY_DIGITS}
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
          <Button disabled={isLoading} type="submit" className="w-full">
            Verify Account {isLoading && <Spinner />}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
