import React, { FC } from 'react';
import { MainButton } from '../common/Button';
import './SignInForm.scss';

export const SignInForm: FC = (): JSX.Element => {
  return (
    <form className="signin-form">
      <input
        name="email"
        type="email"
        className="signin-form__input signin-form__id"
        placeholder="이메일"
      />
      <input
        name="password"
        type="password"
        className="signin-form__input signin-form__pw"
        placeholder="비밀번호"
      />
      <MainButton individualStyle={{ margin: '2rem 0' }} text="로그인" />
      <section className="signin-form__link">
        <a href="#" className="link__item">
          비민번호 재설정
        </a>
        <a href="/signup" className="link__item">
          회원가입
        </a>
      </section>
    </form>
  );
};
