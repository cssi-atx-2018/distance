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

//Country class for templating the basic info sent to HTML
class Country {
  //Basic constructor class
  constructor(id, name, language, currency, info) {
    this.id = id;
    this.name = name;
    this.language = language;
    this.currency = currency;
    this.info = info;
  }
  // Returns a dictionary of all the info
  get area() {
    return this.calcArea();
  }
  // Method to return dictionary of all the info
  calcArea() {
    return {"name":this.name, "language": this.language, "id":this.id, "currency":this.currency, "info":this.info};
  }
}

//Initializing all the countries
const austria = new Country("AT", "Austria", "Hungarian", "Euro", "Austria is a German-speaking country in Central Europe, characterized by mountain villages, baroque architecture, Imperial history and rugged Alpine terrain. Vienna, its Danube River capital, is home to the Schönbrunn and Hofburg palaces. It has counted Mozart, Strauss and Freud among its residents. The country’s other notable regions include the northern Bohemian Forest, Traunsee Lake and eastern hillside vineyards.");
const brazil = new Country("BR", "Brazil", "Portugese", "Real", "Brazil, a vast South American country, stretches from the Amazon Basin in the north to vineyards and massive Iguaçu Falls in the south. Rio de Janeiro, symbolized by its 38m Christ the Redeemer statue atop Mount Corcovado, is famed for its busy Copacabana and Ipanema beaches as well as its enormous, raucous Carnaval festival, featuring parade floats, flamboyant costumes, and samba music and dance.");
const china = new Country("CN", "China", "Mandarin", "Renminbi", "China is a populous nation in East Asia whose vast landscape encompasses grassland, desert, mountains, lakes, rivers and more than 14,000km of coastline. Capital Beijing mixes modern architecture with historic sites such as the Forbidden City palace complex and Tiananmen Square. Shanghai is a skyscraper-studded global financial center. The iconic Great Wall of China runs east-west across the country's north.");
const egypt = new Country("EG", "Egypt", "Arabic", "Egyptian Pound", "Egypt, a country linking northeast Africa with the Middle East, dates to the time of the pharaohs. Millennia-old monuments sit along the fertile Nile River Valley, including Giza's colossal Pyramids and Great Sphinx as well as Luxor's hieroglyph-lined Karnak Temple and Valley of the Kings tombs. The capital, Cairo, is home to Ottoman landmarks like Muhammad Ali Mosque and the Egyptian Museum, a trove of antiquities.");
const france = new Country("FR", "France", "French", "Euro", "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.");
const germany = new Country("DE", "Germany", "German", "Euro", "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.");
const india = new Country("IN", "India", "Hindi", "Indian Rupee", "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. In the north, Mughal Empire landmarks include Delhi’s Red Fort complex and massive Jama Masjid mosque, plus Agra’s iconic Taj Mahal mausoleum. Pilgrims bathe in the Ganges in Varanasi, and Rishikesh is a yoga centre and base for Himalayan trekking.");
const italy = new Country("IT", "Italy", "Italian", "Euro", "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s \"David\" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.");
const mexico = new Country("MX", "Mexico", "Spanish", "Mexican Peso", "Mexico is a country between the U.S. and Central America that's known for its Pacific and Gulf of Mexico beaches and its diverse landscape of mountains, deserts and jungles. Ancient ruins such as Teotihuacán and the Mayan city of Chichén Itzá are scattered throughout the country, as are Spanish colonial-era towns. In capital Mexico City, upscale shops, renowned museums and gourmet restaurants cater to modern life.");
const morocco = new Country("MA", "Morocco", "Arabic", "Moroccan Dirham", "Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences. Marrakesh’s medina, a mazelike medieval quarter, offers entertainment in its Djemaa el-Fna square and souks (marketplaces) selling ceramics, jewelry and metal lanterns. The capital Rabat’s Kasbah of the Udayas is a 12th-century royal fort overlooking the water.");
const spain = new Country("ES", "Spain", "Spanish", "Euro", "Spain, a country on Europe’s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures. Capital city Madrid is home to the Royal Palace and Prado museum, housing works by European masters. Segovia has a medieval castle (the Alcázar) and an intact Roman aqueduct. Catalonia’s capital, Barcelona, is defined by Antoni Gaudí’s whimsical modernist landmarks like the Sagrada Família church.");
const thailand = new Country("TH", "Thailand", "Thai", "Thai Baht", "Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha. In Bangkok, the capital, an ultramodern cityscape rises next to quiet canalside communities and the iconic temples of Wat Arun, Wat Pho and the Emerald Buddha Temple (Wat Phra Kaew). Nearby beach resorts include bustling Pattaya and fashionable Hua Hin.");
const turkey = new Country("TR", "Turkey", "Turkish", "Turkish Lira", "Turkey is a nation straddling eastern Europe and western Asia with cultural connections to ancient Greek, Persian, Roman, Byzantine and Ottoman empires. Cosmopolitan Istanbul, on the Bosphorus Strait, is home to the iconic Hagia Sophia, with its soaring dome and Christian mosaics, the massive 17th-century Blue Mosque and the circa-1460 Topkapı Palace, former home of sultans. Ankara is Turkey’s modern capital.");
const united_kingdom = new Country("GB", "United Kingdom", "English", "Pound Sterling", "The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe. England – birthplace of Shakespeare and The Beatles – is home to the capital, London, a globally influential centre of finance and culture. England is also site of Neolithic Stonehenge, Bath’s Roman spa and centuries-old universities at Oxford and Cambridge.");
const united_states = new Country("US", "United States", "English", "Dollar", "The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii extending the nation’s presence into the Pacific Ocean. Major Atlantic Coast cities are New York, a global finance and culture center, and capital Washington, DC. Midwestern metropolis Chicago is known for influential architecture and on the west coast, Los Angeles' Hollywood is famed for filmmaking.");

