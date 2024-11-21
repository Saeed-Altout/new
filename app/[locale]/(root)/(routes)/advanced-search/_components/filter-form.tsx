"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useTranslations } from "next-intl";

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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Spinner } from "@/components/ui/spinner";
import { Calendar } from "@/components/ui/calendar";

import { cn } from "@/lib/utils";
import { filterSchema } from "@/Schemas";
import { useSearchAdvanced } from "@/hooks/root/use-search-advanced";

export const FilterForm = () => {
  const ctx = useTranslations("AdvancedSearchPage.filter");
  const { mutate, isPending } = useSearchAdvanced();

  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      name: "",
      date: undefined,
      time: "",
      branch: "",
      region: "",
      type: "",
    },
  });

  const onSubmit = (values: z.infer<typeof filterSchema>) => {
    mutate(values);
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
                      disabled={isPending}
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
                            <span>{ctx("date-input.placeholder")}</span>
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
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{ctx("time-input.label")}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={ctx("time-input.placeholder")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        { id: 1, name: "morning" },
                        { id: 2, name: "evening" },
                      ].map((time) => (
                        <SelectItem
                          key={time.id}
                          value={time.name}
                          className="capitalize"
                        >
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
                      disabled={isPending}
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
                      disabled={isPending}
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
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isPending}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={ctx("type-input.placeholder")}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {[
                        { id: 1, name: "seminar" },
                        { id: 2, name: "webinar" },
                        { id: 3, name: "online" },
                        { id: 4, name: "onsite" },
                      ].map((time) => (
                        <SelectItem
                          key={time.id}
                          value={time.name}
                          className="capitalize"
                        >
                          {time.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2 flex justify-end items-end h-full">
              <Button
                disabled={isPending}
                type="submit"
                className="w-full sm:w-fit"
              >
                {ctx("search-button")} {isPending && <Spinner />}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};
