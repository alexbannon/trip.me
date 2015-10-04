$(document).ready(function(){

    var lat_long_trial = window.location.pathname;
    console.log(lat_long_trial);
    var lat_long = window.location.pathname;
    console.log(lat_long);
    lat_long_array = lat_long.split("_");
    console.log(lat_long_array);
    var lat = lat_long_array[2];
    var long = lat_long_array[4];
    console.log(lat);
    console.log(long);
    // var lat     = 37.7808851;
    // var long    = -122.3948632;

    // Provide your access token
      L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw';
    // Create a map in the div #map
      var map = L.mapbox.map('map', 'mapbox.streets').setView([lat, long], 10);
        L.marker([lat, long], {
          icon: L.mapbox.marker.icon({
            'marker-size': 'large',
            'marker-symbol': 'camera',
            'marker-color': '#fa0'
          })
        }).addTo(map);
      var cir = L.circle([lat, long], 1000).addTo(map);

      map.scrollWheelZoom.disable();
  });
