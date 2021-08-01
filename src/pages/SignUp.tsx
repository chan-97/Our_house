import React, { FC } from 'react';
import { SignUpForm } from '../components/signUp/SignUpForm';
import { MainLogoWithIcon } from '../components/icon/MainLogoWithIcon';
import { KakaoIcon } from '../components/icon/KakaoIcon';
import './SignUp.scss';

export const SignUp: FC = () => {
  return (
    <main className="signup">
      <a href="/">
        <MainLogoWithIcon width={88} height={31} />
      </a>
      <div className="signup__content">
        <h1 className="signup__title">회원가입</h1>
        <section className="signup__sns">
          <div className="signup__sns-text">SNS계정으로 간편하게 회원가입</div>
          <div className="signup__sns-icon">
            <KakaoIcon />
          </div>
        </section>
        <SignUpForm />
        <p className="signup__bottom-message">
          이미 아이디가 있으신가요?<a href="/signin">로그인</a>
        </p>
      </div>
    </main>
  );
};
