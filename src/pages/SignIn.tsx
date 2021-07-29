import React, { FC } from 'react';
import { MainButton } from '../components/common/Button';
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
        <form className="signin__form">
          <input
            name="email"
            type="email"
            className="signin__input signin__id"
            placeholder="이메일"
          />
          <input
            name="password"
            type="password"
            className="signin__input signin__pw"
            placeholder="비밀번호"
          />
          <MainButton individualStyle={{ margin: '2rem 0' }} text="로그인" />
          <section className="signin__link">
            <a href="#" className="link__item">
              비민번호 재설정
            </a>
            <a href="/signup" className="link__item">
              회원가입
            </a>
          </section>
        </form>
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
