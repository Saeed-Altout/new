"use client";

import { format } from "date-fns";
import Image from "next/image";
import { useEffect, useCallback, useState } from "react";
import { CalendarIcon, ImagePlus } from "lucide-react";
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
import { useUpdateProfileInfoStudent } from "@/hooks/dashboard/use-update-profile-info-student";
import { useUpdateProfilePictureStudent } from "@/hooks/dashboard/use-update-profile-picture-student";

export const ProfileForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);

  const { mutate: updateInfo, isPending: isPendingInfo } =
    useUpdateProfileInfoStudent();
  const { mutate: updatePicture, isPending: isPendingPicture } =
    useUpdateProfilePictureStudent();

  const isPending = isPendingInfo || isPendingPicture;

  const form = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      full_name: "",
      birth_date: undefined,
      gender: "",
      phone: "",
      profile_picture: "",
    },
  });

  useEffect(() => {
    const metadata = getUserMetadata();
    if (metadata) {
      const { full_name, birth_date, gender, phone, image_url } = metadata.user;
      form.setValue("profile_picture", image_url || "");
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
    async (values: z.infer<typeof profileSchema>) => {
      if (file) {
        updatePicture({ profile_picture: file, _method: "PATCH" });
      }

      updateInfo({
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
    [file, updateInfo, updatePicture]
  );

  const uploadPicture = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldChange: (value: string | null) => void
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const fileReader = new FileReader();

    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (!file.type.includes("image")) return;
      setFile(file);
      fileReader.onload = () => {
        const url = URL.createObjectURL(file);
        setUrl(url);
        const imageDataUrl = fileReader.result?.toString() || "";
        fieldChange(imageDataUrl);
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8  w-full max-w-[576px]"
      >
        <div className="space-y-4">
          <h3 className="text-[#222222] text-base font-normal">
            Profile picture
          </h3>
          <FormField
            control={form.control}
            name="profile_picture"
            render={({ field }) => (
              <FormItem className="h-[148px] w-[148px] relative">
                <FormLabel className="absolute top-0 left-0 text-sm text-muted-foreground h-full w-full flex justify-center items-center cursor-pointer border border-dashed border-gray-300">
                  {field.value ?? url ? (
                    <Image
                      src={field.value ?? url ?? ""}
                      alt="Profile Preview"
                      fill
                      className="h-full w-full object-cover"
                      priority
                    />
                  ) : (
                    <>
                      Upload Image
                      <ImagePlus className="ml-2 h-4 w-4" />
                    </>
                  )}
                </FormLabel>
                <FormControl>
                  <Input
                    className="h-full w-full hidden"
                    type="file"
                    disabled={isPending}
                    accept="image/*"
                    onChange={(e) => uploadPicture(e, field.onChange)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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
