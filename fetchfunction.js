/* 
 fetchasyncawait.js

 task: get Data from API

 output: json

*/
import { activityLogger } from "./activitylog.js";

async function fetchData(endPointCity, city) {
  try {
    const resp = await fetch(endPointCity);
    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }
    const json = await resp.json();
    console.log(json);
    activityLogger(
      `City: ${city}, Temperature: ${json.current.temperature}`,
      city
    );
  } catch (error) {
    console.error(error.message);
  }
}

export { fetchData };
