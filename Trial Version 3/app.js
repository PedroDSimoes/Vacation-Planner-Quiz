const quizForm = document.getElementById('quiz-form');
const resultMessage = document.getElementById('result-message');

//declare possible destinations and combinations, ends in line 304
const cities = ["Tokyo", "Delhi", "Shanghai", "Sao Paulo", "Mumbai", "Beijing", "Istanbul", "Karachi", "Dhaka", "Moscow", "Cairo",
 "Bangkok", "Los Angeles", "Kolkata", "Buenos Aires", "Tehran", "Istanbul", "Lagos", "Rio de Janeiro", "Osaka", "Manila", "Tianjin", 
 "Kinshasa", "Lima", "Bangalore", "Bangkok", "Hyderabad", "Lahore", "Chennai", "Bogota", "Chicago", "Chongqing", "Shenzhen", "Guangzhou",
 "Istanbul", "Kinshasa", "Tianjin", "Chengdu", "Hong Kong", "Hangzhou", "Foshan", "Wuhan", "Suzhou", "Alexandria", "Lima", "Chicago", 
 "Dhaka", "Changsha", "Shantou", "Nanchang"]

const cheap = ["Hanoi", "Siem Reap", "Phnom Penh", "Luang Prabang", "Chiang Mai", "Vientiane", "Pokhara", "Goa", "Jaipur", "Kolkata", 
"Manila", "Cebu", "Ho Chi Minh City", "Yangon", "Bagan", "Mandalay", "Vigan", "Bangkok", "Krabi", "Bali", "Lombok", "Yogyakarta", 
"Kuala Lumpur", "Penang", "Langkawi", "Siargao Island", "Puerto Princesa", "El Nido", "Boracay Island", "Palawan", "Kathmandu", 
"Pokhara", "Darjeeling", "Chennai", "Agra", "Jaipur", "Amritsar", "Varanasi", "Udaipur", "Jodhpur", "Pushkar", "Jaisalmer", "Kuta", 
"Seminyak", "Gili Islands", "Hoi An", "Da Nang", "Hue", "Nha Trang", "Mui Ne", "Can Tho", "Phu Quoc Island", "Battambang", "Kampot", 
"Sihanoukville", "Koh Rong", "Pakse", "Vang Vieng", "Luang Namtha", "Savannakhet"]

const cheapCold = ["Krakow", "Vilnius", "Riga", "Tallinn", "Prague", "Budapest", "Sofia", "Belgrade", "Bucharest", "Moscow", 
"St. Petersburg", "Minsk", "Zagreb", "Sarajevo", "Skopje", "Bratislava", "Ljubljana", "Brasov", "Cluj-Napoca", "Sinaia", "Bansko", 
"Borovets", "Kranjska Gora", "Zakopane", "Rila Monastery", "Banska Bystrica", "Poprad", "High Tatras", "Zakynthos", "Tromso", 
"Lapland", "Harbin", "Oymyakon", "Ulaanbaatar", "Hohhot", "Almaty", "Astana", "Urumqi"]

const cheapHot = ["Marrakech", "Hoi An", "Oaxaca", "Luang Prabang", "Nha Trang", "Goa", "Siem Reap", "Bali", "Phuket", "Cebu", "Dahab", 
"Granada", "San Juan del Sur", "Sihanoukville", "Palawan", "Tulum", "Cartagena", "Puerto Escondido", "Gili Trawangan", "Bangkok", 
"Hanoi", "Gili Islands", "Ko Pha Ngan", "Phu Quoc Island", "Canggu", "Palolem Beach", "Varkala", "Kuta", "Boracay", "Nusa Lembongan", 
"Nusa Penida", "Ko Samet", "Ko Tao", "Langkawi", "Koh Rong", "El Nido", "Puerto Galera"]

const cheapHotSafe = ["Luang Prabang", "Hoi An", "Langkawi", "Koh Rong", "Palawan", "Koh Tao", "El Nido", "Granada", "San Juan del Sur"]

const cheapColdSafe = [ "Tromso", "Tallinn", "Ljubljana", "Krakow", "Riga", "Bratislava", "Vilnius", "Zagreb", "Poprad"]

const cheapHotSafeEurope = ["Athens","Lisbon"]

const cheapHotSafeAfrica = ["Marrakech"]

const cheapHotSafeAsia = ["Luang Prabang", "Hoi An", "Langkawi", "Koh Rong", "Palawan", "Koh Tao", "El Nido"]

const cheapHotSafeAmerica = ['Granada', 'San Juan del Sur']

const cheapColdSafeEurope = ["Tromso", "Tallinn", "Ljubljana", "Krakow", "Riga", "Bratislava", "Vilnius", "Zagreb", "Poprad"]

const cheapColdSafeAfrica = ["Kigali"]

const cheapColdSafeAsia = ["Almaty", "Ulaanbaatar", "Tbilisi", "Astana"]

const cheapColdSafeAmerica = ["Bariloche", "Anchorage", "Duluth"]

const culture = ["Paris","Barcelona","Rome","Athens","London","Edinburgh","Amsterdam","Brussels","Vienna","Prague","Krakow","Budapest",
"St. Petersburg","Moscow","Dubrovnik","Santorini","Florence","Sienna","Venice","Naples","Pompeii","Lisbon","Madrid","Granada","Seville",
"Cordoba","Toledo","Ronda","Marrakech","Fez","Cairo","Luxor","Petra","Jerusalem","Tel Aviv","Amman","Istanbul","Cappadocia","Ephesus",
"Antalya","Beirut","Tehran","Isfahan","Yazd","Kyoto","Tokyo","Osaka","Seoul","Busan","Jeju Island","Beijing","Shanghai","Lhasa",
"Kathmandu","Jaipur","Agra","Delhi","Mumbai","Udaipur","Jodhpur","Varanasi","Kolkata","Bangkok","Chiang Mai","Siem Reap","Hanoi",
"Ho Chi Minh City","Luang Prabang","Vientiane","Yangon","Mandalay","Bagan","Kathmandu","Bhaktapur","Pokhara","Bali","Yogyakarta",
"Jakarta","Bandung","Gyeongju","Bali","Yogyakarta","Jakarta","Bandung","Luang Namtha","Hue","Hue","Phnom Penh","Si Phan Don",
"Luang Prabang","Chiang Rai","Chiang Mai","Ayutthaya","Sukhothai","Hoi An","Hue","Halong Bay"]

