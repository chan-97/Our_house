import React, { FC } from 'react';
import './Button.scss';

interface ButtonProps {
  text: string;
  individualStyle?: Record<string, unknown>;
}

export const MainButton: FC<ButtonProps> = ({
  text,
  individualStyle,
}: ButtonProps): JSX.Element => {
  return (
    <button style={individualStyle} className="button">
      {text}
    </button>
  );
};
