import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

import { useRouter } from "@/i18n/routing";

import { useToast } from "@/hooks/use-toast";
import { registerStudent } from "@/api/auth/register";
import { EMAIL } from "@/config/constants";

export const useRegisterStudent = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationKey: ["register-student"],
    mutationFn: (data: RegisterStudentBody) => registerStudent(data),
    onSuccess: (data, variables) => {
      toast({
        title: "Register",
        description: data.message ?? "Register successfully",
      });
      localStorage.setItem(EMAIL, variables.email);
      router.push(`/auth/${variables.role}/verification-otp`);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Register",
          description: message ?? "Register failed",
        });
      }
    },
  });
};