const hot = ["Bali", "Phuket", "Boracay", "Cancun", "Punta Cana", "Nassau", "Maui", "Kauai", "Oahu", "Maldives", "Bora Bora", "Fiji", 
"Cairns", "Gold Coast", "Darwin", "Perth", "Cairns", "Broome", "Koh Samui", "Langkawi", "Siem Reap", "Hoi An", "Koh Phi Phi", "Krabi", 
"Puerto Vallarta", "Cabo San Lucas", "Riviera Maya", "Montego Bay", "Negril", "Tulum", "Cartagena", "San Andres", "Santa Marta", 
"Rio de Janeiro", "Salvador", "Natal", "Fernando de Noronha", "Maceio", "Recife", "Florianopolis", "Ilha Grande", "Buenos Aires", 
"Punta del Este", "Santiago", "San Juan", "St. Thomas", "St. Croix", "St. Lucia", "Aruba", "Barbados", "Antigua and Barbuda", 
"Turks and Caicos", "Bermuda", "Cayman Islands", "St. Maarten/St. Martin", "Martinique", "Guadeloupe", "Dominica", "Grenada", 
"St. Kitts and Nevis", "Tobago", "Curaçao", "Belize", "Roatan", "Ambergris Caye", "Grand Cayman", "Providenciales", "Isla Mujeres", 
"Cozumel"]

const cold = ["Reykjavik", "Tromsø", "Murmansk", "Helsinki", "Rovaniemi", "Inari", "Nuuk", "Kangerlussuaq", "Longyearbyen", "Abisko", 
"Kiruna", "Jukkasjärvi", "Bergen", "Oslo", "Trondheim", "Stockholm", "Gothenburg", "Helsinki", "St. Petersburg", "Moscow", "Yakutsk", 
"Anchorage", "Fairbanks", "Barrow", "Nome", "Yellowknife", "Whitehorse", "Iqaluit", "Churchill", "Toronto", "Quebec City", "Montreal", 
"Ottawa", "Vancouver", "Banff", "Jasper", "Whistler", "Calgary", "Edmonton", "Winnipeg", "Saskatoon", "Regina", "Halifax", "St. John's",
"Dublin", "Glasgow", "Edinburgh", "Belfast", "Manchester", "Birmingham", "Leeds", "Liverpool", "Newcastle", "Cardiff", "Snowdonia", 
"Bath", "Oxford", "Cambridge", "York", "London", "Paris", "Zurich", "Geneva", "Interlaken", "Bern", "Innsbruck", "Vienna", "Salzburg",
"Munich", "Berlin", "Hamburg", "Dresden", "Cologne", "Frankfurt", "Brussels", "Bruges", "Amsterdam", "Rotterdam", "Copenhagen", "Aarhus",
"Stockholm", "Gothenburg", "Oslo", "Bergen", "Helsinki", "St. Petersburg", "Moscow", "Riga", "Vilnius", "Tallinn", "Warsaw", "Krakow", 
"Prague", "Bratislava", "Budapest", "Bucharest", "Sofia", "Belgrade", "Zagreb", "Ljubljana"]

const rural = [  "Tuscany",  "Provence",  "Cotswolds",  "Scottish Highlands",  "Connemara",  "Ring of Kerry",  "Dingle Peninsula",  
"County Cork",  "County Kerry",  "County Clare",  "Lake District",  "Peak District",  "Yorkshire Dales",  "Cornwall",  "Isle of Skye", 
"Wester Ross",  "Cairngorms National Park",  "Isle of Harris",  "Isle of Lewis",  "Orkney Islands",  "Shetland Islands",  
"Jotunheimen National Park",  "Fjords",  "Lapland",  "South Island",  "North Island",  "The Outback",  "Kangaroo Island",  
"Blue Mountains",  "Margaret River",  "Hunter Valley",  "Barossa Valley",  "Yarra Valley",  "Tamar Valley",  "Byron Bay",  "Tasmania",  
"Hinterland of Queensland",  "Southern Highlands",  "Napa Valley",  "Sonoma Valley",  "Finger Lakes",  "Hudson Valley",  
"Nantucket Island",  "Cape Cod",  "Martha's Vineyard",  "Vermont",  "Montana",  "Colorado Rockies",  "Banff National Park",  
"Jasper National Park"]

const popular = ["Bangkok", "Paris", "London", "Dubai", "Singapore", "Kuala Lumpur", "New York City", "Istanbul", "Tokyo", "Antalya", 
"Seoul", "Phuket", "Mecca", "Hong Kong", "Milan", "Palma de Mallorca", "Barcelona", "Pattaya", "Osaka", "Bali", "Vienna", "Rome", 
"Taipei", "Prague", "Ho Chi Minh City", "Amsterdam", "Guangzhou", "Abu Dhabi", "Berlin", "Shanghai", "Madrid", "Miami", "Chennai", 
"Agra", "Jaipur", "Munich", "Vancouver", "Toronto", "Cancun", "Sydney", "Xi'an", "San Francisco", "Moscow", "Los Angeles", "Warsaw", 
"Hanoi", "Florence", "Edinburgh", "Lima", "Dublin"]

const unpopular = ["Ohrid", "Colonia del Sacramento", "Taroudant", "Huacachina", "Lalibela", "Ometepe Island", "Semuc Champey", 
"Bukhara", "Karimunjawa", "Turpan", "Gjirokastra", "Mindo", "El Chalten", "Batumi", "Lipe Island", "Bocas del Toro", "Terceira", 
"Kotor", "Kep", "Jericoacoara", "Luang Prabang", "Jiuzhaigou", "Galle", "Yogyakarta", "Sopron", "Akureyri", "Vipava", "Zabljak", 
"Khor Virap", "Zanzibar", "Nusa Lembongan", "Matamata", "Taveuni", "Chefchaouen", "Goreme", "Cadaques", "Sumba Island", "Ponta do Ouro", 
"San Agustin", "Yinchuan", "Phong Nha", "Bishkek", "Stavanger", "Inle Lake", "Vang Vieng", "Sigulda", "Ilulissat", "El Nido", 
"Lamu Island"]

