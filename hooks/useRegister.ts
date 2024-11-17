import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { registerStudent } from "@/api/auth/register";

export const useRegisterStudent = () => {
  const { toast } = useToast();

  return useMutation({
    mutationKey: ["register-student"],
    mutationFn: (data: RegisterStudentBody) => registerStudent(data),
    onSuccess: (data) => {
      console.log(data);
      toast({
        title: "Register",
        description: data.message ?? "Register successfully",
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
