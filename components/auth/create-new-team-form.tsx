"use client";

import { useState } from "react";
import { Minus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
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
import { createNewTeamSchema } from "@/Schemas";
import { Role } from "@/config";

export const CreateNewTeamForm = ({ role }: { role?: Role }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof createNewTeamSchema>>({
    resolver: zodResolver(createNewTeamSchema),
    defaultValues: {
      name: "",
      members: [{ email: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "members",
    control: form.control,
  });

  const onSubmit = (values: z.infer<typeof createNewTeamSchema>) => {
    console.log(values);
  };

  return (
    <WrapperForm title="Let's create your team" role={role} google facebook>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="team name"
                    disabled={isLoading}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {fields.map((field, index) => (
            <FormField
              key={index}
              control={form.control}
              name={`members.${index}.email`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Member {index + 1}</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="email"
                        placeholder="example@gmail.con"
                        disabled={isLoading}
                        {...field}
                      />
                      <div
                        role="button"
                        onClick={() => remove(index)}
                        className="absolute top-[50%] right-1 translate-y-[-50%] bg-background h-11 w-11 flex justify-center items-center"
                      >
                        <Minus className="h-5 w-5 text-[#999999]" />
                        <span className="sr-only">Minus</span>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <div className="flex justify-end items-center flex-col gap-4">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-fit ml-auto font-medium"
              onClick={() => append({ email: "" })}
            >
              Add another member
            </Button>
            <Button disabled={isLoading} type="submit" className="w-full">
              Sign Up {isLoading && <Spinner />}
            </Button>
          </div>
        </form>
      </Form>
    </WrapperForm>
  );
};
