import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getCourse } from "@/api/dashboard/get-course-";

export const useGetCourse = ({ id }: { id: string }) => {
  const locale = useLocale();
  return useQuery({
    queryKey: ["get-course", locale, id],
    queryFn: () => getCourse({ locale, id }),
  });
};
