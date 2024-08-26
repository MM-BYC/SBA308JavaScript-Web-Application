/*
apifactory.js

task: buildEndpoint

*/

const url = `http://api.weatherstack.com/`;
const apiKey = `b9864138e2635fc62f760dbf599f380b`;
const buildEndPoint = (city) => {
  const endPoint = `${url}/current?access_key=${apiKey}&query=${city}`;
  console.log(endPoint);
  return endPoint;
};

export { buildEndPoint };
