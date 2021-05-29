import { useState, useEffect } from 'react';

const Api = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

function useInitialState() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const data = await fetch(Api);
    const result = await data.json();

    setProducts(result);
  });

  return products;
}

export default useInitialState;
