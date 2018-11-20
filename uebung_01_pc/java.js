// globales object geoJson erstellen
let geoJson = {
  "type": "FeatureCollection",
  "features":[],
};


// erstellt die Funktion testf die mit dem Button "Submit" ausgeführt wird
function func1() {

  // Werte werden aus dem Formular über eine ID ausgelesen und variablen zugeordnet
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

  // Ausgelesene Werte des Formulars werden in das Feature geschrieben
  feature.properties.Name = poi_name;
  feature.properties.Typ = poi_typ;
  feature.properties.Beschreibung = poi_beschr;

  // Koordinaten werden in einem Array zusammengefasst und in das Feature geschrieben
  let punkt = [parseFloat(poi_gb), parseFloat(poi_gl)];
  feature.geometry.coordinates = punkt;

  // Feature wird der Feature Collection des GeoJsons hinzugefügt
  geoJson.features.push(feature);

  // stringify geojson zur Textausgabe in HTML
  geoJson_string = JSON.stringify(geoJson, null, ' '); // stringify zusätzliche argumente für ordentlichkeit

  // Ausgabe des Geojsons im HTML Dokument
  document.getElementById("Ausgabe_wgs").innerHTML = geoJson_string;

};


// erstellt die Funktion tneu() die mit dem Button "Submit" ausgeführt wird
function func2() {

  // Werte aus dem Textausgabefeld werden eingelesen und eienr Variable zugeordnet
  let input = document.getElementById("Ausgabe_wgs").value;

  // konvertieren des geoJsons in ein Javascript Object und Zuordnung zu einer neuen Variable
  gj_neu = JSON.parse(input);

  // hinzufügen der crs Information (Projektionsinformation)
  gj_neu.crs = {
    "type": "name",
    "properties": { "name": "urn:ogc:def:crs:EPSG::3857" }
  };

  // Schleife ruft jedes Feature des geoJson einzeln ab, extrahiert die Koordinaten...
  for(let i = 0; i < gj_neu.features.length; i++) {
    let feature = gj_neu.features[i];
    let coordinaten = feature.geometry.coordinates;
    let x_wgs = coordinaten[0];
    let y_wgs = coordinaten[1];

    // projiziert die Koordinaten von WGS84 nach WEBMercator durch folgende Formel:
    let x_wm = x_wgs * 20037508.34 / 180;
    let y_wm = (Math.log(Math.tan((90 + y_wgs) * Math.PI / 360.0 )) / (Math.PI / 180.0)) * 20037508.34 / 180;

    // Zusammenfassen der Koordinaten in einem Array, Koordinaten in Feature schreiben
    let punkt_wm = [parseFloat(x_wm), parseFloat(y_wm)];
    feature.geometry.coordinates = punkt_wm;

  }

  geoJson_string = JSON.stringify(gj_neu, null, ' ');
  document.getElementById("Ausgabe_wm").innerHTML = geoJson_string;
};
