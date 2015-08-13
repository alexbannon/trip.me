$(document).ready(function() {



  $("h1").on("click", function(){
    var lat     = 37.7808851;
    var long    = -122.3948632;

    // Provide your access token
      L.mapbox.accessToken = 'pk.eyJ1Ijoia2FybGRvbnVzIiwiYSI6Ijg1ZTY5ZDZjMTUxZTdkMzk1Y2MwOTNjNjQwZDMwNTU2In0.WOrmvw7P5KviJbR_u5febw';
    // Create a map in the div #map
      var map = L.mapbox.map('map', 'mapbox.streets').setView([lat, long], 13);
        L.marker([lat, long], {
          icon: L.mapbox.marker.icon({
            'marker-size': 'large',
            'marker-symbol': 'camera',
            'marker-color': '#fa0'
          })
        }).addTo(map);
      var cir = L.circle([lat, long], 1000).addTo(map);


});

    });
