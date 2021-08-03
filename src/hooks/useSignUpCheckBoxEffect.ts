import { useEffect } from 'react';
import { SignUpForm } from '../types/SignUp';

export const useSignUpCheckBoxEffect = (
  signUpForm: SignUpForm,
  setSignUpForm: (value: React.SetStateAction<SignUpForm>) => void,
): void => {
  useEffect(() => {
    if (
      signUpForm.checkAboutAge &&
      signUpForm.checkAboutTermsOfService &&
      signUpForm.checkAboutAgreeToPersonalInfo &&
      signUpForm.checkAboutNotification
    ) {
      setSignUpForm({ ...signUpForm, checkAll: true });
    } else {
      setSignUpForm({ ...signUpForm, checkAll: false });
    }
  }, [
    signUpForm.checkAboutAge,
    signUpForm.checkAboutTermsOfService,
    signUpForm.checkAboutAgreeToPersonalInfo,
    signUpForm.checkAboutNotification,
  ]);
};
