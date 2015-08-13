// $(document).ready(function() {
//
//
//
//   $("h1").on("click", function(){
//     var city = $(".city").val();
//     var state = $(".state").val();
//
//     // Provide your access token
//       L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw';
//     // Create a map in the div #map
//       var geocoder = L.mapbox.geocoder('mapbox.places'),
//           map = L.mapbox.map('map', 'examples.map-h67hf2ic');
//
//       geocoder.query(city + ', ' +  state , showMap);
//
//
//
//       function showMap(err, data) {
//     // The geocoder can return an area, like a city, or a
//     // point, like an address. Here we handle both cases,
//     // by fitting the map bounds to an area or zooming to a point.
//     if (data.latlng) {
//         map.setView([data.latlng[0], data.latlng[1]], 13);
//         L.marker([data.latlng[0], data.latlng[1]], {
//           icon: L.mapbox.marker.icon({
//             'marker-size': 'large',
//             'marker-symbol': 'danger',
//             'marker-color': '#fa0'
//           })
//         }).addTo(map);
//
//     }}
//
//
//
//     var url = "https://api.wunderground.com/api/dbedcebb04caaf1d/geolookup/conditions/q/" + state + "/" + city + ".json";
//     $.ajax({
//       url     : url,
//       type    : "GET",
//       dataType: "json"
//
//     }).done(function(response){
//       console.log(response.current_observation.temp_f);
//       $("body").append("<div>The temperature in " + city + " is " + response.current_observation.temp_f + " degrees Fahrenheit</div>");
//       $("body").append("<div>Weather conditions in " + city + " is " + response.current_observation.weather + "</div>");
//       $("body").append("<img id='wundergroundImage' src=" + response.current_observation.icon_url + " />");
//     }).fail(function(){
//       console.log("you messed up...good job!");
//     }).always(function(){
//       console.log("are we there yet?");
//     });
//   });
//
//
//
//
//
//
//
//
// });



$("h2").on("click", function(){
  var hashTag = $(".hashTag").val();


var url = HTTParty.get("https://api.instagram.com/v1/tags/potato/media/recent?access_token=1921140498.8ebd9c2.010909445d2f45d68c973aa625f72138");
 $.ajax({
   url     : url,
   type    : "GET",
   dataType: "json"

}).done(function(response){
  console.log(response);
  // $("body").append("<img id='Instagram_Image' src=" + response.data.images.standard_resolution.url + " />");
}).fail(function(){
  console.log("you messed up...good job!");
}).always(function(){
  console.log("are we there yet?");
});
});
