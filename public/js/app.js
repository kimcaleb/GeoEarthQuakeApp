// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";

$(document).ready(function() {
  console.log("Let's get coding!");
  // CODE IN HERE!

});

let divContainer = document.getElementById("info");
function fetchQuake() {
  return axios.get(`https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2018-11-28&endtime=2018-12-05&minmagnitude=4`).then(res => {
    res.data.features.forEach(e => {
      let newElement = document.createElement("p");
      newElement.innerHTML = e.properties.title;
      divContainer.appendChild(newElement);
    })
  });
}

fetchQuake();
var map;
function initMap() {
  var myLatLng = {lat: 37.78, lng: -122.44};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.78, lng: -122.44},
    zoom: 8
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}
initMap();