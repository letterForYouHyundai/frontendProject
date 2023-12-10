import { useState, useEffect } from 'react';
import axios from 'axios';

function useApi(url, method = 'GET', body = null, headers = null) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await axios({
          url, method, data: body, headers,
        });
        setData(response.data.result);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url, method, body, headers]);

  return { data, isLoading, error };
}

export default useApi;
