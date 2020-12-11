// Map
var map;

function initMap() {
  myCoordinates = {
    lat: 22.765982,
    lng: -103.570213
  }
  map = new google.maps.Map(document.getElementById('map'), {
    center: myCoordinates,
    zoom: 15
  });
  var valpaMarker = new google.maps.Marker({
    position: myCoordinates,
    map: map,
    title: "Valparaiso, Zacatecas is my parent's hometown, I spent most of my summer here."
  });
}

// To add the marker to the map, call setMap();
valpaMarker.setMap(map);
window.addEventListener('load', initMap);

// Slideshow
var i = 0;
var images = [];
var time = 3000;

images[0] = "media/cerveca.jpg";
images[1] = "media/valpa.jpg";
images[2] = "media/florida.jpg";
images[3] = "media/plateros.jpg";
images[4] = "media/valpar.jpg";

function changeImg() {
  document.getElementById("slide").src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;