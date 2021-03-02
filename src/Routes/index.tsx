import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Products} />
      <Route exact path="/checkout" component={Checkout} />
    </Switch>
  );
};

export default Routes;
