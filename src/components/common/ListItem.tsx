import React from 'react';
import { DomainList, SignUpFunc } from '../../types/SignUp';
import './ListItem.scss';

interface ListItemProps<T> {
  item: T;
  signUpFormTask?: SignUpFunc;
  listHeight: string;
}

export const DomainListItem = <T extends DomainList>({
  item,
  signUpFormTask,
  listHeight,
}: ListItemProps<T>): JSX.Element => {
  return (
    <li
      onClick={() => signUpFormTask?.handleSelectDomain(item.id, item.domain)}
      className="list-item"
      style={{ height: listHeight }}
    >
      {item.domain}
    </li>
  );
};
