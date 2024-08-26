/* 
activity logger logs retrieve value

*/

function activityLogger(message, city) {
  const cityWithoutSpaces = city.split(" ").join(""); /* remove spaces */

  const logContainer = document.querySelector(".logActivity");
  const newActivity = document.createElement("div");
  newActivity.classList.add(cityWithoutSpaces); //create class = city
  newActivity.textContent = message;
  logContainer.appendChild(newActivity);

  /*auto-scroll as new entries gets inserted*/
  logContainer.scrollTop = logContainer.scrollHeight;
}

export { activityLogger };
