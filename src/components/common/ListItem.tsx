import React, { FC } from 'react';
import './ListItem.scss';

interface ListItemProps {
  item: string;
  listHeight: string;
}

export const DomainListItem: FC<ListItemProps> = ({
  item,
  listHeight,
}: ListItemProps): JSX.Element => {
  return (
    <li className="list-item" style={{ height: listHeight }}>
      {item}
    </li>
  );
};

// 기본 스타일 여기서 지정, height랑 text 만 받기
