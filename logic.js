//create a map object
var map = L.map("map",{
    center: [0,0],
    zoom: 3

});

L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    // attribution:  "Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>"
    // maxZoom: 18,
    // id: "mapbox.outdoors",
    accessToken: API_KEY
}).addTo(map);

var earthquake_data = "Earthquake_data.geojson"

d3.json(earthquake_data,function(data){
    console.log(data.features)
    var earthquakes = L.geoJSON(data.features,{
        onEachFeature: function(feature,layer) {
          var datePart = new Date(feature.properties.time);
          layer.bindPopup(`<h3>${feature.properties.place}</h3>
          <p>${datePart}</p>`);
        }
      }).addTo(map)

});