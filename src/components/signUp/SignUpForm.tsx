import React, { useState, FC, MouseEvent } from 'react';
import { useSignUp } from '../../hooks/useSignUp';
import { CommonInput, CommonSelect } from '../common/Input';
import { MainButton } from '../common/Button';
import { SignUpAcceptTermsBox } from './SignUpAcceptTermsBox';
import './SignUpForm.scss';

export const SignUpForm: FC = (): JSX.Element => {
  const [toggleAuthBox, setToggleAuthBox] = useState<boolean>(false);
  const [signUpState, signUpFormTask] = useSignUp();

  const authEmail = (): void => {
    setToggleAuthBox(!toggleAuthBox);
  };

  return (
    <form className="signup-form">
      <div className="signup-form__list">
        <label className="signup-form__label">이메일</label>
        <div className="signup-form__input-box input-box--flex">
          <CommonInput
            name="emailName"
            value={signUpState.signUpForm.emailName}
            signUpFormTask={signUpFormTask}
            placeholder="이메일"
            individualStyle={{
              width: 'calc((100% - 2rem) / 2)',
              height: '100%',
            }}
          />
          <div className="email__separator">@</div>
          <CommonSelect
            type="domain"
            list={signUpState.signUpForm.domainList}
            domainValue={signUpState.signUpForm.domainName}
            domainDisabled={signUpState.domainDisabled}
            domainInputRef={signUpState.domainInputRef}
            signUpFormTask={signUpFormTask}
            listHeight="3rem"
            individualStyle={{
              width: 'calc((100% - 2rem) / 2)',
              height: '100%',
            }}
          />
        </div>
        <MainButton
          buttonStyle="primary"
          individualStyle={{ marginTop: '1rem' }}
          text="이메일 인증하기"
          buttonTask={authEmail}
          buttonDisabled={
            !signUpState.signUpForm.emailName &&
            !signUpState.signUpForm.domainName
          }
        />
        {toggleAuthBox && (
          <div className="email-code">
            <div className="email-code__guide">
              이메일로 전송된 인증코드를 입력해주세요.
            </div>
          </div>
        )}
      </div>
      <div className="signup-form__list">
        <label className="signup-form__label">비밀번호</label>
        <div className="signup-form__list-guide">
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </div>
        <CommonInput
          name="password"
          value={signUpState.signUpForm.password}
          signUpFormTask={signUpFormTask}
          individualStyle={{ width: '100%' }}
          placeholder="비밀번호"
          type="password"
        />
      </div>
      <div className="signup-form__list">
        <label className="signup-form__label">비밀번호 확인</label>
        <CommonInput
          name="checkPassword"
          value={signUpState.signUpForm.checkPassword}
          signUpFormTask={signUpFormTask}
          individualStyle={{ width: '100%' }}
          placeholder="비밀번호 확인"
          type="password"
        />
      </div>
      <div className="signup-form__list">
        <label className="signup-form__label">닉네임</label>
        <div className="signup-form__list-guide">
          다른 유저와 겹치지 않는 별명을 입력해주세요. (2~15자)
        </div>
        <CommonInput
          name="nickName"
          value={signUpState.signUpForm.nickName}
          signUpFormTask={signUpFormTask}
          individualStyle={{ width: '100%' }}
          placeholder="별명 (2~15자)"
        />
      </div>
      <div className="signup-form__list">
        <label className="signup-form__label">약관동의</label>
        <SignUpAcceptTermsBox
          signUpForm={signUpState.signUpForm}
          handleClickCheckBox={signUpFormTask.handleCheckbox}
        />
      </div>
      <MainButton
        text="회원가입하기"
        buttonTask={signUpFormTask.handleClickSignUp}
      />
    </form>
  );
};
