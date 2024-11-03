"use client";

import Link from "next/link";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { WrapperForm } from "./wrapper-form";
import { registerSchema } from "@/Schemas";
import { Role } from "@/config";

export const RegisterForm = ({ role }: { role?: Role }) => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isLoading, _setIsLoading] = useState<boolean>(false);
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
  };

  return (
    <WrapperForm title="Sign Up" role={role} google facebook>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
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
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isPassword ? "password" : "text"}
                      placeholder="********"
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
                <FormLabel>Repeat Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={isPassword ? "password" : "text"}
                      placeholder="********"
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
            <Label className="font-normal">
              I have read and accept{" "}
              <Link href="/terms" className="font-medium hover:underline">
                terms & conditions
              </Link>
            </Label>
          </div>
          <Button disabled={isLoading} type="submit" className="w-full">
            Sign Up {isLoading && <Spinner />}
          </Button>
        </form>
      </Form>
    </WrapperForm>
  );
};
