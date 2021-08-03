import React, { FC } from 'react';
import './Footer.scss';

export const Footer: FC = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__top">
          <div className="footer__cs">
            <div className="footer__cs__row">
              <div className="footer__cs__link">고객센터 〉</div>
            </div>
            <div className="footer__cs__row">
              <div className="footer__cs__tel">1670-0876</div>
            </div>
            <span className="footer__cs__time">
              평일 09:00 ~ 18:00 (주말 & 공휴일 제외)
            </span>
          </div>
        </div>
        <ul className="footer__shortcut">
          <li>
            <a className="footer__shortcut__item">브랜드 스토리</a>
          </li>
          <li>
            <a className="footer__shortcut__item">회사소개</a>
          </li>
          <li>
            <a className="footer__shortcut__item">채용정보</a>
          </li>
          <li>
            <a className="footer__shortcut__item">이용약관</a>
          </li>
          <li>
            <a className="footer__shortcut__item footer__shortcut__item--bold">
              개인정보처리방침
            </a>
          </li>
          <li>
            <a className="footer__shortcut__item">공지사항</a>
          </li>
          <li>
            <a className="footer__shortcut__item">고객센터</a>
          </li>
        </ul>
        <div className="footer__info-wrap">
          <dl className="footer__info">
            상호명:(주)버킷플레이스&nbsp; 이메일:(고객문의) cs@bucketplace.net
            (제휴문의)
            contact@bucketplace.net&nbsp;대표이사:이승재&nbsp;사업자등록번호:119-86-91245&nbsp;통신판매업신고번호:제2018-서울서초-0580호&nbsp;주소:서울
            서초구 서초대로74길 4 삼성생명서초타워 25, 27층
          </dl>
          <dl className="footer__info">
            우리은행 채무지급보증안내(주)버킷플레이스는 고객님이 현금결제한
            금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를
            보장하고 있습니다.
          </dl>
          <dl className="footer__info">
            (주)버킷플레이스는 통신판매중개자로서 통신판매의 당사자가 아니며,
            입점업체가 등록한 상품, 상품정보 및 거래에 대하여 (주)버킷플레이스는
            일체 책임을 지지 않습니다.
          </dl>
          <p className="footer__copyright">
            Copyright 2014. bucketplace, Co., Ltd. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
