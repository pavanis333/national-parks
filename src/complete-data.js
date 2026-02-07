// COMPLETE LIST OF ALL 107 NATIONAL PARKS IN INDIA

export const allNationalParks = [
  // ANDAMAN & NICOBAR ISLANDS (9)
  { name: "Campbell Bay National Park", state: "Andaman & Nicobar", established: 1992, famous: "Part of Great Nicobar Biosphere Reserve", fauna: ["Crab-eating macaque", "Nicobar treeshrew"], features: ["Biosphere Reserve"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Galathea National Park", state: "Andaman & Nicobar", established: 1992, famous: "Giant robber crab, Nicobar pigeon", fauna: ["Giant robber crab", "Nicobar pigeon", "Megapode"], features: ["Galathea River"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Mahatma Gandhi Marine National Park", state: "Andaman & Nicobar", established: 1983, famous: "Marine biodiversity, Wandoor", fauna: ["Coral reefs", "Marine life"], features: ["Marine park"], importance: "MEDIUM", category: "marine" },
  { name: "Mount Harriet National Park", state: "Andaman & Nicobar", established: 1987, famous: "Important Bird Area, butterfly hotspot", fauna: ["Andaman wild pigs", "Saltwater crocodiles", "Robber crabs"], features: ["Bird diversity"], importance: "LOW", category: "biodiversity" },
  { name: "Rani Jhansi Marine National Park", state: "Andaman & Nicobar", established: 1996, famous: "Ritchie's Archipelago marine park", fauna: ["Marine species"], features: ["Marine park"], importance: "LOW", category: "marine" },
  { name: "Saddle Peak National Park", state: "Andaman & Nicobar", established: 1987, famous: "Kalpong Dam Reservoir", fauna: ["Various species"], features: ["Reservoir"], importance: "LOW", category: "biodiversity" },
  { name: "North Button Island National Park", state: "Andaman & Nicobar", established: 1987, famous: "Button Islands group", fauna: ["Island fauna"], features: ["Small island park"], importance: "LOW", category: "biodiversity" },
  { name: "Middle Button Island National Park", state: "Andaman & Nicobar", established: 1987, famous: "Button Islands group", fauna: ["Island fauna"], features: ["Small island park"], importance: "LOW", category: "biodiversity" },
  { name: "South Button Island National Park", state: "Andaman & Nicobar", established: 1987, famous: "Button Islands group", fauna: ["Island fauna"], features: ["Small island park"], importance: "LOW", category: "biodiversity" },

  // ANDHRA PRADESH (3)
  { name: "Papikonda National Park", state: "Andhra Pradesh", established: 2008, famous: "Godavari River, Important Bird Area", fauna: ["Royal Bengal Tiger", "Leopards", "Rusty-spotted cat", "King cobra"], features: ["BirdLife International IBA", "Godavari River"], importance: "MEDIUM", category: "tiger" },
  { name: "Rajiv Gandhi (Rameswaram) National Park", state: "Andhra Pradesh", established: 2005, famous: "Penna River region", fauna: ["Various species"], features: ["Penna River"], importance: "LOW", category: "biodiversity" },
  { name: "Sri Venkateswara National Park", state: "Andhra Pradesh", established: 1989, famous: "Tirumala, Seshachalam Hills", fauna: ["Yellow-throated bulbul", "White-rumped vulture"], features: ["Eastern Ghats"], importance: "MEDIUM", category: "biodiversity" },

  // ARUNACHAL PRADESH (2)
  { name: "Mouling National Park", state: "Arunachal Pradesh", established: 1986, famous: "Dihang-Dibang Biosphere Reserve", fauna: ["Takin", "Goral", "Red panda", "Bengal tiger"], features: ["Biosphere Reserve", "Siyom River"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Namdapha National Park", state: "Arunachal Pradesh", established: 1983, famous: "All four big cats, biodiversity hotspot", fauna: ["Tiger", "Leopard", "Snow leopard", "Clouded leopard", "Red panda"], features: ["All 4 big cats", "Mizoram-Manipur-Kachin rain forests"], importance: "HIGH", category: "biodiversity" },

  // ASSAM (8)
  { name: "Dibru-Saikhowa National Park", state: "Assam", established: 1999, famous: "Largest swamp forest in NE India", fauna: ["Feral horse", "Wild water buffalo", "Ganges river dolphin"], features: ["Swamp forest", "Brahmaputra River"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Kaziranga National Park", state: "Assam", established: 1974, famous: "One-horned rhinoceros, highest tiger density", fauna: ["One-horned rhino", "Bengal tiger", "Elephant"], features: ["UNESCO World Heritage Site", "Project Tiger"], importance: "HIGH", category: "unesco" },
  { name: "Manas National Park", state: "Assam", established: 1990, famous: "UNESCO site, tiger, elephant, rhino", fauna: ["Tiger", "Elephant", "One-horned rhino", "Pygmy hog"], features: ["UNESCO World Heritage Site", "Biosphere Reserve"], importance: "HIGH", category: "unesco" },
  { name: "Nameri National Park", state: "Assam", established: 1998, famous: "Project Tiger and Elephant", fauna: ["Tiger", "Elephant"], features: ["Project Tiger", "Project Elephant"], importance: "LOW", category: "tiger" },
  { name: "Orang National Park (Rajiv Gandhi)", state: "Assam", established: 1999, famous: "Mini Kaziranga, rhino habitat", fauna: ["One-horned rhino", "Pygmy hog"], features: ["Mini Kaziranga", "Rhino conservation"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Raimona National Park", state: "Assam", established: 2021, famous: "Newest park in Assam", fauna: ["Golden langur", "Elephant"], features: ["Recently established"], importance: "LOW", category: "biodiversity" },
  { name: "Dehing Patkai National Park", state: "Assam", established: 2004, famous: "Rainforest ecosystem", fauna: ["White-winged wood duck"], features: ["Rainforest"], importance: "LOW", category: "biodiversity" },

  // BIHAR (1)
  { name: "Valmiki National Park", state: "Bihar", established: 1990, famous: "Part of Project Tiger", fauna: ["Bengal tiger"], features: ["Project Tiger"], importance: "MEDIUM", category: "tiger" },

  // CHHATTISGARH (3)
  { name: "Indravati National Park", state: "Chhattisgarh", established: 1982, famous: "Wild water buffalo, Project Tiger", fauna: ["Wild water buffalo", "Tiger"], features: ["Project Tiger"], importance: "MEDIUM", category: "tiger" },
  { name: "Kanger Valley National Park", state: "Chhattisgarh", established: 1982, famous: "Limestone caves, bastar hill myna", fauna: ["Bastar hill myna"], features: ["Limestone caves"], importance: "LOW", category: "biodiversity" },
  { name: "Guru Ghasidas (Sanjay) National Park", state: "Chhattisgarh", established: 1981, famous: "Tiger reserve", fauna: ["Tiger"], features: ["Tiger reserve"], importance: "LOW", category: "tiger" },

  // GOA (1)
  { name: "Bhagwan Mahavir (Mollem) National Park", state: "Goa", established: 1978, famous: "Dudhsagar Falls", fauna: ["Bengal tiger", "Leopard"], features: ["Dudhsagar Falls"], importance: "MEDIUM", category: "biodiversity" },

  // GUJARAT (4)
  { name: "Gir National Park", state: "Gujarat", established: 1965, famous: "Only wild habitat of Asiatic Lions", fauna: ["Asiatic lion"], features: ["Only place for Asiatic lions"], importance: "HIGH", category: "unique" },
  { name: "Blackbuck National Park (Velavadar)", state: "Gujarat", established: 1976, famous: "Blackbuck antelope", fauna: ["Blackbuck"], features: ["Grassland ecosystem"], importance: "MEDIUM", category: "unique" },
  { name: "Marine National Park (Gulf of Kutch)", state: "Gujarat", established: 1982, famous: "First marine park of India", fauna: ["Coral reefs", "Marine life"], features: ["First marine park"], importance: "MEDIUM", category: "marine" },
  { name: "Vansda National Park", state: "Gujarat", established: 1979, famous: "Deciduous forests", fauna: ["Leopard", "Python"], features: ["Forest ecosystem"], importance: "LOW", category: "biodiversity" },

  // HARYANA (2)
  { name: "Sultanpur National Park", state: "Haryana", established: 1989, famous: "Bird sanctuary", fauna: ["Migratory birds"], features: ["Bird watching"], importance: "LOW", category: "biodiversity" },
  { name: "Kalesar National Park", state: "Haryana", established: 2003, famous: "Sal forests", fauna: ["Leopard", "Red jungle fowl"], features: ["Sal forests"], importance: "LOW", category: "biodiversity" },

  // HIMACHAL PRADESH (5)
  { name: "Great Himalayan National Park", state: "Himachal Pradesh", established: 1984, famous: "UNESCO site, snow leopard", fauna: ["Snow leopard", "Himalayan brown bear", "Blue sheep"], features: ["UNESCO World Heritage Site"], importance: "HIGH", category: "unesco" },
  { name: "Pin Valley National Park", state: "Himachal Pradesh", established: 1987, famous: "Cold desert, snow leopard", fauna: ["Snow leopard", "Siberian ibex"], features: ["Cold desert", "Spiti"], importance: "MEDIUM", category: "unique" },
  { name: "Khirganga National Park", state: "Himachal Pradesh", established: 2010, famous: "Hot springs", fauna: ["Himalayan species"], features: ["Hot springs"], importance: "LOW", category: "biodiversity" },
  { name: "Inderkilla National Park", state: "Himachal Pradesh", established: 2010, famous: "Western Himalayas", fauna: ["Musk deer"], features: ["Mountain ecosystem"], importance: "LOW", category: "biodiversity" },
  { name: "Simbalbara National Park", state: "Himachal Pradesh", established: 2010, famous: "Elephant corridor", fauna: ["Elephant", "Goral"], features: ["Elephant habitat"], importance: "LOW", category: "biodiversity" },

  // JAMMU & KASHMIR (4)
  { name: "Dachigam National Park", state: "Jammu & Kashmir", established: 1981, famous: "Hangul (Kashmir stag)", fauna: ["Hangul"], features: ["Critically endangered species"], importance: "HIGH", category: "endangered" },
  { name: "Hemis National Park", state: "Ladakh", established: 1981, famous: "Largest NP, snow leopard", fauna: ["Snow leopard", "Asiatic ibex"], features: ["Largest in South Asia", "High altitude"], importance: "HIGH", category: "unique" },
  { name: "Kishtwar National Park", state: "Jammu & Kashmir", established: 1981, famous: "Snow leopard, brown bear", fauna: ["Snow leopard", "Brown bear"], features: ["High altitude"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Salim Ali National Park", state: "Jammu & Kashmir", established: 1992, famous: "Bird diversity", fauna: ["Birds"], features: ["Ornithological importance"], importance: "LOW", category: "biodiversity" },

  // JHARKHAND (1)
  { name: "Betla National Park", state: "Jharkhand", established: 1986, famous: "Tiger reserve", fauna: ["Tiger", "Elephant"], features: ["Project Tiger"], importance: "MEDIUM", category: "tiger" },

  // KARNATAKA (5)
  { name: "Bandipur National Park", state: "Karnataka", established: 1974, famous: "Nilgiri Biosphere Reserve, tiger", fauna: ["Tiger", "Elephant", "Gaur"], features: ["Project Tiger", "Nilgiri BR"], importance: "HIGH", category: "tiger" },
  { name: "Nagarhole (Rajiv Gandhi) National Park", state: "Karnataka", established: 1988, famous: "Nilgiri BR, tiger, elephant", fauna: ["Tiger", "Elephant"], features: ["Nilgiri BR"], importance: "MEDIUM", category: "tiger" },
  { name: "Bannerghatta National Park", state: "Karnataka", established: 1974, famous: "Near Bangalore, biological park", fauna: ["Tiger", "Elephant"], features: ["Urban proximity"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Kudremukh National Park", state: "Karnataka", established: 1987, famous: "Western Ghats biodiversity", fauna: ["Lion-tailed macaque"], features: ["Western Ghats"], importance: "LOW", category: "biodiversity" },
  { name: "Anshi National Park", state: "Karnataka", established: 1987, famous: "Tiger reserve", fauna: ["Tiger", "Black panther"], features: ["Project Tiger"], importance: "LOW", category: "tiger" },

  // KERALA (6)
  { name: "Silent Valley National Park", state: "Kerala", established: 1984, famous: "No cicadas, lion-tailed macaque, 1970s movement", fauna: ["Lion-tailed macaque"], features: ["Nilgiri BR", "Conservation movement"], importance: "HIGH", category: "biodiversity" },
  { name: "Periyar National Park", state: "Kerala", established: 1982, famous: "Periyar Lake, elephant, tiger", fauna: ["Elephant", "Tiger"], features: ["Project Tiger", "Periyar Lake"], importance: "MEDIUM", category: "tiger" },
  { name: "Eravikulam National Park", state: "Kerala", established: 1978, famous: "Nilgiri Tahr", fauna: ["Nilgiri tahr"], features: ["Western Ghats"], importance: "HIGH", category: "endangered" },
  { name: "Anamudi Shola National Park", state: "Kerala", established: 2003, famous: "Shola forests", fauna: ["Nilgiri tahr"], features: ["Shola ecosystem"], importance: "LOW", category: "biodiversity" },
  { name: "Mathikettan Shola National Park", state: "Kerala", established: 2003, famous: "Shola forests", fauna: ["Elephant"], features: ["Shola ecosystem"], importance: "LOW", category: "biodiversity" },
  { name: "Pambadum Shola National Park", state: "Kerala", established: 2003, famous: "Shola forests", fauna: ["Gaur"], features: ["Shola ecosystem"], importance: "LOW", category: "biodiversity" },

  // MADHYA PRADESH (11) - MAXIMUM
  { name: "Kanha National Park", state: "Madhya Pradesh", established: 1955, famous: "Jungle Book inspiration, barasingha", fauna: ["Tiger", "Barasingha"], features: ["Project Tiger", "Jungle Book"], importance: "HIGH", category: "tiger" },
  { name: "Bandhavgarh National Park", state: "Madhya Pradesh", established: 1968, famous: "Highest tiger density", fauna: ["Bengal tiger"], features: ["Highest tiger density"], importance: "HIGH", category: "tiger" },
  { name: "Pench National Park", state: "Madhya Pradesh & Maharashtra", established: 1975, famous: "Jungle Book inspiration, shared between states", fauna: ["Tiger"], features: ["Project Tiger", "Interstate park"], importance: "MEDIUM", category: "tiger" },
  { name: "Satpura National Park", state: "Madhya Pradesh", established: 1981, famous: "Pachmarhi BR", fauna: ["Tiger", "Leopard"], features: ["Biosphere Reserve"], importance: "MEDIUM", category: "tiger" },
  { name: "Panna National Park", state: "Madhya Pradesh", established: 1981, famous: "UNESCO BR, tiger", fauna: ["Tiger", "Crocodile"], features: ["UNESCO BR"], importance: "MEDIUM", category: "tiger" },
  { name: "Madhav National Park", state: "Madhya Pradesh", established: 1958, famous: "George Castle", fauna: ["Deer species"], features: ["Historical significance"], importance: "LOW", category: "biodiversity" },
  { name: "Van Vihar National Park", state: "Madhya Pradesh", established: 1979, famous: "Urban park in Bhopal", fauna: ["Tiger", "Lion"], features: ["Urban park"], importance: "LOW", category: "biodiversity" },
  { name: "Mandla Plant Fossils National Park", state: "Madhya Pradesh", established: 1983, famous: "Plant fossils", fauna: ["None - fossil park"], features: ["Geological importance"], importance: "LOW", category: "unique" },
  { name: "Sanjay National Park", state: "Madhya Pradesh", established: 1981, famous: "Tiger reserve", fauna: ["Tiger"], features: ["Project Tiger"], importance: "LOW", category: "tiger" },
  { name: "Dinosaur Fossils National Park", state: "Madhya Pradesh", established: 2010, famous: "Dinosaur fossils", fauna: ["None - fossil park"], features: ["Paleontological importance"], importance: "LOW", category: "unique" },
  { name: "Omkareshwar National Park", state: "Madhya Pradesh", established: 2004, famous: "Narmada River", fauna: ["Various species"], features: ["River ecosystem"], importance: "LOW", category: "biodiversity" },

  // MAHARASHTRA (6)
  { name: "Tadoba Andhari National Park", state: "Maharashtra", established: 1955, famous: "Maharashtra's oldest, tiger", fauna: ["Tiger", "Leopard", "Sloth bear"], features: ["Oldest in Maharashtra"], importance: "HIGH", category: "tiger" },
  { name: "Sanjay Gandhi National Park", state: "Maharashtra", established: 1996, famous: "Mumbai city, Kanheri Caves", fauna: ["Leopard"], features: ["Urban park", "Kanheri Caves"], importance: "MEDIUM", category: "unique" },
  { name: "Navegaon National Park", state: "Maharashtra", established: 1975, famous: "Bird diversity", fauna: ["Birds"], features: ["Bird watching"], importance: "LOW", category: "biodiversity" },
  { name: "Gugamal National Park", state: "Maharashtra", established: 1975, famous: "Part of Melghat TR", fauna: ["Tiger"], features: ["Tiger reserve"], importance: "LOW", category: "tiger" },
  { name: "Chandoli National Park", state: "Maharashtra", established: 2004, famous: "Western Ghats", fauna: ["Tiger"], features: ["Project Tiger"], importance: "LOW", category: "tiger" },

  // MANIPUR (2)
  { name: "Keibul Lamjao National Park", state: "Manipur", established: 1977, famous: "World's only floating park, Sangai deer", fauna: ["Sangai (Manipur deer)"], features: ["Only floating NP", "Loktak Lake"], importance: "HIGH", category: "unique" },
  { name: "Sirohi National Park", state: "Manipur", established: 1982, famous: "Hill park", fauna: ["Various species"], features: ["Hill ecosystem"], importance: "LOW", category: "biodiversity" },

  // MEGHALAYA (2)
  { name: "Nokrek National Park", state: "Meghalaya", established: 1986, famous: "Nokrek BR, red panda", fauna: ["Red panda", "Elephant"], features: ["Biosphere Reserve"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Balphakram National Park", state: "Meghalaya", established: 1985, famous: "Land of eternal winds", fauna: ["Various species"], features: ["Unique landscape"], importance: "LOW", category: "biodiversity" },

  // MIZORAM (2)
  { name: "Murlen National Park", state: "Mizoram", established: 1991, famous: "Hoolock gibbon", fauna: ["Hoolock gibbon", "Tiger"], features: ["Primate habitat"], importance: "LOW", category: "biodiversity" },
  { name: "Phawngpui (Blue Mountain) National Park", state: "Mizoram", established: 1992, famous: "Highest peak in Mizoram", fauna: ["Various species"], features: ["Mountain park"], importance: "LOW", category: "biodiversity" },

  // NAGALAND (1)
  { name: "Ntangki National Park", state: "Nagaland", established: 1993, famous: "Hoolock gibbon, hornbill", fauna: ["Hoolock gibbon", "Hornbill"], features: ["Primate habitat"], importance: "LOW", category: "biodiversity" },

  // ODISHA (2)
  { name: "Simlipal National Park", state: "Odisha", established: 1980, famous: "Melanistic tigers, waterfalls", fauna: ["Black tiger", "Elephant"], features: ["Biosphere Reserve", "Waterfalls"], importance: "HIGH", category: "tiger" },
  { name: "Bhitarkanika National Park", state: "Odisha", established: 1998, famous: "Saltwater crocodiles, second largest mangrove", fauna: ["Saltwater crocodile"], features: ["Mangrove ecosystem"], importance: "MEDIUM", category: "mangrove" },

  // RAJASTHAN (5)
  { name: "Ranthambore National Park", state: "Rajasthan", established: 1980, famous: "Tiger sightings, Ranthambore Fort", fauna: ["Bengal tiger"], features: ["Project Tiger", "UNESCO fort"], importance: "HIGH", category: "tiger" },
  { name: "Sariska Tiger Reserve", state: "Rajasthan", established: 1982, famous: "Tiger reintroduction", fauna: ["Tiger"], features: ["Tiger reintroduction"], importance: "MEDIUM", category: "tiger" },
  { name: "Desert National Park", state: "Rajasthan", established: 1980, famous: "Great Indian Bustard, desert ecosystem", fauna: ["Great Indian Bustard"], features: ["Desert", "One of largest"], importance: "HIGH", category: "unique" },
  { name: "Keoladeo National Park", state: "Rajasthan", established: 1981, famous: "UNESCO site, bird sanctuary, Siberian cranes", fauna: ["Migratory birds"], features: ["UNESCO World Heritage Site", "Ramsar Site"], importance: "HIGH", category: "unesco" },
  { name: "Mukundra Hills National Park", state: "Rajasthan", established: 2006, famous: "Newest in Rajasthan", fauna: ["Tiger"], features: ["Recently established"], importance: "LOW", category: "tiger" },

  // SIKKIM (1)
  { name: "Khangchendzonga National Park", state: "Sikkim", established: 1977, famous: "UNESCO site, 25.14% of Sikkim, Mt. Khangchendzonga", fauna: ["Snow leopard", "Red panda"], features: ["UNESCO World Heritage Site", "Highest % coverage", "Mixed site"], importance: "HIGH", category: "unesco" },

  // TAMIL NADU (5)
  { name: "Gulf of Mannar Marine National Park", state: "Tamil Nadu", established: 1980, famous: "First Marine BR, coral reefs, 21 islands", fauna: ["Dugong", "Sea turtle"], features: ["First Marine BR", "Ramsar Site"], importance: "HIGH", category: "marine" },
  { name: "Guindy National Park", state: "Tamil Nadu", established: 1976, famous: "Chennai city, one of smallest", fauna: ["Blackbuck", "Spotted deer"], features: ["Urban park", "Smallest"], importance: "MEDIUM", category: "unique" },
  { name: "Mudumalai National Park", state: "Tamil Nadu", established: 1940, famous: "Nilgiri BR, tiger, elephant", fauna: ["Tiger", "Elephant"], features: ["Nilgiri BR"], importance: "MEDIUM", category: "tiger" },
  { name: "Mukurthi National Park", state: "Tamil Nadu", established: 1990, famous: "Nilgiri BR, Nilgiri tahr", fauna: ["Nilgiri tahr"], features: ["Nilgiri BR"], importance: "LOW", category: "biodiversity" },
  { name: "Indira Gandhi (Annamalai) National Park", state: "Tamil Nadu", established: 1989, famous: "Tiger, elephant", fauna: ["Tiger", "Elephant"], features: ["Western Ghats"], importance: "MEDIUM", category: "tiger" },

  // TELANGANA (3)
  { name: "Kasu Brahmananda Reddy National Park", state: "Telangana", established: 1994, famous: "Hyderabad urban park", fauna: ["Spotted deer"], features: ["Urban park"], importance: "LOW", category: "biodiversity" },
  { name: "Mahavir Harina Vanasthali National Park", state: "Telangana", established: 1994, famous: "Near Hyderabad", fauna: ["Blackbuck"], features: ["Near city"], importance: "LOW", category: "biodiversity" },
  { name: "Mrugavani National Park", state: "Telangana", established: 1994, famous: "Hyderabad proximity", fauna: ["Deer species"], features: ["Urban proximity"], importance: "LOW", category: "biodiversity" },

  // TRIPURA (2)
  { name: "Clouded Leopard National Park", state: "Tripura", established: 2007, famous: "Clouded leopard", fauna: ["Clouded leopard", "Spectacled monkey"], features: ["Clouded leopard habitat"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Bison (Rajbari) National Park", state: "Tripura", established: 2007, famous: "Indian bison", fauna: ["Indian bison (gaur)"], features: ["Gaur habitat"], importance: "LOW", category: "biodiversity" },

  // UTTAR PRADESH (1)
  { name: "Dudhwa National Park", state: "Uttar Pradesh", established: 1977, famous: "Swamp deer, tiger, Nepal border", fauna: ["Tiger", "Barasingha", "Hispid hare"], features: ["Project Tiger", "Nepal border"], importance: "MEDIUM", category: "tiger" },

  // UTTARAKHAND (6)
  { name: "Jim Corbett National Park", state: "Uttarakhand", established: 1936, famous: "First NP of India, Project Tiger first site", fauna: ["Bengal tiger", "Elephant"], features: ["First NP", "Project Tiger first"], importance: "HIGH", category: "historic" },
  { name: "Rajaji National Park", state: "Uttarakhand", established: 1983, famous: "Named after C. Rajagopalachari, elephant corridor", fauna: ["Elephant", "Tiger"], features: ["Three rivers"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Valley of Flowers National Park", state: "Uttarakhand", established: 1982, famous: "UNESCO site, alpine flowers", fauna: ["Snow leopard", "Musk deer"], features: ["UNESCO World Heritage Site", "Alpine meadows"], importance: "HIGH", category: "unesco" },
  { name: "Nanda Devi National Park", state: "Uttarakhand", established: 1982, famous: "UNESCO site, Nanda Devi peak", fauna: ["Snow leopard", "Himalayan black bear"], features: ["UNESCO World Heritage Site", "Biosphere Reserve"], importance: "HIGH", category: "unesco" },
  { name: "Gangotri National Park", state: "Uttarakhand", established: 1989, famous: "Gangotri Glacier, source of Ganges", fauna: ["Snow leopard"], features: ["Gangotri Glacier"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Govind Pashu Vihar National Park", state: "Uttarakhand", established: 1955, famous: "Snow leopard, brown bear", fauna: ["Snow leopard", "Brown bear"], features: ["High altitude"], importance: "MEDIUM", category: "biodiversity" },

  // WEST BENGAL (6)
  { name: "Sundarbans National Park", state: "West Bengal", established: 1984, famous: "UNESCO site, largest mangrove, swimming tigers", fauna: ["Royal Bengal tiger"], features: ["UNESCO World Heritage Site", "Ramsar Site", "Largest mangrove"], importance: "HIGH", category: "unesco" },
  { name: "Buxa Tiger Reserve", state: "West Bengal", established: 1983, famous: "Tiger reserve", fauna: ["Tiger", "Elephant"], features: ["Project Tiger"], importance: "LOW", category: "tiger" },
  { name: "Neora Valley National Park", state: "West Bengal", established: 1986, famous: "Red panda, clouded leopard", fauna: ["Red panda", "Clouded leopard"], features: ["Biodiversity hotspot"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Singalila National Park", state: "West Bengal", established: 1986, famous: "Highest NP in WB, red panda", fauna: ["Red panda"], features: ["Highest altitude in WB"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Gorumara National Park", state: "West Bengal", established: 1992, famous: "Indian rhinoceros", fauna: ["Indian rhinoceros"], features: ["Rhino conservation"], importance: "MEDIUM", category: "biodiversity" },
  { name: "Jaldapara National Park", state: "West Bengal", established: 2014, famous: "Indian rhinoceros, elephant", fauna: ["Indian rhinoceros", "Elephant"], features: ["Rhino habitat"], importance: "MEDIUM", category: "biodiversity" }
];

// Count verification
console.log(`Total parks loaded: ${allNationalParks.length}`);

// Export for backward compatibility
export const nationalParksData = allNationalParks;
