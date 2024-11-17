type RegisterBody = {
  email: string;
  password: string;
  password_confirmation: string;
  role: string;
  terms: boolean;
};

type RegisterResponse = {
  data: { otp_expiration: string };
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
