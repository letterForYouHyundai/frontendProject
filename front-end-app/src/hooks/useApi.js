import { useState, useEffect } from 'react';
import axios from 'axios';

function useApi({
  url, method = 'GET', body = null, headers = null,
}) {
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
        console.log('response');
        console.log(response);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    if (url) fetchData();
    else setIsLoading(false);
  }, [url, method, body, headers]);

  return { data, isLoading, error };
}

export default useApi;
