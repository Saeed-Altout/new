import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getExpertTeacher } from "@/api/root/get-expert-teacher";

export const useGetExpertTeacher = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ["get-expert-teacher", locale],
    queryFn: () => getExpertTeacher({ locale }),
  });
};
