function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 43.70313, lng: 7.26608 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 43.696813, lng: 7.275562 },
  { lat: 43.701409, lng: 7.278222 },
  { lat: 43.702429, lng: 7.312200 },
  { lat: 43.720183, lng: 7.394268 },
  { lat: 43.697772, lng: 7.121877}
];

$(document).ready(function() {
    document.getElementById("googlemapsscript").innerText = `<script async defer src="https://maps.googleapis.com/maps/api/js?key=[YOUR_API_KEY]&callback=initMap"></script>`;

    document.getElementById("markerClustering").innerText = `<script src="https://unpkg.com/@googlemaps/markerclustererplus/dist/index.min.js"></script>`;

    document.getElementById("mapCode").innerText = `<div id="map"></div>`;

    document.getElementById("mapCodeCSS").innerText = `#map {
  height: 400px;
  width: 100%;
}`
})