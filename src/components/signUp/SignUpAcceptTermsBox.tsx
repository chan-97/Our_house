import React, { FC } from 'react';
import { SignUpForm } from '../../types/SignUp';
import { CheckBox } from '../icon/CheckBox';
import './SignUpAcceptTermsBox.scss';

interface SignUpAcceptTermsBoxProps {
  signUpForm: SignUpForm;
  handleClickCheckBox: (targetCheckbox: string) => void;
}

export const SignUpAcceptTermsBox: FC<SignUpAcceptTermsBoxProps> = ({
  signUpForm,
  handleClickCheckBox,
}: SignUpAcceptTermsBoxProps): JSX.Element => {
  return (
    <ul className="signup-accept">
      <li
        className="signup-accept__list--first"
        onClick={() => handleClickCheckBox('checkAll')}
      >
        <div className="signup-accept__list-content">
          <CheckBox checked={signUpForm.checkAll} />
          <label className="signup-accept--all-agree">전체동의</label>
        </div>
      </li>
      <li
        className="signup-accept__list"
        onClick={() => handleClickCheckBox('checkAboutAge')}
      >
        <div className="signup-accept__list-content">
          <CheckBox checked={signUpForm.checkAboutAge} />
          <label className="signup-accept--checklist">
            만 14세 이상입니다.
            <span className="checklist-required">(필수)</span>
          </label>
        </div>
      </li>
      <li
        className="signup-accept__list"
        onClick={() => handleClickCheckBox('checkAboutTermsOfService')}
      >
        <div className="signup-accept__list-content">
          <CheckBox checked={signUpForm.checkAboutTermsOfService} />
          <label className="signup-accept--checklist">
            <span className="underline">이용약관</span>
            <span className="checklist-required">(필수)</span>
          </label>
        </div>
      </li>
      <li
        className="signup-accept__list"
        onClick={() => handleClickCheckBox('checkAboutAgreeToPersonalInfo')}
      >
        <div className="signup-accept__list-content">
          <CheckBox checked={signUpForm.checkAboutAgreeToPersonalInfo} />
          <label className="signup-accept--checklist">
            <span className="underline">개인정보수집 및 이용동의</span>
            <span className="checklist-required">(필수)</span>
          </label>
        </div>
      </li>
      <li
        className="signup-accept__list"
        onClick={() => handleClickCheckBox('checkAboutNotification')}
      >
        <div className="signup-accept__list-content">
          <CheckBox checked={signUpForm.checkAboutNotification} />
          <label className="signup-accept--checklist">
            이벤트, 프로모션 알림 메일 및 SMS 수신
            <span className="checklist-option">(선택)</span>
          </label>
        </div>
      </li>
    </ul>
  );
};