const africa = ["Cape Town", "Marrakech", "Zanzibar City", "Cairo", "Luxor", "Fez", "Johannesburg", "Nairobi", "Victoria Falls", 
"Kruger National Park", "Serengeti National Park", "Maasai Mara National Reserve", "Essaouira", "Sousse", "Agadir", "Aswan", "Djerba", 
"Port Louis", "Giza", "Stone Town", "Windhoek", "Namib-Naukluft National Park", "Dahab", "Chefchaouen", "Kasane", "Ouarzazate", "Tunis", 
"Mount Kilimanjaro", "Toubkal National Park", "Sossusvlei", "Diani Beach", "Gaborone", "Lamu Island", "Sabi Sand Game Reserve", 
"Chobe National Park", "Lake Nakuru", "La Digue Island", "Nosy Be", "Lilongwe", "Flic en Flac", "Sainte Marie Island", "Antananarivo", 
"Isalo National Park", "Bazaruto Archipelago", "Nosy Iranja", "Mahé Island", "Anjajavy", "Zanzibar North", "Mnemba Island", 
"Benguerra Island", "Praslin Island", "Andasibe-Mantadia National Park"]

const europe = ["Paris", "Barcelona", "Rome", "Amsterdam", "Berlin", "Prague", "Vienna", "Madrid", "Copenhagen", "Dublin", "Lisbon", 
"Athens", "Budapest", "Venice", "Edinburgh", "Reykjavik", "Brussels", "Zurich", "Stockholm", "Dubrovnik"]

const america = ["New York City", "Cancun", "Vancouver", "Toronto", "San Francisco", "Los Angeles", "Tulum", "Antigua Guatemala", 
"San Juan del Sur", "Roatán", "Bocas del Toro", "Monteverde", "Rio de Janeiro", "Buenos Aires", "Machu Picchu", "Cartagena", "Quito", 
"Cusco"]

const asia = ["Bangkok", "Dubai", "Singapore", "Kuala Lumpur", "Istanbul", "Tokyo", "Antalya", "Seoul", "Phuket", "Mecca", "Hong Kong", 
"Taipei", "Ho Chi Minh City", "Abu Dhabi", "Shanghai", "Chennai", "Agra", "Jaipur", "Xi'an", "Hanoi"]

const safe = ["Reykjavik", "Singapore", "Tokyo", "Wellington", "Zurich", "Helsinki", "Oslo", "Vancouver", "Abu Dhabi", "Copenhagen", 
"Bern", "Sydney", "Munich", "Vienna", "Toronto"]

const unsafe = ["Caracas", "Port Moresby", "San Pedro Sula", "Kabul", "Ciudad Juarez", "Baghdad", "Cape Town", "Rio de Janeiro", 
"Guatemala City", "St. Louis", "Port-au-Prince", "Karachi", "Acapulco", "Johannesburg", "Kingston", "Mogadishu", "Tijuana", "Manila", 
"San Salvador", "Dar es Salaam"]

const coldSafe = ["Reykjavik", "Tromsø", "Inari", "Nuuk", "Kangerlussuaq", "Abisko", "Jukkasjärvi", "Bergen", "Oslo", "Trondheim", 
"Stockholm", "Gothenburg", "Helsinki", "St. Petersburg", "Moscow", "Yellowknife", "Whitehorse", "Iqaluit", "Churchill", "Toronto", 
"Quebec City", "Montreal", "Ottawa", "Vancouver", "Banff", "Jasper", "Whistler", "Calgary", "Edinburgh", "Snowdonia", "Bath", "Oxford", 
"Cambridge", "York", "Zurich", "Geneva", "Interlaken", "Bern", "Innsbruck"]

const ruralEurope = ["Tuscany", "The Cotswolds", "Loire Valley", "The Scottish Highlands", "The Swiss Alps", "The Dingle Peninsula", 
"The Black Forest", "The Pyrenees", "The Ring of Kerry", "The Burren", "Saxon Switzerland", "The Picos de Europa", 
"The Carpathian Mountains", "The Peloponnese", "The Douro Valley"]

const ruralAsia = ["Pai", "Jiufen", "Banaue", "Luang Prabang", "Ninh Binh", "Kampot", "Ella", "Pokhara", "Gorkhi-Terelj National Park", 
"Chitral", "Kep", "Hsipaw", "Bandarban", "Alchi", "Bishkek"]

const ruralAmerica = [  "Banff National Park",  "Jasper National Park",  "Gros Morne National Park",  "Haida Gwaii",  "Tikal",  
"San Ignacio",  "Todos Santos",  "Villa de Leyva",  "Cafayate",  "Valle de Guadalupe",  "Mindo",  "Boquete",  "Monteverde",  
"Colonia del Sacramento",  "Cachi",  "Carmelo",  "Jericoacoara",  "Ouro Preto",  "Villa la Angostura",  "El Chalten"]

const ruralAfrica = [  "Damaraland",  "Sossusvlei",  "Maasai Mara National Reserve",  "Okavango Delta",  "Kruger National Park",  
"Serengeti National Park",  "Ngorongoro Conservation Area",  "Bwindi Impenetrable National Park",  "Laikipia",  "Lake Malawi"]

const safeEurope = ["Reykjavik", "Zurich", "Bern", "Helsinki", "Porto", "Graz", "Tallinn", "Munich", "Krakow", "Dubrovnik", 
"Edinburgh", "Amsterdam", "Stockholm", "Oslo", "Luxembourg City", "Copenhagen", "Dublin", "Ljubljana", "Aarhus", "Vienna"]

const safeAsia = [  "Tokyo",  "Singapore",  "Taipei",  "Osaka",  "Hong Kong",  "Seoul",  "Kuala Lumpur",  "Doha",  "Dubai"]

const safeAmerica = ["Quebec City", "Ottawa", "Santiago", "Montevideo", "Panama City", "Vancouver", "Toronto"]

const safeAfrica = ["Tunis", "Windhoek", "Addis Ababa", "Accra", "Dar es Salaam", "Dakar"]

const cheapEurope = ["Krakow", "Riga", "Budapest", "Sarajevo", "Bratislava", "Sofia", "Bucharest", "Belgrade", "Tallinn", "Vilnius", 
"Prague", "Dubrovnik", "Athens", "Split", "Lisbon", "Porto", "Valencia", "Seville", "Granada", "Malaga", "Warsaw", "Gdansk", "Wroclaw", 
"Zakopane", "Brno", "Olomouc", "Bansko", "Plovdiv", "Cluj-Napoca", "Timisoara", "Novi Sad", "Nis", "Podgorica", "Skopje", 
"Thessaloniki", "Santorini", "Crete", "Mykonos", "Rhodes", "Corfu"]

