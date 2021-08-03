import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { MainLogo } from '../icon/MainLogo';
import './Nav.scss';

export const Nav: FC = (): JSX.Element => {
  return (
    <div className="nav">
      <div className="nav__primary">
        <div className="nav__primary__content">
          <div className="nav__primary__logo">
            <MainLogo />
          </div>
          <nav className="nav__primary__menu">
            <a className="nav__primary__menu__item nav__primary__menu__item--focused">
              커뮤니티
            </a>
            <a className="nav__primary__menu__item">스토어</a>
            <a className="nav__primary__menu__item">인테리어시공</a>
          </nav>
          <div className="nav__primary__login">
            <Link to="/signin" className="nav__primary__login__item">
              로그인
            </Link>
            <Link to="/signup" className="nav__primary__login__item">
              회원가입
            </Link>
          </div>
        </div>
      </div>
      <div className="nav__secondary">
        <div className="nav__secondary__content">
          <div className="nav__secondary__menu">
            <a className="nav__secondary__menu__item nav__secondary__menu__item--active">
              홈
            </a>
            <a className="nav__secondary__menu__item">팔로잉</a>
            <a className="nav__secondary__menu__item">사진</a>
            <a className="nav__secondary__menu__item">집들이</a>
            <a className="nav__secondary__menu__item">노하우</a>
            <a className="nav__secondary__menu__item">전문가집들이</a>
            <a className="nav__secondary__menu__item">셀프가이드</a>
            <a className="nav__secondary__menu__item">질문과답변</a>
            <a className="nav__secondary__menu__item">이벤트</a>
          </div>
        </div>
      </div>
    </div>
  );
};
