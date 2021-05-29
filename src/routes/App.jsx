import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import useInitialState from '../hooks/useInitialState';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const App = () => {
  const products = useInitialState();
  const isEmpty = Object.keys(products).length;

  return isEmpty ? (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  ) : (
    <h1>Loading...</h1>
  );
};

export default App;
