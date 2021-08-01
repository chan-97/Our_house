export interface SignUpForm {
  emailName: string;
  domainName: string;
  password: string;
  checkPassword: string;
  nickName: string;
  checkAll: boolean;
  checkAboutAge: boolean;
  checkAboutTermsOfService: boolean;
  checkAboutAgreeToPersonalInfo: boolean;
  checkAboutNotification: boolean;
}

export interface UseSignUpFunc {
  updateInputValue: (inputValue: string) => void;
}
