var getLocale = function (location) {
    // format the github api
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=&lon=&exclude={part}&appid=eceee4a0024957a411954f261a712b6f";
    //make request
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#searchCity"); 


var formSubmitHandler = function(event) {
    event.preventDefault();
     //get value from input element
var searching = nameInputEl.value.trim();


if (searching) {
getLocale(searching);
nameInputEl.value = "";
} else {
alert("choose valid lat");
}
    console.log(formSubmitHandler);
  };

userFormEl.addEventListener("submit", formSubmitHandler);

var userFormE1 = document.querySelector("#user-form");
