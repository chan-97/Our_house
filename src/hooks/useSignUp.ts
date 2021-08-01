import { useState } from 'react';
import { SignUpForm, UseSignUpFunc } from '../types/SignUp';

const defaultSignUpForm = {
  emailName: '',
  domainName: '',
  password: '',
  checkPassword: '',
  nickName: '',
  checkAll: false,
  checkAboutAge: false,
  checkAboutTermsOfService: false,
  checkAboutAgreeToPersonalInfo: false,
  checkAboutNotification: false,
};

export const useSignUp = (): [SignUpForm, UseSignUpFunc] => {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>(defaultSignUpForm);

  const updateInputValue = (inputValue: string): void => {
    console.log(inputValue);
  };

  return [signUpForm, { updateInputValue }];
};
