import { SEARCH_COURSES_KEY } from "@/config/constants";
import { create } from "zustand";

interface SearchStore {
  courses: CourseResultSearchType[];
  setCourses: (courses: CourseResultSearchType[]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  courses: JSON.parse(localStorage.getItem(SEARCH_COURSES_KEY)!) ?? [],
  setCourses: (courses) => set({ courses }),
}));
