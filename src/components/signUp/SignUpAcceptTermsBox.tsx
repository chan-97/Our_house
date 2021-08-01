import React, { FC } from 'react';
import { CheckBox } from '../icon/CheckBox';
import './SignUpAcceptTermsBox.scss';

export const SignUpAcceptTermsBox: FC = (): JSX.Element => {
  return (
    <ul className="signup-accept">
      <li className="signup-accept__list--first">
        <div className="signup-accept__list-content">
          <CheckBox />
          <label className="signup-accept--all-agree">전체동의</label>
        </div>
      </li>
      <li className="signup-accept__list">
        <div className="signup-accept__list-content">
          <CheckBox />
          <label className="signup-accept--checklist">
            만 14세 이상입니다.
            <span className="checklist-required">(필수)</span>
          </label>
        </div>
      </li>
      <li className="signup-accept__list">
        <div className="signup-accept__list-content">
          <CheckBox />
          <label className="signup-accept--checklist">
            <span className="underline">이용약관</span>
            <span className="checklist-required">(필수)</span>
          </label>
        </div>
      </li>
      <li className="signup-accept__list">
        <div className="signup-accept__list-content">
          <CheckBox />
          <label className="signup-accept--checklist">
            <span className="underline">개인정보수집 및 이용동의</span>
            <span className="checklist-required">(필수)</span>
          </label>
        </div>
      </li>
      <li className="signup-accept__list">
        <div className="signup-accept__list-content">
          <CheckBox />
          <label className="signup-accept--checklist">
            이벤트, 프로모션 알림 메일 및 SMS 수신
            <span className="checklist-option">(선택)</span>
          </label>
        </div>
      </li>
    </ul>
  );
};
