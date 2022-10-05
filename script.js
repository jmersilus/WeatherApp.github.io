
var getLocale = function (zipcode) {
    // format the github api
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&appid=926afdc6e884f2f107e8a6acb356c651";
    //make request
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            displaylocation(data, zipcode);
            console.log(data)
        });
    });
};

var placeTempE1 = document.querySelector("#searched-temp");
var placeSearchLocation = document.querySelector("#searched-location");

var displaylocation = function(place, searchLocation){
    placeTempE1.textcontent = "";
    placeSearchLocation.textcontent = searchLocation;

}

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
alert("choose valid zipcode");
}
    console.log(formSubmitHandler);
  };

userFormEl.addEventListener("submit", formSubmitHandler);


