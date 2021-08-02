import React, { useState, FC, RefObject, CSSProperties } from 'react';
import { SignUpFunc } from '../../types/SignUp';
import { DomainList } from '../../types/SignUp';
import { DomainListItem } from './ListItem';
import { DropdownIcon } from '../icon/DropdownIcon';
import './Input.scss';

interface InputProps {
  readonly name: string;
  value?: string;
  signUpFormTask?: SignUpFunc;
  readonly placeholder?: string;
  readonly individualStyle?: CSSProperties;
  type?: string;
}

interface SelectProps<T> {
  readonly type: string;
  list: T[];
  domainValue: string;
  domainDisabled?: boolean;
  domainInputRef?: RefObject<HTMLInputElement>;
  signUpFormTask?: SignUpFunc;
  readonly listHeight: string;
  readonly individualStyle?: CSSProperties;
}

export const CommonInput: FC<InputProps> = ({
  name,
  value,
  signUpFormTask,
  placeholder,
  individualStyle,
  type,
}: InputProps): JSX.Element => {
  return (
    <input
      name={name}
      value={value}
      onChange={(e) => signUpFormTask?.handleInput(name, e.target.value)}
      placeholder={placeholder}
      className="common-input"
      style={individualStyle}
      type={type}
    />
  );
};

export const CommonSelect = <T extends DomainList>({
  type,
  list,
  domainValue,
  domainDisabled,
  domainInputRef,
  signUpFormTask,
  listHeight,
  individualStyle,
}: SelectProps<T>): JSX.Element => {
  const [toggleList, setToggleList] = useState<boolean>(false);

  const setListItem = () => {
    if (type === 'domain') {
      return list.map((item): JSX.Element => {
        return (
          <DomainListItem
            key={item.id}
            item={item}
            signUpFormTask={signUpFormTask}
            listHeight={listHeight}
          />
        );
      });
    }
  };

  return (
    <div
      onClick={() => setToggleList(!toggleList)}
      style={individualStyle}
      className="common-select"
    >
      <input
        value={domainValue}
        ref={domainInputRef}
        onChange={(e) => signUpFormTask?.handleChangeDomain(e.target.value)}
        disabled={domainDisabled}
        className="common-select__input"
      />
      <div className="common-select__icon-box">
        <DropdownIcon />
      </div>
      {toggleList && <ul className="common-select__list">{setListItem()}</ul>}
    </div>
  );
};
