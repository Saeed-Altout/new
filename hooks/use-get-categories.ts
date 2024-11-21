import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/api/root/get-categories";

export const useGetCategories = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ["get-categories", locale],
    queryFn: () => getCategories({ locale }),
  });
};
