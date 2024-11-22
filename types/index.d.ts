type LoginBody = {
  email: string;
  password: string;
  remember_me: boolean;
};

type LoginResponse = {
  status: string;
  message: string;
  data: {
    token: string;
    token_expiration: Date | string;
    user: User;
    role: string;
    is_remembered: boolean;
  };
};

type RegisterBody = {
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
  terms: boolean;
};

type RegisterResponse = {
  data: { otp_expiration: Date | string };
  message: string;
  errors: {
    terms: string[];
  };
};

type VerifyEmailBody = {
  email: string;
  otp: number;
};

type VerifyEmailResponse = {
  status: string;
  message: string;
};

type LogoutResponse = {
  status: string;
  message: string;
  data: [];
};

type SendOtpBody = {
  email: string;
};

type SendOtpResponse = {
  status: string;
  message: string;
  data: [];
};

type VerifyOtpBody = {
  email: string;
  otp: number;
};

type VerifyOtpResponse = {
  status: string;
  message: string;
  data: {
    token: string;
    // user: {
    //   id: number;
    //   email: string;
    // };
    // role: string;
  };
};

type NewPasswordBody = {
  password: string;
  password_confirmation: string;
};

type NewPasswordResponse = {
  status: string;
  message: string;
  data: [];
};

declare type UpdateProfileInfoStudentBody = {
  full_name?: string;
  phone?: string;
  birth_date?: Date | string | undefined;
  gender?: string;
  _method?: string;
};

declare type UpdateProfileInfoStudentResponse = {
  status: string;
  message: string;
  data: {
    full_name: string;
    birth_date: string;
    gender: string;
    phone: string;
  };
};

declare type UpdateProfileInfoCompanyBody = {
  full_name?: string;
  phone?: string;
  birth_date?: Date | string | undefined;
  address?: string;
  gender?: string;
  _method?: string;
};

declare type UpdateProfileInfoCompanyResponse = {
  status: string;
  message: string;
  data: {
    full_name: string;
    address: string;
    phone: string;
    birth_date: string;
    gender: string;
  };
};

declare type UpdateProfilePictureStudentBody = {
  profile_picture: File;
  _method: string;
};

declare type UpdateProfilePictureStudentResponse = {
  status: string;
  message: string;
  data: {
    profile_picture_url: string;
  };
};

declare type UpdateProfilePictureCompanyBody = {
  profile_picture: File;
  _method: string;
};

declare type UpdateProfilePictureCompanyResponse = {
  status: string;
  message: string;
  data: {
    profile_picture_url: string;
  };
};
declare type UpdateProfilePasswordBody = {
  current_password: string;
  new_password: string;
};

declare type UpdateProfilePasswordResponse = {
  status: string;
  message: string;
  data: null;
};

interface User {
  id?: number;
  full_name?: string;
  email?: string;
  address?: string;
  image_url?: string;
  phone?: string;
  gender?: string;
  birth_date: Date | string | undefined;
}

declare type CourseType = {
  id: number;
  title: string;
  type: string;
  price: number;
  currency: string;
  taxes_price: number;
  tags: Array<string>;
  teacher_name: string;
  media: Array<string>;
};

declare type MostRecommendedSeminar = CourseType;
declare type MostRecommendedOnline = CourseType;

declare type GetMostRecommendedSeminarResponse = {
  status_code: number;
  message: string;
  data: Array<MostRecommendedSeminar>;
};
declare type GetMostRecommendedOnlineResponse = {
  status_code: number;
  message: string;
  data: Array<MostRecommendedOnline>;
};

declare type GetCategoriesResponse = {
  status_code: number;
  message: string;
  data: Array<{
    id: number;
    title: string;
    courses_number: number;
  }>;
};

declare type GetExpertTeacherResponse = {
  status_code: number;
  message: string;
  data: {
    id: number;
    name: string;
    job_title: string;
    about: string;
    media: Array<string>;
  };
};

declare type SearchAdvancedBody = {
  name?: string;
  type?: string;
  date?: string | Date;
  time?: string;
  region?: string;
  branch?: string;
};

declare type CourseResultSearchType = {
  id: number;
  title: string;
  type: string;
  price: number;
  currency: string;
  taxes_price: number;
  tags: Array<string>;
  teacher_name: string;
  feature_image: string;
};

declare type SearchAdvancedResponse = {
  status_code: number;
  message: string;
  data: Array<CourseResultSearchType>;
};

declare type GetAllCoursesResponse = {
  status_code: number;
  message: string;
  data: {
    current_page: number;
    data: Array<CourseType>;
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: Array<{
      url: string;
      label: string;
      active: boolean;
    }>;
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: string;
    to: number;
    total: number;
  };
};

declare type GetCourseResponse = {
  status_code: number;
  message: string;
  data: {
    course_title: string;
    sections: Array<{
      section_title: string;
      lessons: Array<{
        id: number;
        title: string;
        estimate_time: string;
        type: string;
      }>;
    }>;
  };
};
