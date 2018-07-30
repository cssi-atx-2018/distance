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
const australia = new Country("AU", "Australia", "English", "Australian Dollar", "Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal. Its capital, Canberra, is inland. The country is known for its Sydney Opera House, the Great Barrier Reef, a vast interior desert wilderness called the Outback, and unique animal species like kangaroos and duck-billed platypuses.");
const austria = new Country("AT", "Austria", "Hungarian", "Euro", "Austria is a German-speaking country in Central Europe, characterized by mountain villages, baroque architecture, Imperial history and rugged Alpine terrain. Vienna, its Danube River capital, is home to the Schönbrunn and Hofburg palaces. It has counted Mozart, Strauss and Freud among its residents. The country’s other notable regions include the northern Bohemian Forest, Traunsee Lake and eastern hillside vineyards.");
const brazil = new Country("BR", "Brazil", "Portugese", "Real", "Brazil, a vast South American country, stretches from the Amazon Basin in the north to vineyards and massive Iguaçu Falls in the south. Rio de Janeiro, symbolized by its 38m Christ the Redeemer statue atop Mount Corcovado, is famed for its busy Copacabana and Ipanema beaches as well as its enormous, raucous Carnaval festival, featuring parade floats, flamboyant costumes, and samba music and dance.");
const canada = new Country("CA", "Canada", "English", "Canadian Dollar", "Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montréal and Québec City, and capital city Ottawa. Canada's vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It's also home to Niagara Falls, a famous group of massive waterfalls.");
const china = new Country("CN", "China", "Mandarin", "Renminbi", "China is a populous nation in East Asia whose vast landscape encompasses grassland, desert, mountains, lakes, rivers and more than 14,000km of coastline. Capital Beijing mixes modern architecture with historic sites such as the Forbidden City palace complex and Tiananmen Square. Shanghai is a skyscraper-studded global financial center. The iconic Great Wall of China runs east-west across the country's north.");
const france = new Country("FR", "France", "French", "Euro", "France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower. The country is also renowned for its wines and sophisticated cuisine. Lascaux’s ancient cave drawings, Lyon’s Roman theater and the vast Palace of Versailles attest to its rich history.");
const germany = new Country("DE", "Germany", "German", "Euro", "Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches. It has over 2 millennia of history. Berlin, its capital, is home to art and nightlife scenes, the Brandenburg Gate and many sites relating to WWII. Munich is known for its Oktoberfest and beer halls, including the 16th-century Hofbräuhaus. Frankfurt, with its skyscrapers, houses the European Central Bank.");
const iceland = new Country("IS", "Iceland", "Icelandic", "Icelandic Krona", "Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields. Massive glaciers are protected in Vatnajökull and Snæfellsjökull national parks. Most of the population lives in the capital, Reykjavik, which runs on geothermal power and is home to the National and Saga museums, tracing Iceland’s Viking history.");
const india = new Country("IN", "India", "Hindi", "Indian Rupee", "India is a vast South Asian country with diverse terrain – from Himalayan peaks to Indian Ocean coastline – and history reaching back 5 millennia. In the north, Mughal Empire landmarks include Delhi’s Red Fort complex and massive Jama Masjid mosque, plus Agra’s iconic Taj Mahal mausoleum. Pilgrims bathe in the Ganges in Varanasi, and Rishikesh is a yoga centre and base for Himalayan trekking.");
const israel = new Country("IL", "Israel", "Arabic", "New Shekel", "Israel, a Middle Eastern country on the Mediterranean Sea, is regarded by Jews, Christians and Muslims as the biblical Holy Land. Its most sacred sites are in Jerusalem. Within its Old City, the Temple Mount complex includes the Dome of the Rock shrine, the historic Western Wall, Al-Aqsa Mosque and the Church of the Holy Sepulchre. Israel's financial hub, Tel Aviv, is known for its Bauhaus architecture and beaches.");
const italy = new Country("IT", "Italy", "Italian", "Euro", "Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. Its capital, Rome, is home to the Vatican as well as landmark art and ancient ruins. Other major cities include Florence, with Renaissance masterpieces such as Michelangelo’s \"David\" and Brunelleschi's Duomo; Venice, the city of canals; and Milan, Italy’s fashion capital.");
const mexico = new Country("MX", "Mexico", "Spanish", "Mexican Peso", "Mexico is a country between the U.S. and Central America that's known for its Pacific and Gulf of Mexico beaches and its diverse landscape of mountains, deserts and jungles. Ancient ruins such as Teotihuacán and the Mayan city of Chichén Itzá are scattered throughout the country, as are Spanish colonial-era towns. In capital Mexico City, upscale shops, renowned museums and gourmet restaurants cater to modern life.");
const peru = new Country ("PE", "Peru", "Spanish", "Sol", "Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains. The region around Machu Picchu, including the Sacred Valley, Inca Trail and colonial city of Cusco, is rich in archaeological sites. On Peru’s arid Pacific coast is Lima, the capital, with a preserved colonial center and important collections of pre-Columbian art.");
const south_africa = new Country("ZA", "South Africa", "Afrikaans", "South African Rand", "South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.");
const south_korea = new Country("KR", "South Korea", "Korean", "South Korean Won", "South Korea, an East Asian nation on the southern half of the Korean Peninsula, shares one of the world’s most heavily militarized borders with North Korea. It’s equally known for its green, hilly countryside dotted with cherry trees and centuries-old Buddhist temples, plus its coastal fishing villages, sub-tropical islands and high-tech cities such as Seoul, the capital.");
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
    case "AU":
      currentCountry = australia;
      break;
    case "AT":
      currentCountry = austria;
      break;
    case "BR":
      currentCountry = brazil;
      break;
    case "CA":
      currentCountry = canada;
      break;
    case "CN":
      currentCountry = china;
      break;
    case "FR":
      currentCountry = france;
      break;
    case "DE":
      currentCountry = germany;
      break;
    case "IS":
      currentCountry = iceland;
      break;
    case "IN":
      currentCountry = india;
      break;
    case "IL":
      currentCountry = israel;
      break;
    case "IT":
      currentCountry = italy;
      break;
    case "MX":
      currentCountry = mexico;
      break;
    case "PE":
      currentCountry = peru;
      break;
    case "ZA":
      currentCountry = south_africa;
      break;
    case "KR":
      currentCountry = south_korea;
      break;
    case "ES":
      currentCountry = spain;
      break;
    case "TH":
      currentCountry = thailand;
      break;
    case "TR":
      currentCountry = turkey;
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
