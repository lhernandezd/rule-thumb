import { useState, useEffect } from 'react';
import axios from 'axios';

const useHttpGet = (url, dependencies) => {
  const [ fetchData, setFetchData ] = useState(null);

  useEffect(() => {
    const fetchGet = async () => {
      try {
        const response = await axios.get(url);
        const { data: { data} } = response;
        setFetchData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGet();
  }, dependencies);

  return [fetchData];
};

export {
  useHttpGet,
};
