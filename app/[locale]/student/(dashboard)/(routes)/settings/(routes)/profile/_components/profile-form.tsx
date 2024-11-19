"use client";

import { format } from "date-fns";
import { useEffect, useCallback } from "react";
import { CalendarIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { PhoneInput } from "react-international-phone";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { cn } from "@/lib/utils";
import { getUserMetadata } from "@/utils/token";

import { profileSchema } from "@/Schemas";
import { useUpdateProfileInfoStudent } from "@/hooks/use-update-profile-info-student";

export const ProfileForm = () => {
  const { mutate, isPending } = useUpdateProfileInfoStudent();

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: "",
      birth_date: undefined,
      gender: "",
      phone: "",
    },
  });

  useEffect(() => {
    const metadata = getUserMetadata();
    if (metadata) {
      const { full_name, birth_date, gender, phone } = metadata.user;
      form.setValue("full_name", full_name || "");
      form.setValue(
        "birth_date",
        birth_date ? new Date(birth_date) : undefined
      );
      form.setValue("gender", gender || "");
      form.setValue("phone", phone || "other");
    }
  }, [form]);

  const onSubmit = useCallback(
    (values: z.infer<typeof profileSchema>) => {
      mutate({
        ...values,
        phone:
          values.phone && values.phone.split("").length > 8
            ? values.phone
            : undefined,
        birth_date: values.birth_date
          ? format(new Date(values.birth_date), "yyyy-MM-dd")
          : undefined,
        _method: "PUT",
      });
    },
    [mutate]
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full max-w-[576px]"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full name</FormLabel>
              <FormControl>
                <Input disabled={isPending} placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="birth_date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Birthday</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      disabled={isPending}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone number</FormLabel>
              <FormControl>
                <PhoneInput
                  disabled={isPending}
                  placeholder="0000 000 0000"
                  className="react-international-phone-input-container"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Gender (optional)</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex gap-x-12"
                  disabled={isPending}
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">Male</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">Female</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
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