const cheapAsia = ["Hanoi", "Chiang Mai", "Luang Prabang", "Siem Reap", "Vientiane", "Phnom Penh", "Yogyakarta", "Bali", "Bandung", 
"Hoi An", "Ubud", "Bangkok", "Chiang Rai", "Canggu", "Koh Samui", "Nha Trang", "Hue", "Yangon", "Mandalay", "Bagan", "Goa", "Kolkata", 
"Jaipur", "Pokhara", "Kathmandu", "Pokhara", "Langkawi", "Penang", "Kuala Lumpur", "Malacca", "Johor Bahru", "Georgetown", "Vigan", 
"Cebu City", "Davao City", "Cagayan de Oro", "Manila", "Surabaya", "Semarang", "Medan", "Makassar"]

const cheapAmerica = [  "San Cristobal de las Casas",  "Oaxaca",  "Guanajuato",  "Queretaro",  "Puerto Vallarta",  "Tulum",  "Merida",  
"Guadalajara",  "Puebla",  "Cancun",  "La Paz",  "Cartagena",  "Santa Marta",  "Medellin",  "Bogota",  "Lima",  "Cusco",  "Quito",  
"Cuenca",  "Sucre",  "La Paz",  "Asuncion",  "Cochabamba",  "Santa Cruz",  "Antigua",  "Granada",  "San Juan del Sur",  "Roatan",  
"San Pedro",  "Bocas del Toro"]

const cheapAfrica = ["Cairo", "Luxor", "Aswan", "Alexandria", "Hurghada", "Fez", "Marrakesh", "Tangier", "Essaouira", "Agadir", 
"Kampala", "Kigali", "Addis Ababa", "Lalibela", "Meknes", "Rabat", "Casablanca", "Ouarzazate", "Tunis", "Hammamet", "Sousse", 
"Cape Town", "Johannesburg", "Durban", "Nairobi", "Zanzibar", "Dar es Salaam", "Accra", "Marracuene", "Tozeur"]

const cultureEurope = ["Paris", "Rome", "Barcelona", "Vienna", "Athens", "London", "Florence", "Istanbul", "Amsterdam", "Berlin", 
"Prague", "Copenhagen", "Budapest", "Dubrovnik", "Lisbon", "Madrid", "Krakow", "Salzburg", "Edinburgh", "Venice", "Brussels", 
"Munich", "Seville", "Moscow", "St. Petersburg", "Oxford", "Cambridge", "Reykjavik", "Santorini", "Siena", "Bruges", "Zurich", 
"Tallinn", "Stockholm", "Oslo", "Helsinki", "Bordeaux", "Avignon"]

const cultureAsia = ["Tokyo", "Kyoto", "Seoul", "Beijing", "Xi'an", "Shanghai", "Hong Kong", "Taipei", "Singapore", "Mumbai", 
"New Delhi", "Agra", "Jaipur", "Varanasi", "Udaipur", "Kathmandu", "Bhaktapur", "Pokhara", "Colombo", "Kandy", "Galle", "Mandalay", 
"Bagan", "Yangon", "Luang Prabang", "Vientiane", "Siem Reap", "Phnom Penh", "Hoi An", "Hue", "Ho Chi Minh City", "Bangkok", 
"Chiang Mai", "Ayutthaya", "Bali", "Yogyakarta", "Borobudur", "Jakarta", "Kuala Lumpur", "George Town"]

const cultureAmerica = [  "Mexico City",  "Oaxaca",  "Guadalajara",  "Lima",  "Cusco",  "Buenos Aires",  "Rio de Janeiro",  
"Salvador",  "Cartagena",  "Bogotá",  "Quito",  "Galapagos Islands",  "Havana",  "Trinidad",  "San Juan",  "Santo Domingo",  
"Antigua",  "Panajachel",  "San Cristobal de las Casas",  "Merida",  "Ouro Preto",  "Belo Horizonte",  "Valparaiso",  "Santiago",  
"Montevideo",  "Punta del Este",  "Cuenca",  "La Paz",  "Sucre",  "San Pedro de Atacama"]

const cultureAfrica = ["Giza","Luxor","Alexandria","Aswan","Fez","Marrakesh","Tangier","Essaouira","Kampala","Kigali","Addis Ababa",
"Lalibela","Meknes","Rabat","Casablanca","Tunis","Sousse","Cape Town","Johannesburg","Durban","Nairobi","Zanzibar","Dar es Salaam",
"Accra","Lomé","Cotonou","Bamako","Dakar","Saint-Louis"]

const unpopularEurope = ["Matera", "Mostar", "Bruges", "Alberobello", "Kotor", "Sintra", "Ghent", "Coimbra", "Girona", 
"Plitvice Lakes National Park", "Rila Monastery", "Bled", "Sighisoara", "Kilkenny", "Tallinn", "Cadiz", "Porto Santo", 
"Carcassonne", "Dobrogea", "Hvar", "Hydra", "Halki", "Amorgos", "Elafonisos", "Herculaneum", "Guimarães", "Zakopane", 
"Gjirokastra", "Mljet", "Samothrace"]

const unpopularAsia = ["Nusa Penida", "Yubeng Village", "Phongsali", "Gorkhi-Terelj National Park", "Siargao Island", 
"Bishkek", "Kep", "Luang Namtha", "Koh Lipe", "Jiufen", "Khorog", "Tavan Bogd National Park", "Mrauk U", "Band-e-Amir National Park", 
"Nyaungshwe", "Karimabad", "Pulau Weh", "Bokor Hill Station", "Jaffna", "Kyaukme", "Sary Mogol", "Chitral", "Batad", "Tawang", 
"Mount Kailash", "Kaili", "Tansen", "Kampot", "Oslob", "Ishkashim"]

const unpopularAmerica = [  "Tulum",  "Oaxaca City",  "Colonia del Sacramento",  "Canoa",  "Mindo",  "Santa Teresa",  "Roatan",  
"Elqui Valley",  "Mancora",  "El Cocuy National Park",  "Huanchaco",  "Vilcabamba",  "El Chaltén",  "Mérida",  "San Agustín",  
"Ilha Grande",  "Tayrona National Park",  "San Blas Islands",  "Bahía de Caráquez",  "Cienfuegos",  "Banff",  "Caye Caulker",  
"La Ceiba",  "La Guajira",  "San Juan del Sur",  "Corn Islands",  "Chiloé Island",  "Chachapoyas",  "Pucón",  "Barichara"]

const unpopularAfrica = [  "Ifrane",  "Lalibela",  "Lamu Island",  "Jinja",  "Saint-Louis",  "Essaouira",  "Tozeur",  "Sidi Bou Said", 
 "Bahir Dar",  "Ibo Island",  "Chefchaouen",  "Kribi",  "Kigali",  "Kpalimé",  "Tafraoute",  "Djenne",  "Arba Minch",  "Boujdour", 
"Dakhla",  "Toubkal National Park"]

