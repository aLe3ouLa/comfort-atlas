export type SpiceLevel = "none" | "mild" | "medium" | "hot";

export type ComfortFood = {
  countryCode: string;
  country: string;
  dish: string;
  shortDescription: string;
  spiceLevel: SpiceLevel;
};

export const comfortFoods: ComfortFood[] = [
  {
    countryCode: "GR",
    country: "Greece",
    dish: "Moussaka",
    shortDescription:
      "Layers of aubergine, spiced filling, and béchamel made for slow Sunday gatherings.",
    spiceLevel: "mild",
  },
  {
    countryCode: "IT",
    country: "Italy",
    dish: "Risotto al Ossobuco",
    shortDescription:
      "Creamy Arborio rice infused with saffron and rich meat broth, warming from the inside out.",
    spiceLevel: "none",
  },
  {
    countryCode: "MX",
    country: "Mexico",
    dish: "Chilaquiles",
    shortDescription:
      "Crispy tortilla chips smothered in salsa, topped with cheese and crema, quick comfort without compromise.",
    spiceLevel: "medium",
  },
  {
    countryCode: "JP",
    country: "Japan",
    dish: "Curry Rice",
    shortDescription:
      "Tender meat and vegetables in mild, sweet curry sauce over fluffy rice, childhood memories in every bowl.",
    spiceLevel: "mild",
  },
  {
    countryCode: "IN",
    country: "India",
    dish: "Khichdi",
    shortDescription:
      "Rice and lentils simmered soft with turmeric and ghee, the dish every Indian household turns to when nothing else will do.",
    spiceLevel: "none",
  },
  {
    countryCode: "US",
    country: "United States",
    dish: "Mac and Cheese",
    shortDescription:
      "Creamy, cheesy pasta that's been bringing people together since childhood, simple, satisfying, timeless.",
    spiceLevel: "none",
  },
  {
    countryCode: "FR",
    country: "France",
    dish: "Beef Bourguignon",
    shortDescription:
      "Tender beef braised in red wine with mushrooms and pearl onions, rustic elegance on a plate.",
    spiceLevel: "none",
  },
  {
    countryCode: "ES",
    country: "Spain",
    dish: "Cocido Madrileño",
    shortDescription:"A slow-cooked chickpea, meat, and vegetable stew that has warmed Spanish family tables for generations.",
    spiceLevel: "none",
  },
  {
    countryCode: "DE",
    country: "Germany",
    dish: "Käsespätzle",
    shortDescription:
      "Soft egg noodles folded with melted cheese and crispy onions, Germany's answer to mac and cheese.",
    spiceLevel: "none",
  },
  {
    countryCode: "GB",
    country: "United Kingdom",
    dish: "Cottage Pie",
    shortDescription:
      "Rich minced beef topped with creamy mashed potatoes and baked until golden, pure British comfort.",
    spiceLevel: "none",
  },
  {
    countryCode: "IE",
    country: "Ireland",
    dish: "Irish Stew",
    shortDescription:
      "Potatoes, lamb, and onions simmered slowly, simple, hearty, and steeped in tradition.",
    spiceLevel: "none",
  },
  {
    countryCode: "PL",
    country: "Poland",
    dish: "Pierogi",
    shortDescription:
      "Soft dough pockets filled with potato, cheese, or fruit, boiled and served with caramelized onions.",
    spiceLevel: "none",
  },
  {
    countryCode: "RU",
    country: "Russia",
    dish: "Borscht",
    shortDescription:
      "Deep red beet soup with sour cream swirl, warming and earthy, soul food at its finest.",
    spiceLevel: "none",
  },
  {
    countryCode: "KR",
    country: "South Korea",
    dish: "Kimchi Jjigae",
    shortDescription:
            "A bubbling kimchi stew with tofu and pork, the bowl many Koreans crave when they miss home.",
    spiceLevel: "medium",
  },
  {
    countryCode: "TH",
    country: "Thailand",
    dish: "Jok",
    shortDescription:
      "Silky rice porridge with pork, ginger, and a soft egg, Thailand's favorite breakfast for cold mornings.",
    spiceLevel: "none",
  },
  {
    countryCode: "VN",
    country: "Vietnam",
    dish: "Pho",
    shortDescription:
      "Aromatic broth with rice noodles, fresh herbs, and beef, a soul-warming Vietnamese embrace.",
    spiceLevel: "mild",
  },
  {
    countryCode: "CN",
    country: "China",
    dish: "Congee",
    shortDescription:
      "Slow-cooked rice porridge enjoyed across China, simple, soothing, and served whenever comfort is needed.",
    spiceLevel: "none",
  },
  {
    countryCode: "BR",
    country: "Brazil",
    dish: "Feijoada",
    shortDescription:
      "Black bean stew with pork, served with rice and orange, the heart of Brazilian home cooking.",
    spiceLevel: "none",
  },
  {
    countryCode: "AR",
    country: "Argentina",
    dish: "Empanadas",
    shortDescription:
      "Golden pastry pockets filled with seasoned meat or cheese, handheld memories from every street corner.",
    spiceLevel: "none",
  },
  {
    countryCode: "TR",
    country: "Turkey",
    dish: "Manti",
    shortDescription:
      "Tiny filled dumplings topped with yogurt and spiced butter, labor of love wrapped in dough.",
    spiceLevel: "mild",
  },
  {
    countryCode: "LB",
    country: "Lebanon",
    dish: "Kibbeh",
    shortDescription:
      "Spiced bulgur and meat formed into oval shells, crispy outside, savory inside, shared with love.",
    spiceLevel: "mild",
  },
  {
    countryCode: "SE",
    country: "Sweden",
    dish: "Swedish Meatballs",
    shortDescription:
      "Tender meatballs in creamy sauce with lingonberries, cozy Nordic comfort in every forkful.",
    spiceLevel: "none",
  },
  {
    countryCode: "PT",
    country: "Portugal",
    dish: "Caldo Verde",
    shortDescription:
      "A comforting potato and kale soup with smoky chouriço, found in homes across Portugal.",
    spiceLevel: "none",
  },
  {
    countryCode: "BE",
    country: "Belgium",
    dish: "Stoofvlees",
    shortDescription:
        "Beef slowly braised in Belgian beer until tender, traditionally served with fries on chilly evenings.",
    spiceLevel: "none",
  },
  {
    countryCode: "PH",
    country: "Philippines",
    dish: "Adobo",
    shortDescription:
      "Chicken or pork braised in vinegar, soy, and garlic, the national dish that defines home.",
    spiceLevel: "mild",
  },
  {
    countryCode: "MY",
    country: "Malaysia",
    dish: "Nasi Lemak",
    shortDescription:
      "Coconut rice with sambal, anchovy, and egg, Malaysian breakfast that transcends the meal.",
    spiceLevel: "medium",
  },
  {
    countryCode: "ID",
    country: "Indonesia",
    dish: "Soto Ayam",
    shortDescription:
      "Turmeric chicken soup with vermicelli, egg, and lime, the everyday bowl Indonesians reach for when they're homesick.",
    spiceLevel: "mild",
  },
  {
    countryCode: "MA",
    country: "Morocco",
    dish: "Harira",
    shortDescription:
      "Tomato, lentil, and chickpea soup served throughout Morocco, especially during family gatherings.",
    spiceLevel: "mild",
  },
  {
    countryCode: "EG",
    country: "Egypt",
    dish: "Molokhia",
    shortDescription:
      "A silky green soup served over rice with chicken or rabbit, deeply nostalgic for many Egyptians.",
    spiceLevel: "mild",
  },
  {
    countryCode: "NG",
    country: "Nigeria",
    dish: "Jollof Rice",
    shortDescription:
      "Tomato-infused rice with peppers and spices, West African staple that brings people together.",
    spiceLevel: "medium",
  },
  {
    countryCode: "PE",
    country: "Peru",
    dish: "Ají de Gallina",
    shortDescription:
      "Shredded chicken in a creamy chili and walnut sauce, one of Peru's most beloved home-cooked meals.",
    spiceLevel: "mild",
  },
  {
    countryCode: "CL",
    country: "Chile",
    dish: "Pastel de Choclo",
    shortDescription:
      "Corn pie with meat filling and sweet corn topping, humble, rustic, purely Chilean comfort.",
    spiceLevel: "none",
  },
  {
    countryCode: "CO",
    country: "Colombia",
    dish: "Ajiaco",
    shortDescription:
      "Hearty potato and chicken soup with avocado and cream, Bogotá's soul in a bowl.",
    spiceLevel: "none",
  },
  {
    countryCode: "CU",
    country: "Cuba",
    dish: "Ropa Vieja",
    shortDescription:
      "Shredded beef stewed with peppers and tomatoes, Havana's most nostalgic, tender embrace.",
    spiceLevel: "none",
  },
  {
    countryCode: "NZ",
    country: "New Zealand",
    dish: "Mince and Cheese Pie",
    shortDescription:
      "Golden pastry packed with seasoned minced beef and melted cheese, New Zealand comfort at its best.",
    spiceLevel: "none",
  },
  {
    countryCode: "AU",
    country: "Australia",
    dish: "Meat Pie",
    shortDescription:
      "A flaky pastry filled with rich beef gravy, the snack Australians reach for on cold days.",
    spiceLevel: "none",
  },
  {
    countryCode: "TW",
    country: "Taiwan",
    dish: "Beef Noodle Soup",
    shortDescription:
      "Braised beef and noodles in rich, aromatic broth, Taipei's most beloved comfort in a bowl.",
    spiceLevel: "mild",
  },
  {
    countryCode: "GH",
    country: "Ghana",
    dish: "Fufu and Soup",
    shortDescription:
      "Pounded plantains served with rich palm soup, West African staple steeped in tradition.",
    spiceLevel: "medium",
  },
  {
    countryCode: "KE",
    country: "Kenya",
    dish: "Ugali with Sukuma Wiki",
    shortDescription:
      "Maize porridge with sautéed greens, simple, nourishing, the foundation of East African meals.",
    spiceLevel: "none",
  },
  {
    countryCode: "ZA",
    country: "South Africa",
    dish: "Bobotie",
    shortDescription:
      "Spiced mince with egg topping, baked until golden, Cape Dutch heritage on every plate.",
    spiceLevel: "mild",
  },
  {
    countryCode: "GE",
    country: "Georgia",
    dish: "Khachapuri",
    shortDescription:
      "Cheese-filled bread boat with egg on top, stretchy, rich, utterly addictive Georgian warmth.",
    spiceLevel: "none",
  },
  {
    countryCode: "IL",
    country: "Israel",
    dish: "Shakshuka",
    shortDescription:
      "Eggs poached in spiced tomato sauce, Middle Eastern comfort shared from one pan.",
    spiceLevel: "medium",
  },
  {
    countryCode: "CA",
    country: "Canada",
    dish: "Poutine",
    shortDescription:
      "Fries smothered in gravy and cheese curds, the late-night dish every Québécois home cook has their own version of.",
    spiceLevel: "none",
  },
  {
    countryCode: "MN",
    country: "Mongolia",
    dish: "Buuz",
    shortDescription:
      "Steamed dumplings filled with meat and onions, simple, warming, shared around the ger.",
    spiceLevel: "none",
  },
  {
    countryCode: "UZ",
    country: "Uzbekistan",
    dish: "Plov",
    shortDescription:
      "Rice cooked with meat, carrots, and spices in a cauldron, ancient Silk Road comfort food.",
    spiceLevel: "mild",
  },
  {
    countryCode: "PK",
    country: "Pakistan",
    dish: "Haleem",
    shortDescription:
      "Wheat, lentils, and slow-cooked meat pounded into a rich, warming porridge, Pakistan's answer to a cold winter evening.",
    spiceLevel: "mild",
  },
  {
    countryCode: "BD",
    country: "Bangladesh",
    dish: "Ilish Bhapa",
    shortDescription:
      "Hilsa fish steamed in a mustard-seed paste, a Bengali Sunday table centerpiece.",
    spiceLevel: "medium",
  },
  {
    countryCode: "LK",
    country: "Sri Lanka",
    dish: "Kottu Roti",
    shortDescription:
      "Chopped flatbread stir-fried with egg, vegetables, and curry, the rhythmic clatter of street-food comfort.",
    spiceLevel: "hot",
  },
  {
    countryCode: "NP",
    country: "Nepal",
    dish: "Momo",
    shortDescription:
      "Steamed dumplings filled with spiced meat or vegetables, served with a tangy dipping sauce.",
    spiceLevel: "mild",
  },
  {
    countryCode: "JM",
    country: "Jamaica",
    dish: "Ackee and Saltfish",
    shortDescription:
      "Salted cod flaked into buttery ackee fruit with onion and pepper, the breakfast every Jamaican grows up on.",
    spiceLevel: "mild",
  },
  {
    countryCode: "DO",
    country: "Dominican Republic",
    dish: "Sancocho",
    shortDescription:
      "Hearty meat and root vegetable stew simmered for hours, the dish that gathers the whole family.",
    spiceLevel: "mild",
  },
  {
    countryCode: "HT",
    country: "Haiti",
    dish: "Soup Joumou",
    shortDescription:
      "Pumpkin soup with beef and vegetables, made at home every New Year's Day, Haiti's dish of family and freedom.",
    spiceLevel: "mild",
  },
  {
    countryCode: "GT",
    country: "Guatemala",
    dish: "Pepián",
    shortDescription:
      "Toasted-spice meat stew with a rich pumpkin-seed base, one of Guatemala's oldest comfort recipes.",
    spiceLevel: "medium",
  },
  {
    countryCode: "CR",
    country: "Costa Rica",
    dish: "Gallo Pinto",
    shortDescription:
      "Rice and beans folded together with onion and cilantro, the gentle, everyday start to a Tico morning.",
    spiceLevel: "none",
  },
  {
    countryCode: "PA",
    country: "Panama",
    dish: "Carimañolas",
    shortDescription:
      "Golden yuca fritters stuffed with seasoned meat, a handheld snack that means home.",
    spiceLevel: "mild",
  },
  {
    countryCode: "RS",
    country: "Serbia",
    dish: "Ćevapi",
    shortDescription:
      "Grilled minced-meat fingers served with soft flatbread and onions, Balkan grill-house comfort.",
    spiceLevel: "mild",
  },
  {
    countryCode: "BA",
    country: "Bosnia and Herzegovina",
    dish: "Burek",
    shortDescription:
      "Spiraled phyllo pastry filled with meat or cheese, flaky, filling, best eaten with yogurt.",
    spiceLevel: "none",
  },
  {
    countryCode: "RO",
    country: "Romania",
    dish: "Sarmale",
    shortDescription:
      "Cabbage rolls stuffed with spiced pork and rice, slow-simmered, a holiday-table constant.",
    spiceLevel: "mild",
  },
  {
    countryCode: "ET",
    country: "Ethiopia",
    dish: "Doro Wat",
    shortDescription:
      "Chicken simmered for hours in a deep berbere-spiced stew, scooped up with injera around the family table.",
    spiceLevel: "hot",
  },
  {
    countryCode: "SN",
    country: "Senegal",
    dish: "Thieboudienne",
    shortDescription:
      "Fish and rice simmered with tomato and vegetables, Senegal's national dish, built for sharing.",
    spiceLevel: "medium",
  },
  {
    countryCode: "TN",
    country: "Tunisia",
    dish: "Couscous",
    shortDescription:
      "Steamed semolina piled with vegetables and harissa-spiced broth, a Friday-table tradition.",
    spiceLevel: "medium",
  },
  {
    countryCode: "IR",
    country: "Iran",
    dish: "Ghormeh Sabzi",
    shortDescription:
      "Slow-cooked herb stew with dried lime and kidney beans, an aromatic centerpiece of Persian family meals.",
    spiceLevel: "mild",
  },
  {
    countryCode: "SA",
    country: "Saudi Arabia",
    dish: "Kabsa",
    shortDescription:
      "Spiced rice piled with tender meat and toasted nuts, the dish at the center of every gathering.",
    spiceLevel: "mild",
  },
  {
    countryCode: "JO",
    country: "Jordan",
    dish: "Mansaf",
    shortDescription:
      "Lamb cooked in fermented dried yogurt over rice, Jordan's dish of hospitality and celebration.",
    spiceLevel: "none",
  },
  {
    countryCode: "YE",
    country: "Yemen",
    dish: "Saltah",
    shortDescription:
      "A bubbling stew topped with fenugreek froth and hot relish, Yemen's fiery, communal comfort.",
    spiceLevel: "hot",
  },
  {
    countryCode: "NO",
    country: "Norway",
    dish: "Fårikål",
    shortDescription:
      "Lamb and cabbage simmered together with whole peppercorns, Norway's simple, cherished autumn dish.",
    spiceLevel: "none",
  },
  {
    countryCode: "FI",
    country: "Finland",
    dish: "Karjalanpiirakka",
    shortDescription:
      "Rye pastries filled with creamy rice porridge, topped with egg butter, Karelian comfort in hand.",
    spiceLevel: "none",
  },
  {
    countryCode: "HU",
    country: "Hungary",
    dish: "Goulash",
    shortDescription:
      "Paprika-rich beef and vegetable stew, a smoky, warming bowl born from Hungarian herding kitchens.",
    spiceLevel: "medium",
  },
  {
    countryCode: "CH",
    country: "Switzerland",
    dish: "Cheese Fondue",
    shortDescription:
      "Melted alpine cheeses and white wine shared from one pot, slow, sociable, unmistakably cozy.",
    spiceLevel: "none",
  },
  {
    countryCode: "FJ",
    country: "Fiji",
    dish: "Kokoda",
    shortDescription:
      "Fish cured in coconut cream and citrus with chili, Fiji's answer to a warm-weather comfort dish.",
    spiceLevel: "mild",
  },
  {
    countryCode: "NL",
    country: "Netherlands",
    dish: "Stamppot",
    shortDescription:
      "Mashed potatoes folded with kale and smoked sausage, the taste of a cold Dutch evening.",
    spiceLevel: "none",
  },
  {
    countryCode: "DK",
    country: "Denmark",
    dish: "Frikadeller",
    shortDescription:
      "Pan-fried pork meatballs with potatoes and gravy, the dinner every Danish grandmother makes best.",
    spiceLevel: "none",
  },
  {
    countryCode: "IS",
    country: "Iceland",
    dish: "Plokkfiskur",
    shortDescription:
      "Flaked cod and potatoes in a creamy béchamel, humble fisherman's comfort on rye bread.",
    spiceLevel: "none",
  },
  {
    countryCode: "AT",
    country: "Austria",
    dish: "Kaiserschmarrn",
    shortDescription:
      "Fluffy shredded pancake dusted with sugar and plum compote, a sweet ending to any Austrian meal.",
    spiceLevel: "none",
  },
  {
    countryCode: "CZ",
    country: "Czech Republic",
    dish: "Svíčková",
    shortDescription:
      "Marinated beef in a velvety root-vegetable cream sauce, served with dumplings and a spoon of cranberry.",
    spiceLevel: "none",
  },
  {
    countryCode: "HR",
    country: "Croatia",
    dish: "Pašticada",
    shortDescription:
      "Beef slow-braised in wine and prunes until it falls apart, a Sunday centerpiece on the Dalmatian coast.",
    spiceLevel: "none",
  },
  {
    countryCode: "UA",
    country: "Ukraine",
    dish: "Varenyky",
    shortDescription:
      "Boiled dumplings filled with potato or cherry, topped with butter and sour cream, Ukrainian home cooking at its core.",
    spiceLevel: "none",
  },
  {
    countryCode: "BG",
    country: "Bulgaria",
    dish: "Banitsa",
    shortDescription:
      "Spiraled phyllo pastry layered with eggs and sirene cheese, the smell that fills a Bulgarian kitchen every morning.",
    spiceLevel: "none",
  },
  {
    countryCode: "SI",
    country: "Slovenia",
    dish: "Štruklji",
    shortDescription:
      "Rolled dough dumplings filled with tarragon-flecked cottage cheese, steamed until tender, a Slovenian family-table staple.",
    spiceLevel: "none",
  },
  {
    countryCode: "AL",
    country: "Albania",
    dish: "Tavë Kosi",
    shortDescription:
      "Baked lamb and rice under a tangy yogurt custard, Albania's dish of hospitality and celebration.",
    spiceLevel: "mild",
  },
  {
    countryCode: "SG",
    country: "Singapore",
    dish: "Laksa",
    shortDescription:
      "Rice noodles in a rich coconut curry broth with prawns and tofu puffs, Singapore's most-loved bowl.",
    spiceLevel: "medium",
  },
  {
    countryCode: "KH",
    country: "Cambodia",
    dish: "Amok",
    shortDescription:
      "Fish steamed in banana leaf with coconut and kroeung spice paste, Cambodia's gentle, fragrant signature dish.",
    spiceLevel: "mild",
  },
  {
    countryCode: "LA",
    country: "Laos",
    dish: "Larb",
    shortDescription:
      "Minced meat tossed with lime, herbs, and toasted rice powder, Laos's bright, communal centerpiece dish.",
    spiceLevel: "medium",
  },
  {
    countryCode: "MM",
    country: "Myanmar",
    dish: "Mohinga",
    shortDescription:
      "Catfish and rice noodle soup with lemongrass and banana stem, the breakfast that starts every day in Myanmar.",
    spiceLevel: "mild",
  },
  {
    countryCode: "KZ",
    country: "Kazakhstan",
    dish: "Beshbarmak",
    shortDescription:
      "Boiled meat over wide hand-cut noodles with onion broth, the Kazakh dish that gathers the whole family.",
    spiceLevel: "none",
  },
  {
    countryCode: "AM",
    country: "Armenia",
    dish: "Dolma",
    shortDescription:
      "Grape leaves wrapped around spiced rice and herbs, an Armenian dish passed down through generations.",
    spiceLevel: "mild",
  },
  {
    countryCode: "AE",
    country: "United Arab Emirates",
    dish: "Al Machboos",
    shortDescription:
      "Spiced rice layered with meat and dried lime, the Emirati dish at the center of every gathering.",
    spiceLevel: "mild",
  },
  {
    countryCode: "IQ",
    country: "Iraq",
    dish: "Masgouf",
    shortDescription:
      "Whole carp split and grilled slowly over an open fire, Iraq's ancient riverside comfort food.",
    spiceLevel: "mild",
  },
  {
    countryCode: "DZ",
    country: "Algeria",
    dish: "Chorba Frik",
    shortDescription:
      "Roasted green wheat simmered in a herby lamb broth, the soup that opens every Algerian iftar.",
    spiceLevel: "mild",
  },
  {
    countryCode: "TZ",
    country: "Tanzania",
    dish: "Nyama Choma",
    shortDescription:
      "Slow-grilled meat served simply with salt and kachumbari salad, Tanzania's favorite way to gather friends.",
    spiceLevel: "mild",
  },
  {
    countryCode: "RW",
    country: "Rwanda",
    dish: "Isombe",
    shortDescription:
      "Pounded cassava leaves simmered with eggplant and peanut, a nourishing Rwandan staple served with rice.",
    spiceLevel: "none",
  },
  {
    countryCode: "CM",
    country: "Cameroon",
    dish: "Ndolé",
    shortDescription:
      "Bitterleaf stewed with ground peanuts, fish, and beef, simmered low and slow for a Cameroonian Sunday lunch.",
    spiceLevel: "medium",
  },
  {
    countryCode: "CI",
    country: "Ivory Coast",
    dish: "Attiéké",
    shortDescription:
      "Fermented cassava couscous served with grilled fish and onions, Ivory Coast's everyday street-food comfort.",
    spiceLevel: "mild",
  },
  {
    countryCode: "VE",
    country: "Venezuela",
    dish: "Arepas",
    shortDescription:
      "Grilled cornmeal pockets split open and stuffed with cheese or shredded beef, Venezuela's dish for any hour of the day.",
    spiceLevel: "none",
  },
  {
    countryCode: "EC",
    country: "Ecuador",
    dish: "Locro de Papa",
    shortDescription:
      "Creamy potato soup with cheese, avocado, and a touch of achiote, Ecuadorian comfort in a bowl.",
    spiceLevel: "none",
  },
  {
    countryCode: "BO",
    country: "Bolivia",
    dish: "Salteñas",
    shortDescription:
      "Baked pastry pockets filled with a juicy, slightly sweet meat stew, Bolivia's beloved midmorning snack.",
    spiceLevel: "mild",
  },
  {
    countryCode: "UY",
    country: "Uruguay",
    dish: "Chivito",
    shortDescription:
      "A towering steak sandwich piled with ham, cheese, egg, and olives, Uruguay's answer to comfort food excess.",
    spiceLevel: "none",
  },
  {
    countryCode: "SV",
    country: "El Salvador",
    dish: "Pupusas",
    shortDescription:
      "Thick corn tortillas stuffed with cheese, beans, or pork, griddled and served with tangy cabbage slaw.",
    spiceLevel: "none",
  },
  {
    countryCode: "TT",
    country: "Trinidad and Tobago",
    dish: "Doubles",
    shortDescription:
      "Fried flatbread sandwiching curried chickpeas, Trinidad's favorite way to start a morning.",
    spiceLevel: "medium",
  },
  {
    countryCode: "BT",
    country: "Bhutan",
    dish: "Ema Datshi",
    shortDescription:
      "Chili peppers stewed in melted farmhouse cheese, Bhutan's fiery national dish and everyday staple.",
    spiceLevel: "hot",
  },
];

