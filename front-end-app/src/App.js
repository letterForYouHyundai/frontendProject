import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //backend에서 api호출
        const response = await axios.get('/sample/test');

        //데이터 return 확인
        console.log(response);
        setData(response.data.list); // 리스트 데이터만 가져오기
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>API 통신 호출 확인</h1>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.userId}>
              <p>User ID: {item.userId}</p>
              <p>User PW: {item.userPw}</p>
              <p>Name: {item.name}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