const popularEurope= ["Paris", "Rome", "Barcelona", "Amsterdam", "Venice", "Vienna", "Prague", "Florence", 
"Berlin", "Madrid", "Dublin", "Munich", "Athens", "Budapest", "Lisbon", "Brussels", "Copenhagen", "Edinburgh", 
"Krakow", "Stockholm", "Istanbul", "Oslo", "Zurich", "Helsinki", "Salzburg", "Santorini", "Dubrovnik", "Riga", 
"Reykjavik", "Split", "Tallinn", "Bruges", "Geneva", "Cologne", "Nice", "Bergen", "Innsbruck", "Lucerne", "Malaga"]

const popularAsia = ["Bali", "Bangkok", "Tokyo", "Seoul", "Phuket", "Siem Reap", "Hanoi", "Hong Kong", "Taipei", 
"Singapore", "Chiang Mai", "Kyoto", "Kuala Lumpur", "Shanghai", "Dubai", "Beijing", "Kathmandu", "Jaipur", "Goa", 
"Varanasi", "Ubud", "Ho Chi Minh City", "Mumbai", "Yangon", "Boracay", "Macau", "Langkawi", "Phnom Penh", "Cebu"]

const popularAmerica = ["New York City","Cancun","Los Angeles","Toronto","Rio de Janeiro","Miami","Las Vegas","Vancouver",
"Buenos Aires","San Francisco","Orlando","Havana","Punta Cana","Montreal","Mexico City","Washington, D.C.","San Diego","Seattle",
"Cartagena","Honolulu","San Juan","Calgary","New Orleans","Quito","Santiago","Atlanta","Nashville","Anchorage","Panama City","Charlotte"]

const popularAfrica = ["Marrakech", "Cape Town", "Cairo", "Zanzibar", "Serengeti National Park", "Victoria Falls", 
"Kruger National Park", "Essaouira", "Maasai Mara National Reserve", "Luxor", "Fez", "Nairobi", "Chefchaouen", "Mount Kilimanjaro", 
"Aswan", "The Pyramids of Giza", "La Digue Island", "Okavango Delta", "Dakar", "Ngorongoro Conservation Area", "Jinja", 
"Table Mountain", "Sossusvlei", "Lake Malawi", "Gorilla Trekking"]

const expensiveEurope = ["Monaco", "Mykonos", "Santorini", "Positano", "Amalfi Coast", "Venice", "Ibiza", "St. Tropez", "Capri", 
"Saint-Paul-de-Vence", "Lake Como", "Courchevel", "St. Moritz", "Gstaad", "Porto Cervo", "Cannes", "Paris", "London", "Vienna", 
"Rome", "Florence", "Barcelona", "Dubrovnik", "Zurich", "Edinburgh"]

const expensiveAsia = ["Tokyo", "Hong Kong", "Singapore", "Macau", "Seoul", "Beijing", "Shanghai", "Taipei", "Kyoto", 
"Osaka", "Dubai", "Abu Dhabi", "Maldives", "Mumbai", "Bangkok", "Phuket", "Bali", "Hanoi", "Siem Reap", "Yangon"]

const expensiveAmerica = ["New York City", "Los Angeles", "Miami", "San Francisco", "Las Vegas", "Honolulu", "Aspen", 
"Jackson Hole", "Napa Valley", "Palm Beach", "Martha's Vineyard", "Vail", "Park City", "Santa Fe", "Beverly Hills", 
"The Hamptons", "Newport", "Carmel", "Telluride", "Lake Tahoe"]

const expensiveAfrica = ["Seychelles", "Mauritius", "Cape Town", "Marrakech", "Zanzibar", "Serengeti National Park", "Victoria Falls", "Kruger National Park", 
"Maasai Mara National Reserve", "Ngorongoro Conservation Area"]

const hotEurope = ["Athens", "Nicosia", "Seville", "Córdoba", "Valencia", "Málaga", "Lisbon", "Albufeira", "Palermo", "Catania", 
"Valletta", "Santorini", "Mykonos", "Bodrum", "Antalya", "Dubrovnik", "Split", "Hvar", "Budva", "Kotor", "Sunny Beach", "Limassol", 
"Paphos", "Rhodes", "Chania", "Rethymno", "Ayia Napa", "Herceg Novi", "Ulcinj", "Saranda"]

const hotAsia = ["Bangkok", "Phuket", "Krabi", "Chiang Mai", "Bali", "Jakarta", "Yogyakarta", "Lombok", "Boracay", "Palawan", 
"Siem Reap", "Phnom Penh", "Sihanoukville", "Ho Chi Minh City", "Hanoi", "Da Nang", "Nha Trang", "Langkawi", "Kuala Lumpur", 
"Maldives", "Goa", "Jaipur", "Udaipur", "Havelock Island", "Colombo", "Galle", "Phu Quoc Island", "Koh Samui", "Pattaya", "Hua Hin"]

const hotAmerica = ["Cancún", "Playa del Carmen", "Tulum", "Puerto Vallarta", "Acapulco", "Cabo San Lucas", 
"San Juan del Sur", "Tamarindo", "Manuel Antonio", "Roatán", "Panama City", "Cartagena", "Santa Marta", "San Andrés", 
"Guayaquil", "Máncora", "Lima", "Arequipa", "Iquitos", "La Paz", "Santa Cruz de la Sierra", "Asunción", "Florianópolis",
"Recife", "Fortaleza", "Natal", "Salvador", "Rio de Janeiro", "Florianópolis", "Punta del Este"]

const unsafeEurope = ["Kyzyl", "Grozny", "Shkodër", "Birmingham", "Sarajevo", "Belfast", "Tallinn"]

const unsafeAmerica = ["Caracas", "San Pedro Sula", "Acapulco", "Distrito Central", "Ciudad Victoria", "Maturin", "Fortaleza", 
"Cali", "Ciudad Guayana", "Natal", "Cape Town", "Kingston", "San Salvador", "Guatemala City", "Belem", "Salvador", "Rio de Janeiro", 
"Tegucigalpa", "Culiacán", "Barranquilla"]

const unsafeAsia = ["Kabul", "Karachi", "Lahore", "Dhaka", "Manila", "Cebu", "Davao", "Jakarta", "Surabaya", "Medan", "Bangkok", 
"Pattaya", "Phuket", "Chiang Mai", "Ho Chi Minh City", "Hanoi", "Phnom Penh", "Siem Reap", "Yangon", "New Delhi"]

