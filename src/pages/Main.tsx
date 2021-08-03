import React, { FC } from 'react';
import { Nav } from '../components/common/Nav';
import { Footer } from '../components/common/Footer';
import { MainHeader } from '../components/main/MainHeader';
import { Shortcut } from '../components/main/Shortcut';
import './Main.scss';

export const Main: FC = () => {
  return (
    <div>
      <Nav />
      <MainHeader />
      <Shortcut />
      <Footer />
    </div>
  );
};
