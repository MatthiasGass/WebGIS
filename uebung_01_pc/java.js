



function testf() {

// Werte aus Formular auslesen
  let poi_name = document.getElementById("name").value;
  let poi_typ = document.getElementById("typ").value;
  let poi_gb = document.getElementById("gb").value;
  let poi_gl = document.getElementById("gl").value;
  let poi_beschr = document.getElementById("beschr").value;

// geoJson erstellen
  let geoJson = {
    "type": "FeatureCollection",
    "features":[],
  };

// feature erstellen
  let feature = {
   "type": "Feature",
   "properties": {},
   "geometry":{
      "type": "Point",
      "coordinates":[],
    }
  };


// Ausgelesene Werte in das Feature schreiben
feature.properties.name = poi_name;
let punkt = [parseFloat(poi_gb), parseFloat(poi_gl)];
feature.geometry.coordinates = punkt;


// Feature der Feature Collection hinzufügen
geoJson.features.push(feature);
z = JSON.stringify(geoJson);




};


test2() {
document.getElementById("input").innerHTML = "1abc";
};

// GeoJSON anzeigen
// console.log(JSON.stringify(geoJson));
// console.log(z)