//Get HTML fields to populate
var country = document.getElementById("country");
var lang = document.getElementById("lang");
var curr = document.getElementById("curr");
var info = document.getElementById("info");

//Switch to chosen country
function switchToCountry(id){
  //COUNTRY CODES ARE: AT - Austria, BR - Brazil, CN - China, EG - Egypt,
  //    FR - France, DE - Germany, IN - India, IT - Italy, MX - Mexico,
  //    MA - Morocco, ES - Spain, TH - Tailand, TR - Turkey, GB - UK, US - US
  switch (id){
    case "AT":
      currentCountry = austria;
      break;
    case "BR":
      currentCountry = brazil;
      break;
    case "CN":
      currentCountry = china;
      break;
    case "EG":
      currentCountry = egypt;
      break;
    case "FR":
      currentCountry = france;
      break;
    case "DE":
      currentCountry = germany;
      break;
    case "IN":
      currentCountry = india;
      break;
    case "IT":
      currentCountry = italy;
      break;
    case "MX":
      currentCountry = mexico;
      break;
    case "MA":
      currentCountry = morocco;
      break;
    case "ES":
      currentCountry = spain;
      break;
    case "TH":
      currentCountry = thailand;
      break;
    case "GB":
      currentCountry = united_kingdom;
      break;
    case "US":
      currentCountry = united_states;
      break;
    default:
      currentCountry = null;
      console.log("Country with id "+id+" is not yet supported");
      break;
  }
  //Country chosen is supported
  if (currentCountry != null){

    //Populate the HTML fields
    country.innerText = currentCountry["name"];
    lang.innerText = "Language: "+currentCountry["language"];
    curr.innerText = "Currency: "+currentCountry["currency"];
    info.innerText = currentCountry["info"];

    console.log("Switching to "+currentCountry.area["name"]);

    //Move slider up from bottom
    slider.style.height = "30%";
  }
  //Country chosen is not supported
  else {
    //Move slider back down or stay down
    slider.style.height = "0%";
  }
}
