type RegisterStudentBody = {
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
  terms: boolean;
};

type RegisterStudentResponse = {
  data: { otp_expiration: string };
  message: string;
  errors: {
    terms: string[];
  };
};
