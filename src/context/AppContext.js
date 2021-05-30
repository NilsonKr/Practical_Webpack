import React, { useState, useEffect } from 'react';

export const Context = React.createContext({});

const Api = 'http://us-central1-gndx-fake-api.cloudfunctions.net/api';

const AppContext = props => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const data = await fetch(Api);
    const result = await data.json();

    setProducts(result);
  }, []);

  return <Context.Provider value={products}>{props.children}</Context.Provider>;
};

export default AppContext;
