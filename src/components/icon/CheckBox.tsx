import React, { FC } from 'react';
import './CheckBox.scss';

interface CheckBoxProps {
  checked: boolean;
}

export const CheckBox: FC<CheckBoxProps> = ({
  checked,
}: CheckBoxProps): JSX.Element => {
  return (
    <div className="checkbox">
      <div
        className={checked ? 'checkbox__outline--checked' : 'checkbox__outline'}
      >
        <svg width="1.6rem" height="1.6rem" viewBox="0 0 16 16">
          <path
            fill="#fff"
            d="M6.185 10.247l7.079-7.297 1.435 1.393-8.443 8.703L1.3 8.432l1.363-1.464z"
          ></path>
        </svg>
      </div>
    </div>
  );
};
