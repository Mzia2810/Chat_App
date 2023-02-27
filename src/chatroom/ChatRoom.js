import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Testing = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://paraquiz.ddns.net:3399/getquestionsit')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error));
  }, []);


  console.log('This is data from server :: ',data)

  return (
    <View>
      {data ? (
        <Text>{data.title}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Testing;
