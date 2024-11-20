import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getMostRecommendedSeminar } from "@/api/root/get-most-recommended-seminar";

export const useGetMostRecommendedSeminar = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ["get-most-recommended-seminar"],
    queryFn: () => getMostRecommendedSeminar({ locale }),
  });
};
