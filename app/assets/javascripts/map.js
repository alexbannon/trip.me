$(document).ready(function() {



  $("h1").on("click", function(){
    var city = $(".city").val();
    var state = $(".state").val();

    // Provide your access token
      L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw';
    // Create a map in the div #map
      var geocoder = L.mapbox.geocoder('mapbox.places'),
          map = L.mapbox.map('map', 'examples.map-h67hf2ic');

      geocoder.query(city + ', ' +  state , showMap);



      function showMap(err, data) {
    // The geocoder can return an area, like a city, or a
    // point, like an address. Here we handle both cases,
    // by fitting the map bounds to an area or zooming to a point.
    if (data.latlng) {
        map.setView([data.latlng[0], data.latlng[1]], 13);
        L.marker([data.latlng[0], data.latlng[1]], {
          icon: L.mapbox.marker.icon({
            'marker-size': 'large',
            'marker-symbol': 'danger',
            'marker-color': '#fa0'
          })
        }).addTo(map);

    }}

    });









});
