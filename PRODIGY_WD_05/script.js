document.getElementById("getweather").addEventListener("click", function () {
  const location = document.getElementById("location").value;
  if (location) {
    weather(location);
  } else {
    alert("please enter the location");
  }
});
function weather(location) {
  const apikey = "1ebe1f7c1d6225406daecda991fe87cd";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === 200) {
        display(data);
      } else {
        alert("Location not found");
      }
      console.log(data);
    })
    .catch((error) => {
      console.log("Error fetching the weather data", error);
    });
}
function display(data) {
  document.getElementById(
    "Temperature"
  ).innerHTML = `Temperature : ${data.main.temp} °C`;
  document.getElementById(
    "Humidity"
  ).innerHTML = `Humidity : ${data.main.humidity} %`;
  document.getElementById("speed").innerHTML = `Speed : ${data.wind.speed} m/s`;
}
