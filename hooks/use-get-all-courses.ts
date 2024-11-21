import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "@/api/root/get-all-courses";

export const useGetAllCourses = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ["get-all-courses", locale],
    queryFn: () => getAllCourses({ locale }),
  });
};
