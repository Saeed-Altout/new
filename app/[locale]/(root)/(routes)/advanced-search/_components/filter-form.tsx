"use client";

import { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Spinner } from "@/components/ui/spinner";

import { months, time } from "@/constants";
import { filterSchema } from "@/Schemas";

export const FilterForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const ctx = useTranslations("AdvancedSearchPage.filter");

  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      name: "",
      date: "",
      time: "",
      branch: "",
      region: "",
      type: "",
    },
  });

  const onSubmit = (values: z.infer<typeof filterSchema>) => {
    console.log(values);
    setIsLoading(true);
  };

  return (
    <section id="filter-form" className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <Heading title={ctx("title")} />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("name-input.label")}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder={ctx("name-input.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("date-input.label")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={ctx("date-input.placeholder")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {months.map((month) => (
                        <SelectItem key={month.id} value={month.name}>
                          {month.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("time-input.label")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isLoading}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={ctx("time-input.placeholder")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {time.map((time) => (
                        <SelectItem key={time.id} value={time.name}>
                          {time.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="branch"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("branch-input.label")}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder={ctx("branch-input.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("region-input.label")}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder={ctx("region-input.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("type-input.label")}</FormLabel>
                  <FormControl>
                    <Input
                      disabled={isLoading}
                      placeholder={ctx("type-input.placeholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 flex justify-end items-end h-full">
              <Button
                disabled={isLoading}
                type="submit"
                className="w-full sm:w-fit"
              >
                {ctx("search-button")} {isLoading && <Spinner />}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};