const unsafeAfrica = [
  "Johannesburg", "Cape Town", "Durban", "Pretoria", "Port Elizabeth","Lagos", "Abuja", "Kaduna", "Maiduguri", "Nairobi", "Mombasa",
  "Kisumu", "Mogadishu", "Hargeisa", "Baidoa", "Juba", "Khartoum","Dar es Salaam", "Zanzibar City", "Mwanza", "Gaborone", "Luanda","Brazzaville", "Kinshasa", "Lubumbashi", "Bangui", "Tripoli",
  "Benghazi", "Mogadishu", "Abidjan"]

const expensive = ["Monaco","Mykonos","Santorini","Positano","Amalfi Coast","Venice","Ibiza","St. Tropez","Capri","Saint-Paul-de-Vence",
"Lake Como","Courchevel","St. Moritz","Gstaad","Porto Cervo, Sardinia","Cannes","Paris","London","Vienna","Rome","Florence","Barcelona",
"Dubrovnik","Zurich","Edinburgh","Reykjavik","Stockholm","Copenhagen","Helsinki","Oslo","St. Petersburg","Moscow","Athens","Berlin",
"Munich","Salzburg","Geneva","Brussels","Amsterdam","New York City","Los Angeles","Miami","San Francisco","Las Vegas","Honolulu","Aspen",
"Jackson Hole","Napa Valley","Palm Beach","Martha's Vineyard","Vail","Park City","Santa Fe","Beverly Hills","The Hamptons","Newport",
"Carmel","Telluride","Lake Tahoe","Chicago","Boston","Washington D.C.","Nashville","Austin","San Diego","Santa Barbara","Palm Springs",
"Scottsdale","Seattle","Portland","Charleston","Savannah","Nantucket","Big Sur","Jackson","Newport Beach","The Woodlands",
"Delray Beach","Sedona"]

const global = ["Paris", "Barcelona", "Rome", "Amsterdam", "Berlin", "Vienna", "London", "Prague", "Madrid", "Copenhagen", "Dubrovnik", 
"Venice", "Stockholm", "Athens", "Budapest", "Florence", "Brussels", "Munich", "Lisbon", "Edinburgh", "Krakow", "Reykjavik", "Dublin", 
"Tallinn", "Oslo", "Riga", "Bruges", "Salzburg", "Nice", "Santorini", "Helsinki", "Seville", "Valencia", "Porto", "Gdansk", 
"Marseille", "Naples", "Split", "Bordeaux", "Ljubljana", "Zagreb", "Sarajevo", "Innsbruck", "Geneva", "Belgrade", "Wroclaw", "Tbilisi", 
"Bergen", "Malaga", "Odessa", "Nicosia", "Skopje", "Lviv", "Aarhus", "Lyon", "Dresden", "Glasgow", "Bologna", "Turin", "Bucharest", 
"Sofia", "Chisinau", "Brno", "Vilnius", "Cork", "Bath", "Cardiff", "Santander", "Lille", "Bratislava", "Plovdiv", "Galway", "Lausanne", 
"Graz", "Trieste", "Lecce", "Zadar", "Cluj-Napoca", "Salamanca", "Bled", "Coimbra", "Brasov", "Wiesbaden", "Tartu", "Antwerp", 
"Banja Luka", "Sibiu", "Chania", "Leeuwarden", "Kotor", "Braga", "Debrecen", "Limerick", "Brest", "Cork", "Evora", "Tromso", "Tokyo", "Kyoto", "Osaka", "Hiroshima", "Yokohama", 
"Sapporo", "Seoul", "Busan", "Jeju", "Taipei", "Kaohsiung", "Taichung", "Hong Kong", "Macau", "Beijing", "Shanghai", "Guangzhou", "Shenzhen", "Chongqing", "Xi'an", "Chengdu", "Hangzhou", 
"Suzhou", "Nanjing", "Guilin", "Shenyang", "Harbin", "Ulaanbaatar", "Phnom Penh", "Siem Reap", "Bangkok", "Chiang Mai", "Phuket", "Pattaya", "Hanoi", 
"Ho Chi Minh City", "Da Nang", "Hue", "Nha Trang", "Vientiane", "Luang Prabang", "Yangon", "Mandalay", "Bagan", "Phnom Tamao", "Sihanoukville", "Manila", 
"Cebu City", "Boracay", "Palawan", "Jakarta", "Bali", "Yogyakarta", "Surabaya", "Bandung", "Semarang", "Kuala Lumpur", "George Town", "Malacca City", 
"Langkawi", "Singapore", "Johor Bahru", "Medan", "Baliuag", "Batam", "Kathmandu", "Pokhara", "Chitwan", "Thimphu", "Paro", "Dhaka", "Chittagong", 
"Cox's Bazar", "Islamabad", "Lahore", "Karachi", "Multan", "Dharamsala", "Goa", "Jaipur", "Agra", "New Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", 
"Hyderabad", "Kochi", "Thiruvananthapuram", "Colombo", "Kandy", "Galle", "Male", "Thimphu", "Pokhara", "Baguio", "Angeles City", "Banaue", "Davao City", 
"Batangas City", "Cairo", "Luxor", "Sharm El Sheikh", "Cape Town", "Johannesburg", "Durban", "Kruger National Park", "Marrakesh", "Casablanca", "Fez", 
"Lagos", "Abuja", "Accra", "Kumasi", "Nairobi", "Mombasa", "Zanzibar City", "Dar es Salaam", "Serengeti", "Maasai Mara", "Victoria Falls", "Harare", 
"Bulawayo", "Gaborone", "Maun", "Windhoek", "Swakopmund", "Ngorongoro", "Addis Ababa", "Lalibela", "Djibouti City", "Mogadishu", "Kigali", "Kampala", "Entebbe", 
"Kinshasa", "Lubumbashi", "Bangui", "Douala", "Yaounde", "Port Louis", "Antananarivo", "Maputo", "Beira", "Cape Verde", "Praia", "Banjul", "Freetown", 
"Monrovia", "Abidjan", "Sydney", "Melbourne", "Brisbane", "Gold Coast", "Perth", "Cairns", "Adelaide", "Auckland", "Queenstown", "Wellington", "Christchurch", 
"Rotorua", "Taupo", "Dunedin", "Hamilton", "Napier", "Nelson", "Tauranga", "Wanaka", "Mount Maunganui", "Bay of Islands", "Blenheim", "Picton", "Gisborne", 
"Whakatane", "Mackay", "Broome", "Port Douglas", "Hobart", "Launceston", "Rio de Janeiro", "Buenos Aires", "Sao Paulo", "Lima", "Bogota", "Santiago", "Cartagena", 
"Cusco", "Salvador", "Florianopolis", "Punta del Este", "Quito", "Montevideo", "Fortaleza", "Medellin", "Mendoza", "La Paz", "Recife", "Valparaiso", "Natal", "Buzios", 
"Salvador da Bahia", "Joao Pessoa", "Cali", "Antigua", "Asuncion", "San Juan", "Iguazu Falls", "Maceio", "Puerto Varas", "Gramado", "Belo Horizonte", "Trujillo", "Arica", "Cuenca", 
"Cuiaba", "Puerto Iguazu", "Sucre", "Foz do Iguacu", "Guayaquil", "Bariloche", "Belém", "La Serena", "New York City", "Los Angeles", "Miami", "Las Vegas", "San Francisco", "Chicago", 
"Toronto", "Vancouver", "Montreal", "Cancun", "Mexico City", "Playa del Carmen", "Tijuana", "San Diego", "Honolulu", "San Jose", "Boston", "Seattle", "Quebec City", "Washington, D.C.", "Nashville", "New Orleans", "Orlando", "Portland", "Denver",
"Atlanta", "Austin", "Houston", "Dallas", "Philadelphia", "Calgary", "Edmonton", "Niagara Falls", "Halifax", "Ottawa", "Anchorage", "Juneau", "Vancouver (Washington)", "Palm Springs", "Santa Fe", "Montreal (West Island)", "Pittsburgh", 
"Sedona", "St. Louis", "Kansas City", "Salt Lake City", "Charleston", "Cincinnati", "Cleveland", "Columbus", "Detroit", "Memphis", "Raleigh", "San Antonio", "San Luis Obispo", "Savannah", "Tampa", "Asheville", "Birmingham", "Boise", "Buffalo",
"Charlotte", "Indianapolis", "Jackson Hole", "Louisville", "Madison", "Milwaukee", "Minneapolis", "Mobile", "Rochester"]


quizForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  // get the user's answers
  const q1Answer = quizForm.elements.q1.value;
  const q2Answer = quizForm.elements.q2.value;
  const q3Answer = quizForm.elements.q3.value;
  const q4Answer = quizForm.elements.q4.value;
  const q7Answer = quizForm.elements.q7.value;
  const q10Answer = quizForm.elements.q10.value;
  const q11Answer = quizForm.elements.q11.value;

  // calculate the score
  let score;
  if (q1Answer === 'cheap' && q2Answer === 'cold' && q7Answer === "america" && q10Answer === 'safe') {
    score = cheapColdSafeAmerica[Math.floor(Math.random() * cheapColdSafeAmerica.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'cold' && q7Answer === "asia" && q10Answer === 'safe') {
    score = cheapColdSafeAsia[Math.floor(Math.random() * cheapColdSafeAsia.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'cold' && q7Answer === "africa" && q10Answer === 'safe') {
    score = cheapColdSafeAfrica[Math.floor(Math.random() * cheapColdSafeAfrica.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'cold' && q7Answer === "europe" && q10Answer === 'safe') {
    score = cheapColdSafeEurope[Math.floor(Math.random() * cheapColdSafeEurope.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'hot' && q7Answer === "europe" && q10Answer === 'safe') {
    score = cheapHotSafeEurope[Math.floor(Math.random() * cheapHotSafeEurope.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'hot' && q7Answer === 'america' && q10Answer === 'safe') {
      score = cheapHotSafeAmerica[Math.floor(Math.random() * cheapHotSafeAmerica.length)]; 
  } else if (q1Answer === 'cheap' && q2Answer === 'hot' && q7Answer === 'africa' && q10Answer === 'safe') {
    score = cheapHotSafeAfrica[Math.floor(Math.random() * cheapHotSafeAfrica.length)]; 
  } else if (q1Answer === 'cheap' && q2Answer === 'hot' && q7Answer === 'asia' && q10Answer === 'safe') {
    score = cheapHotSafeAsia[Math.floor(Math.random() * cheapHotSafeAsia.length)]; 
  }  else if (q1Answer === 'cheap' && q2Answer === 'hot' && q10Answer === 'safe') {
    score = cheapHotSafe[Math.floor(Math.random() * cheapHotSafe.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'cold' && q10Answer === 'safe') {
    score = cheapColdSafe[Math.floor(Math.random() * cheapColdSafe.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'hot') {
    score = cheapHot[Math.floor(Math.random() * cheapHot.length)];
  } else if (q1Answer === 'cheap' && q2Answer === 'cold') {
    score = cheapCold[Math.floor(Math.random() * cheapCold.length)];
  } else if (q2Answer === 'cold' && q10Answer === 'safe') {
    score = coldSafe[Math.floor(Math.random() * coldSafe.length)];
  } else if (q3Answer === 'rural' && q7Answer === 'europe') {
    score = ruralEurope[Math.floor(Math.random() * ruralEurope.length)];
  } else if (q3Answer === 'rural' && q7Answer === 'asia') {
    score = ruralAsia[Math.floor(Math.random() * ruralAsia.length)];
  } else if (q3Answer === 'rural' && q7Answer === 'america') {
    score = ruralAmerica[Math.floor(Math.random() * ruralAmerica.length)];
  } else if (q3Answer === 'rural' && q7Answer === 'africa') {
    score = ruralAfrica[Math.floor(Math.random() * ruralAfrica.length)];
  } else if (q10Answer === 'safe' && q7Answer === 'europe') {
    score = safeEurope[Math.floor(Math.random() * safeEurope.length)];
  } else if (q10Answer === 'safe' && q7Answer === 'asia') {
    score = safeAsia[Math.floor(Math.random() * safeAsia.length)];
  } else if (q10Answer === 'safe' && q7Answer === 'america') {
    score = safeAmerica[Math.floor(Math.random() * safeAmerica.length)];
  } else if (q10Answer === 'safe' && q7Answer === 'africa') {
    score = safeAfrica[Math.floor(Math.random() * safeAfrica.length)];
  } else if (q1Answer === 'cheap' && q7Answer === 'europe') {
    score = cheapEurope[Math.floor(Math.random() * cheapEurope.length)];
  } else if (q1Answer === 'cheap' && q7Answer === 'asia') {
    score = cheapAsia[Math.floor(Math.random() * cheapAsia.length)];
  } else if (q1Answer === 'cheap' && q7Answer === 'america') {
    score = cheapAmerica[Math.floor(Math.random() * cheapAmerica.length)];
  } else if (q1Answer === 'cheap' && q7Answer === 'africa') {
    score = cheapAfrica[Math.floor(Math.random() * cheapAfrica.length)];
  } else if (q11Answer === 'cultured' && q7Answer === 'europe') {
    score = cultureEurope[Math.floor(Math.random() * cultureEurope.length)];
  } else if (q11Answer === 'cultured' && q7Answer === 'asia') {
    score = cultureAsia[Math.floor(Math.random() * cultureAsia.length)];
  } else if (q11Answer === 'cultured' && q7Answer === 'america') {
    score = cultureAmerica[Math.floor(Math.random() * cultureAmerica.length)];
  } else if (q11Answer === 'cultured' && q7Answer === 'africa') {
    score = cultureAfrica[Math.floor(Math.random() * cultureAfrica.length)];
  } else if (q4Answer === 'unpopular' && q7Answer === 'europe') {
    score = unpopularEurope[Math.floor(Math.random() * unpopularEurope.length)];
  } else if (q4Answer === 'unpopular' && q7Answer === 'asia') {
    score = unpopularAsia[Math.floor(Math.random() * unpopularAsia.length)];
  } else if (q4Answer === 'unpopular' && q7Answer === 'america') {
    score = unpopularAsia[Math.floor(Math.random() * unpopularAsia.length)];
  } else if (q4Answer === 'unpopular' && q7Answer === 'africa') {
    score = unpopularAfrica[Math.floor(Math.random() * unpopularAfrica.length)];
  } else if (q4Answer === 'popular' && q7Answer === 'europe') {
    score = popularEurope[Math.floor(Math.random() * popularEurope.length)];
  } else if (q4Answer === 'popular' && q7Answer === 'asia') {
    score = popularAsia[Math.floor(Math.random() * popularAsia.length)];
  } else if (q4Answer === 'popular' && q7Answer === 'america') {
    score = popularAmerica[Math.floor(Math.random() * popularAmerica.length)];
  } else if (q4Answer === 'popular' && q7Answer === 'africa') {
    score = popularAfrica[Math.floor(Math.random() * popularAfrica.length)];
  } else if (q1Answer === 'rich' && q7Answer === 'europe') {
    score = expensiveEurope[Math.floor(Math.random() * expensiveEurope.length)];
  } else if (q1Answer === 'rich' && q7Answer === 'asia') {
    score = expensiveAsia[Math.floor(Math.random() * expensiveAsia.length)];
  } else if (q1Answer === 'rich' && q7Answer === 'america') {
    score = expensiveAmerica[Math.floor(Math.random() * expensiveAmerica.length)];
  } else if (q1Answer === 'rich' && q7Answer === 'africa') {
    score = expensiveAfrica[Math.floor(Math.random() * expensiveAfrica.length)];
  } else if (q2Answer === 'hot' && q7Answer === 'europe') {
    score = hotEurope[Math.floor(Math.random() * hotEurope.length)];
  } else if (q2Answer === 'hot' && q7Answer === 'asia') {
    score = hotAsia[Math.floor(Math.random() * hotAsia.length)];
  } else if (q2Answer === 'hot' && q7Answer === 'america') {
    score = hotAmerica[Math.floor(Math.random() * hotAmerica.length)];
  } else if (q2Answer === 'hot' && q7Answer === 'africa') {
    score = africa[Math.floor(Math.random() * africa.length)];
  } else if (q10Answer === 'not-safe' && q7Answer === 'europe') {
    score = unsafeEurope[Math.floor(Math.random() * unsafeEurope.length)];
  } else if (q10Answer === 'not-safe' && q7Answer === 'america') {
    score = unsafeAmerica[Math.floor(Math.random() * unsafeAmerica.length)];
  } else if (q10Answer === 'not-safe' && q7Answer === 'asia') {
    score = unsafeAsia[Math.floor(Math.random() * unsafeAsia.length)];
  }  else if (q10Answer === 'not-safe' && q7Answer === 'africa') {
    score = unsafeAfrica[Math.floor(Math.random() * unsafeAfrica.length)];
  } else if (q1Answer === 'cheap') {
    score = cheap[Math.floor(Math.random() * cheap.length)];
  } else if (q11Answer === 'cultured') {
    score = culture[Math.floor(Math.random() * culture.length)]
  } else if (q2Answer === 'hot') {
    score = hot[Math.floor(Math.random() * hot.length)]
  } else if (q2Answer === 'cold') {
    score = cold[Math.floor(Math.random() * cold.length)]
  } else if (q3Answer === 'rural') {
    score = rural[Math.floor(Math.random() * rural.length)]
  } else if (q3Answer === 'cities') {
    score = cities[Math.floor(Math.random() * cities.length)]
  } else if (q4Answer === 'popular') {
    score = popular[Math.floor(Math.random() * popular.length)]
  } else if (q4Answer === 'unpopular') {
    score = unpopular[Math.floor(Math.random() * unpopular.length)]
  } else if (q7Answer === 'africa') {
    score = africa[Math.floor(Math.random() * africa.length)]
  } else if (q7Answer === 'europe') {
    score = europe[Math.floor(Math.random() * europe.length)]
  } else if (q7Answer === 'asia') {
    score = asia[Math.floor(Math.random() * asia.length)]
  } else if (q7Answer === 'america') {
    score = america[Math.floor(Math.random() * america.length)]
  } else if (q10Answer === 'safe') {
    score = safe[Math.floor(Math.random() * safe.length)]
  } else if (q10Answer === 'not-safe') {
    score = unsafe[Math.floor(Math.random() * unsafe.length)]
  } else if (q1Answer === 'rich') {
    score = expensive[Math.floor(Math.random() * expensive.length)]
  } else score = global[Math.floor(Math.random() * global.length)];

  // display the result message
  quizForm.innerHTML = `<p>Your perfect destination is ${score}! Enjoy your vacation!</p>
  <p id="final-paragraph">If you'd like to retake the test in order to get a different destination click the button below<button id="final-button" onclick="window.location.href = 'quiz.html';">Retake</button></p><br>
  <p>If you enjoyed my work consider <a href= "https://www.buymeacoffee.com/PedroSimoes" target ="_blank">buying me a coffee! :)</a></p>`
});