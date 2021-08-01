import React, { FC } from 'react';
import { SignInForm } from '../components/signIn/SignInForm';
import { KakaoIcon } from '../components/icon/KakaoIcon';
import { MainLogoWithIcon } from '../components/icon/MainLogoWithIcon';
import './SignIn.scss';

export const SignIn: FC = (): JSX.Element => {
  return (
    <main className="signin">
      <div className="signin__content">
        <a href="/" className="signin__logo">
          <MainLogoWithIcon />
        </a>
        <SignInForm />
        <section>
          <div className="signin__sns">SNS계정으로 간편 로그인/회원가입</div>
          <div className="signin__sns-icon">
            <KakaoIcon />
          </div>
        </section>
        <section className="non-member">비회원 주문 조회하기</section>
      </div>
      <footer className="signin__footer">
        © bucketplace, Co., Ltd.. All Rights Reserved
      </footer>
    </main>
  );
};
