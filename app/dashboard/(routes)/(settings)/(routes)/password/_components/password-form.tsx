"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { passwordSchema } from "@/Schemas";

export const PasswordForm = () => {
  const [isCurrentPassword, setIsCurrentPassword] = useState<boolean>(true);
  const [isNewPassword, setIsNewPassword] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof passwordSchema>) => {
    console.log(values);
    setIsLoading(true);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-[576px]"
      >
        <FormField
          control={form.control}
          name="current_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isCurrentPassword ? "password" : "text"}
                    placeholder="********"
                    disabled={isLoading}
                    {...field}
                  />
                  <div
                    role="button"
                    onClick={() => setIsCurrentPassword((prev) => !prev)}
                    className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-11 w-11 flex justify-center items-center"
                  >
                    {isCurrentPassword ? (
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
          name="new_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={isNewPassword ? "password" : "text"}
                    placeholder="********"
                    disabled={isLoading}
                    {...field}
                  />
                  <div
                    role="button"
                    onClick={() => setIsNewPassword((prev) => !prev)}
                    className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-11 w-11 flex justify-center items-center"
                  >
                    {isNewPassword ? (
                      <Eye className="h-5 w-5 text-[#999999]" />
                    ) : (
                      <EyeOff className="h-5 w-5 text-[#999999]" />
                    )}
                  </div>
                </div>
              </FormControl>
              <FormDescription>
                <ul className="list-disc pl-4 py-3 space-y-2">
                  <li>Your password must be at least 10 characters long.</li>
                  <li>Have at least 8 unique characters.</li>
                </ul>
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 flex justify-between items-center gap-4">
          <Button
            disabled={isLoading}
            type="button"
            className="w-full"
            variant="outline"
          >
            Cancel
          </Button>
          <Button disabled={isLoading} type="submit" className="w-full">
            Save {isLoading && <Spinner />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
