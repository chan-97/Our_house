import React, { FC } from 'react';
import '../main/Shortcut.scss';

export const Shortcut: FC = (): JSX.Element => {
  return (
    <nav className="shortcut">
      <ul className="shortcut__list">
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162630978931880084.png/512/none"
            />
            <div className="shortcut__list__item__title">쇼핑하기</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631001897809227.png/512/none"
            />
            <div className="shortcut__list__item__title">오늘의집배송</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631007985482356.png/512/none"
            />
            <div className="shortcut__list__item__title">평수별집구경</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631008956222270.png/512/none"
            />
            <div className="shortcut__list__item__title">공간별사진</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631017186842258.png/512/none"
            />
            <div className="shortcut__list__item__title">시공업체찾기</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631035206310622.png/512/none"
            />
            <div className="shortcut__list__item__title">빠른시공상담</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631039654261218.png/512/none"
            />
            <div className="shortcut__list__item__title">호텔st꾸미기</div>
          </div>
        </li>
        <li>
          <div className="shortcut__list__item">
            <img
              className="shortcut__list__item__img"
              src="https://image.ohou.se/image/resize/bucketplace-v2-development/uploads-shortcut-home_feed_shortcut_sets-162631044039020670.png/512/none"
            />
            <div className="shortcut__list__item__title">질문과답변</div>
          </div>
        </li>
      </ul>
    </nav>
  );
};