export const countryCount = comfortFoods.length;

const foodEmojiByCountryCode: Record<string, string> = {
  GR: "🍆",
  IT: "🍚",
  MX: "🥘",
  JP: "🍛",
  IN: "🥣",
  US: "🧀",
  FR: "🍲",
  ES: "🥘",
  DE: "🍖",
  GB: "🐟",
  IE: "🍲",
  PL: "🥟",
  RU: "🍲",
  KR: "🍚",
  TH: "🍜",
  VN: "🍜",
  CN: "🥣",
  BR: "🍲",
  AR: "🥟",
  TR: "🥟",
  LB: "🧆",
  SE: "🍖",
  PT: "🥪",
  BE: "🦪",
  PH: "🍗",
  MY: "🍚",
  ID: "🍜",
  MA: "🥘",
  EG: "🍚",
  NG: "🍚",
  PE: "🐟",
  CL: "🌽",
  CO: "🍲",
  CU: "🍖",
  NZ: "🍰",
  AU: "🍰",
  TW: "🍜",
  GH: "🍲",
  KE: "🍚",
  ZA: "🥘",
  GE: "🧀",
  IL: "🍳",
  CA: "🍟",
  MN: "🥟",
  UZ: "🍚",
  PK: "🥣",
  BD: "🐟",
  LK: "🍜",
  NP: "🥟",
  JM: "🐟",
  DO: "🍲",
  HT: "🎃",
  GT: "🍲",
  CR: "🍚",
  PA: "🥟",
  RS: "🍖",
  BA: "🥟",
  RO: "🥬",
  ET: "🍲",
  SN: "🐟",
  TN: "🍚",
  IR: "🍲",
  SA: "🍚",
  JO: "🍚",
  YE: "🍲",
  NO: "🍖",
  FI: "🥟",
  HU: "🍲",
  CH: "🧀",
  FJ: "🐟",
  NL: "🥔",
  DK: "🍖",
  IS: "🐟",
  AT: "🥞",
  CZ: "🍖",
  HR: "🍖",
  UA: "🥟",
  BG: "🧀",
  SI: "🥟",
  AL: "🍖",
  SG: "🍜",
  KH: "🐟",
  LA: "🥗",
  MM: "🍜",
  KZ: "🍖",
  AM: "🍇",
  AE: "🍚",
  IQ: "🐟",
  DZ: "🍲",
  TZ: "🍖",
  RW: "🥬",
  CM: "🥜",
  CI: "🐟",
  VE: "🫓",
  EC: "🥔",
  BO: "🥟",
  UY: "🥪",
  SV: "🫓",
  TT: "🥙",
  BT: "🧀",
};

