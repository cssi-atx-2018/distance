var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",
  "theme": "dark",
  "projection": "miller",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
  },
  "smallMap": {},
  "export": {
    "enabled": false,
    "position": "bottom-right"
  }
} );

function switchToCountry(id){
  //COUNTRY CODES ARE: AT - Austria, BR - Brazil, CN - China, EG - Egypt,
  //    FR - France, DE - Germany, IN - India, IT - Italy, MX - Mexico,
  //    MA - Morocco, ES - Spain, TH - Tailand, TR - Turkey, GB - UK, US - US
  console.log("I want to switch to "+id);
}
