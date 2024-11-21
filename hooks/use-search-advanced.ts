import { AxiosError } from "axios";
import { useLocale } from "next-intl";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@/hooks/use-toast";
import { searchAdvanced } from "@/api/root/search-advanced";

export const useSearchAdvanced = () => {
  const { toast } = useToast();
  const locale = useLocale();

  return useMutation({
    mutationKey: ["search-advanced"],
    mutationFn: (data: SearchAdvancedBody) => searchAdvanced({ locale, data }),
    onSuccess: (data) => {
      toast({
        title: "Search Advanced",
        description: data.message ?? "Search is successfully",
      });
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        const message = error.response?.data?.message;
        toast({
          title: "Search Advanced",
          description: message ?? "Search is failed",
        });
      }
    },
  });
};