export const getFoodEmoji = (countryCode: string): string => {
  return foodEmojiByCountryCode[countryCode] ?? "🍽️";
};

const countryCoordinatesByCode: Record<string, [number, number]> = {
  GR: [37.98, 23.73],
  IT: [41.9, 12.5],
  MX: [19.43, -99.13],
  JP: [35.68, 139.65],
  IN: [28.61, 77.21],
  US: [39.8, -98.6],
  FR: [48.85, 2.35],
  ES: [40.42, -3.7],
  DE: [52.52, 13.4],
  GB: [51.51, -0.13],
  IE: [53.35, -6.26],
  PL: [52.23, 21.01],
  RU: [55.75, 37.62],
  KR: [37.57, 126.98],
  TH: [13.75, 100.5],
  VN: [21.03, 105.85],
  CN: [39.9, 116.4],
  BR: [-15.79, -47.88],
  AR: [-34.6, -58.38],
  TR: [39.93, 32.86],
  LB: [33.89, 35.5],
  SE: [59.33, 18.07],
  PT: [38.72, -9.14],
  BE: [50.85, 4.35],
  PH: [14.6, 120.98],
  MY: [3.14, 101.69],
  ID: [-6.21, 106.85],
  MA: [34.02, -6.83],
  EG: [30.04, 31.24],
  NG: [9.08, 7.4],
  PE: [-12.05, -77.04],
  CL: [-33.45, -70.67],
  CO: [4.71, -74.07],
  CU: [23.11, -82.37],
  NZ: [-41.29, 174.78],
  AU: [-35.28, 149.13],
  TW: [25.03, 121.57],
  GH: [5.6, -0.19],
  KE: [-1.29, 36.82],
  ZA: [-25.75, 28.19],
  GE: [41.72, 44.79],
  IL: [31.77, 35.21],
  CA: [45.42, -75.7],
  MN: [47.92, 106.92],
  UZ: [41.3, 69.24],
  PK: [33.68, 73.05],
  BD: [23.81, 90.41],
  LK: [6.93, 79.85],
  NP: [27.72, 85.32],
  JM: [17.97, -76.79],
  DO: [18.49, -69.94],
  HT: [18.59, -72.31],
  GT: [14.63, -90.51],
  CR: [9.93, -84.08],
  PA: [8.98, -79.52],
  RS: [44.79, 20.45],
  BA: [43.86, 18.41],
  RO: [44.43, 26.1],
  ET: [9.03, 38.74],
  SN: [14.72, -17.47],
  TN: [36.81, 10.18],
  IR: [35.69, 51.39],
  SA: [24.71, 46.68],
  JO: [31.95, 35.93],
  YE: [15.37, 44.19],
  NO: [59.91, 10.75],
  FI: [60.17, 24.94],
  HU: [47.5, 19.04],
  CH: [46.95, 7.45],
  FJ: [-18.14, 178.44],
  NL: [52.37, 4.9],
  DK: [55.68, 12.57],
  IS: [64.15, -21.94],
  AT: [48.21, 16.37],
  CZ: [50.08, 14.44],
  HR: [45.81, 15.98],
  UA: [50.45, 30.52],
  BG: [42.7, 23.32],
  SI: [46.06, 14.51],
  AL: [41.33, 19.82],
  SG: [1.35, 103.82],
  KH: [11.56, 104.92],
  LA: [17.97, 102.63],
  MM: [16.87, 96.2],
  KZ: [51.17, 71.45],
  AM: [40.18, 44.51],
  AE: [24.45, 54.38],
  IQ: [33.31, 44.36],
  DZ: [36.75, 3.06],
  TZ: [-6.79, 39.21],
  RW: [-1.94, 30.06],
  CM: [3.87, 11.52],
  CI: [5.36, -4.01],
  VE: [10.48, -66.9],
  EC: [-0.23, -78.52],
  BO: [-16.5, -68.15],
  UY: [-34.9, -56.16],
  SV: [13.69, -89.22],
  TT: [10.65, -61.52],
  BT: [27.47, 89.64],
};

export const getCountryCoordinates = (countryCode: string): [number, number] => {
  return countryCoordinatesByCode[countryCode] ?? [0, 0];
};

export const spiceLevelOrder: SpiceLevel[] = ["none", "mild", "medium", "hot"];

export const spiceLevelLabels: Record<SpiceLevel, string> = {
  none: "No heat",
  mild: "Mild",
  medium: "Medium",
  hot: "Hot",
};

export const getSpiceLevelRank = (level: SpiceLevel): number => {
  return spiceLevelOrder.indexOf(level);
};

export const getDailyComfortFood = (date = new Date()): ComfortFood => {
  const localDateAsUtc = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  );

  const dayNumber = Math.floor(localDateAsUtc / 86_400_000);
  const index = dayNumber % comfortFoods.length;

  return comfortFoods[index];
};
