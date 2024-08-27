import * as apiBuilder from "./apifactory.js";
import { fetchData } from "./fetchfunction.js";

/*  data from SEARCH:
construct the endpoint
    get the city from the screen search input bar
*/
let endPointCity = "";

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");

/* click listener */
searchButton.addEventListener("click", () => {
  const city = searchInput.value;
  if (city !== "") {
    endPointCity = apiBuilder.buildEndPoint(city);
    fetchData(endPointCity, city);
    // console.log(`${city}: ${endPointCity} weather`);
  }
});
