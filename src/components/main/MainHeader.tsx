import React, { FC } from 'react';
import '../main/MainHeader.scss';

export const MainHeader: FC = (): JSX.Element => {
  return (
    <div className="mainheader">
      <div className="mainheader__story">
        <img
          className="mainheader__story__image"
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/projects/cover_images/162338856703968718.jpg?gif=1&w=850&h=567&c=c"
        />
        <div className="mainheader__story__content">
          <div className="mainheader__story__content__category">
            가족의 역사를 채울
          </div>
          <div className="mainheader__story__content__title">
            10년 살기를 계획하고 고친 집
          </div>
        </div>
      </div>
      <div className="mainheader__banner">
        <div className="mainheader__banner-wrap"></div>
      </div>
    </div>
  );
};
