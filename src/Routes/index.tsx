import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Checkout from '../pages/Checkout';
import Products from '../pages/Products';
import Review from '../pages/Review';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/products" component={Products} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/review" component={Review} />
    </Switch>
  );
};

export default Routes;
