import { useLocale } from "next-intl";
import { useMutation } from "@tanstack/react-query";

import { searchAdvanced } from "@/api/root/search-advanced";
import { useSearchStore } from "@/stores/search-store";
import { SEARCH_COURSES_KEY } from "@/config/constants";

export const useSearchAdvanced = () => {
  const locale = useLocale();
  const { setCourses } = useSearchStore();

  return useMutation({
    mutationKey: ["search-advanced", locale],
    mutationFn: (data: SearchAdvancedBody) => searchAdvanced({ locale, data }),
    onSuccess: (data) => {
      if (data) {
        setCourses(data.data);
        localStorage.setItem(SEARCH_COURSES_KEY, JSON.stringify(data.data));
      }
    },
  });
};
