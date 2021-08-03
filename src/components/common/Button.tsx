import React, { FC, MouseEvent, CSSProperties } from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  buttonStyle?: string;
  individualStyle?: CSSProperties;
  buttonTask: () => void;
  buttonDisabled?: boolean;
}

export const MainButton: FC<ButtonProps> = ({
  buttonStyle,
  individualStyle,
  text,
  buttonTask,
  buttonDisabled,
}: ButtonProps): JSX.Element => {
  const getButtonClassName = (buttonStyle?: string, disabled?: boolean) => {
    if (buttonStyle === 'primary') {
      if (disabled) {
        return 'button-primary--disabled';
      } else {
        return 'button-primary';
      }
    } else {
      return 'button';
    }
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        buttonTask();
      }}
      disabled={buttonDisabled}
      style={individualStyle}
      className={getButtonClassName(buttonStyle, buttonDisabled)}
    >
      {text}
    </button>
  );
};
