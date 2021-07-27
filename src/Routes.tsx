import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { Main } from './pages/Main';
import { ProductDetail } from './pages/ProductDetail';

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/" component={Main} />
        <Route exact path="/product_detail" component={ProductDetail} />
      </Switch>
    </BrowserRouter>
  );
};
