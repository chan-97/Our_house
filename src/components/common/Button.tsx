import React, { FC, MouseEvent, CSSProperties } from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  buttonStyle?: string;
  individualStyle?: CSSProperties;
  buttonTask?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const MainButton: FC<ButtonProps> = ({
  buttonStyle,
  individualStyle,
  text,
  buttonTask,
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={buttonTask}
      style={individualStyle}
      className={buttonStyle === 'primary' ? 'button-primary' : 'button'}
    >
      {text}
    </button>
  );
};
