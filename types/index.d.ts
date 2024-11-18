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
    user: {
      id: number;
      email: string;
    };
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
  message: string;
  errors: {
    email: string[];
  };
};
