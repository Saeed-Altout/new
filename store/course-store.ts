import { create } from "zustand";

interface LessonProps {
  id: number;
  title: string;
  estimate_time: string;
  type: string;
}
interface CourseProps {
  course_title: string;
  sections: Array<{
    section_title: string;
    lessons: Array<LessonProps>;
  }>;
}

const initialCourse: CourseProps = {
  course_title: "",
  sections: [],
};

const initialLesson: LessonProps = {
  id: 0,
  title: "",
  estimate_time: "",
  type: "",
};
interface CourseStore {
  course: CourseProps;
  setCourse: (course: CourseProps) => void;

  lessons: LessonProps[];
  setLessons: (lessons: LessonProps[]) => void;

  lesson: LessonProps;
  setLesson: (lesson: LessonProps) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  course: initialCourse,
  setCourse: (course) => set({ course }),

  lessons: [],
  setLessons: (lessons) => set({ lessons }),

  lesson: initialLesson,
  setLesson: (lesson) => set({ lesson }),
}));
