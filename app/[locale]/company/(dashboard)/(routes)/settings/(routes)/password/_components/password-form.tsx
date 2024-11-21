"use client";

import { useEffect, useState } from "react";
import { Copy, Eye, EyeOff } from "lucide-react";

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

import { passwordSchema } from "@/Schemas";
import { useUpdateProfilePassword } from "@/hooks/dashboard/use-update-profile-password";
import { generateRandomPassword } from "@/helpers/generate-random-password";
import { toast } from "@/hooks/use-toast";

export const PasswordForm = () => {
  const [isCurrentPassword, setIsCurrentPassword] = useState<boolean>(true);
  const [isNewPassword, setIsNewPassword] = useState<boolean>(true);
  const [password, setPassword] = useState<string>("");

  const { mutate, isPending } = useUpdateProfilePassword();

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof passwordSchema>) => {
    mutate(values);
  };

  const onCopay = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Copied to clipboard",
      description: "Password copied to clipboard",
    });
  };

  useEffect(() => {
    const password = generateRandomPassword();
    if (password) {
      setPassword(password);
    }
  }, []);

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
                    disabled={isPending}
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
                    disabled={isPending}
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

              <ul className="list-disc pl-4 py-3 space-y-2">
                <li className="text-sm text-[#656565]">
                  Your password must be at least 10 characters long.
                </li>
                <li className="text-sm text-[#656565]">
                  Have at least 8 unique characters.
                </li>
                <li className="text-sm text-[#656565]">
                  You can copy and use this password:
                  <Button
                    type="button"
                    onClick={onCopay}
                    size="sm"
                    variant="ghost"
                    className="ml-1"
                  >
                    <span>{password}</span> <Copy className="h-4 w-4" />
                  </Button>
                </li>
              </ul>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 flex justify-between items-center gap-4">
          <Button
            disabled={isPending}
            type="button"
            className="w-full"
            variant="outline"
          >
            Cancel
          </Button>
          <Button disabled={isPending} type="submit" className="w-full">
            Save {isPending && <Spinner />}
          </Button>
        </div>
      </form>
    </Form>
  );
};
