// object geoJson erstellen
let geoJson = {
  "type": "FeatureCollection",
  "features":[],
};


// erstellt die Funktion testf die mit dem Button "Submit" ausgeführt wird
function testf() {

// Werte werden aus dem Formular ausgelesen
  let poi_name = document.getElementById("name").value;
  let poi_typ = document.getElementById("typ").value;
  let poi_gb = document.getElementById("gb").value;
  let poi_gl = document.getElementById("gl").value;
  let poi_beschr = document.getElementById("beschr").value;

// object feature erstellen
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
  feature.properties.typ = poi_typ;
  feature.properties.beschreibung = poi_beschr;
  let punkt = [parseFloat(poi_gb), parseFloat(poi_gl)];
  feature.geometry.coordinates = punkt;

  // Feature der Feature Collection hinzufügen
  geoJson.features.push(feature);

  // stringify geojson
  geoJson_string = JSON.stringify(geoJson); // stringify zusätzliche argumente für ordentlichkeit

  // Ausgabe des Geojsons im HTML Dokument
  document.getElementById("Ausgabe").innerHTML = geoJson_string;

};

function neu() {
  let input = document.getElementById("Ausgabe").value;
  gj_alt = JSON.parse(input);

  gj_alt.crs = {};

  // Schleife
  for(let i = 0; i < gj_alt.features.length; i++) {
    feature = jg_alt.features[i]
    coordinaten = feature.coordinates
    xcoordinate = coordinaten[0]
    ycoordinate = coordinaten[1]

    x = lon * 20037508.34 / 180
  }


};
