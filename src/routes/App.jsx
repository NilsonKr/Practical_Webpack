import React, { useContext, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Context } from '../context/AppContext';
import { hot } from 'react-hot-loader/root';

import Home from '../containers/Home';
// import Checkout from '../containers/Checkout';
import Layout from '../components/Layout';
import NotFound from '../containers/NotFound';

const LoadLazyCheckout = React.lazy(() => import('../containers/Checkout'));

const App = () => {
  const products = useContext(Context);
  const isEmpty = products.length;

  return isEmpty ? (
    <Suspense fallback={<h1> Checkout Loading... </h1>}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/checkout" component={LoadLazyCheckout} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Suspense>
  ) : (
    <h1>Loading...</h1>
  );
};

export default hot(App);
