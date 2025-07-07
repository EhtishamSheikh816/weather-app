const getInpTxt = document.querySelector("#inpTxt");
const getSec2 = document.querySelector("#sec2");

const weather = () => {
  if (getInpTxt.value === "") {
    Swal.fire({
      icon: "warning",
      title: "Empty Field",
      text: "Please enter a city name!",
      confirmButtonColor: "#1e90ff",
    });
    return;
  }

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?&q=${getInpTxt.value}&units=metric&appid=08809a4b313eef7b03c345e10940008e`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      console.log(data.weather[0].main);
      getSec2.innerHTML = `<div class="weather-info">
          <h1>${data.name}</h1>
          <div class="emoji">
          <img src="images/mist.png" alt+"weather Condition/>
          </div>
          <div class="temp">${data.main.temp}°C</div>
          <div class="description">${data.weather[0].main}</div>

          <div class="weather-details">
            <div>
              <span>${data.main.humidity}%</span>
              <small>Humidity</small>
            </div>
            <div>
              <span>${data.wind.speed} km/h</span>
              <small>Wind</small>
            </div>
          </div>
        </div>`;
    })
    .catch((err) => {
      console.log(err);
      getSec2.innerHTML = `<div class="weather-info-error">⚠️ City not found!<div/>`;
    });

  getInpTxt.value = "";
};
