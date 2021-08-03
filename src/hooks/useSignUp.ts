import { useState, useEffect, useRef, RefObject } from 'react';
import { useSignUpCheckBoxEffect } from './useSignUpCheckBoxEffect';
import { SignUpForm, SignUpFunc } from '../types/SignUp';

interface SignUpState {
  signUpForm: SignUpForm;
  domainDisabled: boolean;
  domainInputRef: RefObject<HTMLInputElement>;
}

const defaultSignUpForm = {
  emailName: '',
  domainName: '',
  domainList: [
    { domain: 'naver.com', id: 0 },
    { domain: 'hanmail.net', id: 1 },
    { domain: 'daum.net', id: 2 },
    { domain: 'gmail.com', id: 3 },
    { domain: 'nate.com', id: 4 },
    { domain: 'hotmail.com', id: 5 },
    { domain: 'outlook.com', id: 6 },
    { domain: 'icloud.com', id: 7 },
    { domain: '직접입력', id: 8 },
  ],
  password: '',
  checkPassword: '',
  nickName: '',
  checkAll: false,
  checkAboutAge: false,
  checkAboutTermsOfService: false,
  checkAboutAgreeToPersonalInfo: false,
  checkAboutNotification: false,
};

export const useSignUp = (): [SignUpState, SignUpFunc] => {
  const [signUpForm, setSignUpForm] = useState<SignUpForm>(defaultSignUpForm);
  const [domainDisabled, setDomainDisabled] = useState<boolean>(true);
  const domainInputRef = useRef<HTMLInputElement>(null);
  useSignUpCheckBoxEffect(signUpForm, setSignUpForm);

  useEffect(() => {
    if (!domainDisabled) domainInputRef.current?.focus();
  }, [domainDisabled]);

  const handleInput = (name: string, inputValue: string): void => {
    setSignUpForm({ ...signUpForm, [name]: inputValue });
  };

  const handleSelectDomain = (domainId: number, domain: string): void => {
    if (domainId < 8) {
      if (!domainDisabled) setDomainDisabled(true);
      setSignUpForm({ ...signUpForm, domainName: domain });
    } else {
      setSignUpForm({ ...signUpForm, domainName: '' });
      setDomainDisabled(false);
    }
  };

  const handleChangeDomain = (domain: string): void => {
    setSignUpForm({ ...signUpForm, domainName: domain });
  };

  const handleCheckbox = (targetCheckbox: string): void => {
    if (targetCheckbox === 'checkAll') {
      setSignUpForm({
        ...signUpForm,
        checkAll: signUpForm.checkAll ? false : true,
        checkAboutAge: signUpForm.checkAll ? false : true,
        checkAboutTermsOfService: signUpForm.checkAll ? false : true,
        checkAboutAgreeToPersonalInfo: signUpForm.checkAll ? false : true,
        checkAboutNotification: signUpForm.checkAll ? false : true,
      });
    } else if (targetCheckbox === 'checkAboutAge') {
      setSignUpForm({
        ...signUpForm,
        checkAboutAge: !signUpForm.checkAboutAge,
      });
    } else if (targetCheckbox === 'checkAboutTermsOfService') {
      setSignUpForm({
        ...signUpForm,
        checkAboutTermsOfService: !signUpForm.checkAboutTermsOfService,
      });
    } else if (targetCheckbox === 'checkAboutAgreeToPersonalInfo') {
      setSignUpForm({
        ...signUpForm,
        checkAboutAgreeToPersonalInfo:
          !signUpForm.checkAboutAgreeToPersonalInfo,
      });
    } else if (targetCheckbox === 'checkAboutNotification') {
      setSignUpForm({
        ...signUpForm,
        checkAboutNotification: !signUpForm.checkAboutNotification,
      });
    }
  };

  const handleClickSignUp = (): void => {
    console.log(signUpForm);
  };

  return [
    { signUpForm, domainDisabled, domainInputRef },
    {
      handleInput,
      handleSelectDomain,
      handleChangeDomain,
      handleCheckbox,
      handleClickSignUp,
    },
  ];
};
