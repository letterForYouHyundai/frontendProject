import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useApi({
  url, method = 'GET', body = null, headers = null, useNav = true,
}) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await axios({
          url: process.env.REACT_APP_ENV === 'LOCAL' ? url : `${process.env.REACT_APP_SERVER_URL}${url}`, method, data: body, headers,
        });

        // 개발용 로그
        // console.log(`url : ${url}`);
        // console.log(`method : ${method}`);
        // console.log('====== body ======');
        // console.log(body);
        // console.log('====== headers ======');
        // console.log(headers);
        // console.log('====== response ======');
        // console.log(response);

        if (response.data.code === 200 && response.data.status) setData(response.data.result);
        else {
          setError({ code: response.data.code, error: response.data.error });
          if (useNav) { navigate('/error', { state: { error: response.data.error } }); }
        }
      } catch (err) {
        console.log('err: ', err);
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
