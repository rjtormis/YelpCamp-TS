export interface FormikSignup {
  name: string;
  password: string;
  confirmPassword: string;
  emailAddress: string;
  provider: string;
  username: string;
}

export interface FormikSignin {
  usernameOrEmail: string;
  password: string;
}
