import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getMostRecommendedOnline } from "@/api/root/get-most-recommended-online";

export const useGetMostRecommendedOnline = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ["get-most-recommended-online", locale],
    queryFn: () => getMostRecommendedOnline({ locale }),
  });
};
