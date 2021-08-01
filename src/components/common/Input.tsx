import React, { useState, FC, CSSProperties } from 'react';
import { UseSignUpFunc } from '../../types/SignUp';
import { DomainListItem } from './ListItem';
import { DropdownIcon } from '../icon/DropdownIcon';
import './Input.scss';

interface InputProps {
  readonly name?: string;
  value?: string;
  signUpFormTask?: UseSignUpFunc;
  readonly placeholder?: string;
  readonly individualStyle?: CSSProperties;
}

interface SelectProps {
  readonly type: string;
  list: string[];
  readonly listHeight: string;
  readonly individualStyle?: CSSProperties;
}

export const CommonInput: FC<InputProps> = ({
  name,
  value,
  signUpFormTask,
  placeholder,
  individualStyle,
}: InputProps): JSX.Element => {
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => signUpFormTask?.updateInputValue(e.target.value)}
      placeholder={placeholder}
      className="common-input"
      style={individualStyle}
    />
  );
};

export const CommonSelect: FC<SelectProps> = ({
  type,
  list,
  listHeight,
  individualStyle,
}: SelectProps): JSX.Element => {
  const [toggleList, setToggleList] = useState<boolean>(false);

  const setListItem = () => {
    if (type === 'domain') {
      return list.map((item: string, idx: number): JSX.Element => {
        return <DomainListItem key={idx} item={item} listHeight={listHeight} />;
      });
    }
  };

  return (
    <div
      onClick={() => setToggleList(!toggleList)}
      style={individualStyle}
      className="common-select"
    >
      <input disabled className="common-select__input" />
      <div className="common-select__icon-box">
        <DropdownIcon />
      </div>
      {toggleList && <ul className="common-select__list">{setListItem()}</ul>}
    </div>
  );
};
