function initMap() {

const icPot = {  lat: 41.9544, lng: -87.6744  };
const map = new google.maps.Map(document.getElementById("map"), {
  zoom: 4,
  center: icPot,
  zoomControl: false,
 scaleControl: true,
 mapId:	"34124fc1f66b71f1",
});

const marker = new google.maps.Marker({
  position: icPot,
  map,
  title: "Click to zoom",
});

map.addListener("center_changed", () => {
  // 3 seconds after the center of the map has changed, pan back to the
  // marker.
  window.setTimeout(() => {
    map.panTo(marker.getPosition());
  }, 3000);
});
marker.addListener("click", () => {
  map.setZoom(18);
  map.setCenter(marker.getPosition());
});
// Create the initial InfoWindow.
 let infoWindow = new google.maps.InfoWindow({
   content: "Click the map to get Lat/Lng! or Double-Click to zoom",
   position: icPot,
 });

 infoWindow.open(map);
 // Configure the click listener.
 map.addListener("click", (mapsMouseEvent) => {
   // Close the current InfoWindow.
   infoWindow.close();
   // Create a new InfoWindow.
   infoWindow = new google.maps.InfoWindow({
     position: mapsMouseEvent.latLng,
   });
   infoWindow.setContent(
     JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
   );
   infoWindow.open(map);
 });


}
