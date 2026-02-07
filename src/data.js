// Import the complete 107 parks dataset
import { allNationalParks } from './complete-data.js';

// Export for use in app
export const nationalParksData = allNationalParks;

// Quiz questions remain the same
export const quizQuestions = [
  {
    question: "Which is the first national park of India?",
    options: ["Kaziranga", "Jim Corbett", "Gir", "Bandipur"],
    correct: 1,
    explanation: "Jim Corbett National Park (established 1936) is the first national park of India, originally named Hailey National Park."
  },
  {
    question: "Which state has the maximum number of national parks?",
    options: ["Madhya Pradesh", "Uttarakhand", "Assam", "Karnataka"],
    correct: 0,
    explanation: "Madhya Pradesh has 11 national parks, the highest among all Indian states."
  },
  {
    question: "Which is the only place where Asiatic Lions are found in the wild?",
    options: ["Ranthambore", "Bandhavgarh", "Gir", "Kaziranga"],
    correct: 2,
    explanation: "Gir National Park in Gujarat is the only place where Asiatic Lions are found in the wild."
  },
  {
    question: "Which is the world's only floating national park?",
    options: ["Sundarbans", "Keibul Lamjao", "Bhitarkanika", "Gulf of Mannar"],
    correct: 1,
    explanation: "Keibul Lamjao National Park in Manipur, located on Loktak Lake, is the world's only floating national park."
  },
  {
    question: "How many national parks in India are UNESCO World Heritage Sites?",
    options: ["5", "6", "8", "10"],
    correct: 2,
    explanation: "8 national parks are UNESCO World Heritage Sites: Kaziranga, Manas, Keoladeo, Sundarbans, Nanda Devi, Valley of Flowers, Great Himalayan, and Khangchendzonga."
  },
  {
    question: "Which national park is famous for one-horned rhinoceros?",
    options: ["Jim Corbett", "Kaziranga", "Bandhavgarh", "Ranthambore"],
    correct: 1,
    explanation: "Kaziranga National Park in Assam is famous for one-horned rhinoceros and has the highest population of this species."
  },
  {
    question: "Sundarbans National Park is famous for which type of forest?",
    options: ["Tropical Rainforest", "Mangrove Forest", "Deciduous Forest", "Alpine Forest"],
    correct: 1,
    explanation: "Sundarbans has the largest mangrove forest in the world and is home to the Royal Bengal Tiger."
  },
  {
    question: "Which national park covers the highest percentage of its state's area?",
    options: ["Hemis (Ladakh)", "Khangchendzonga (Sikkim)", "Gir (Gujarat)", "Kaziranga (Assam)"],
    correct: 1,
    explanation: "Khangchendzonga National Park covers 25.14% of Sikkim's total area, the highest percentage."
  },
  {
    question: "Which park is known as the inspiration for Rudyard Kipling's 'The Jungle Book'?",
    options: ["Kanha", "Bandipur", "Nagarhole", "Simlipal"],
    correct: 0,
    explanation: "Kanha National Park in Madhya Pradesh inspired Rudyard Kipling's 'The Jungle Book'."
  },
  {
    question: "Where is the Hangul (Kashmir stag) found?",
    options: ["Hemis NP", "Dachigam NP", "Great Himalayan NP", "Pin Valley NP"],
    correct: 1,
    explanation: "Dachigam National Park in Jammu & Kashmir is home to the critically endangered Hangul or Kashmir stag."
  },
  {
    question: "Which state does NOT have any national park?",
    options: ["Bihar", "Punjab", "Haryana", "Goa"],
    correct: 1,
    explanation: "Punjab has no national parks. Delhi, Chandigarh, Puducherry, and Lakshadweep also don't have national parks."
  },
  {
    question: "Valley of Flowers National Park is located in which state?",
    options: ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"],
    correct: 1,
    explanation: "Valley of Flowers is in Uttarakhand, famous for alpine flowers and is a UNESCO World Heritage Site."
  },
  {
    question: "Which is the largest national park in South Asia?",
    options: ["Sundarbans", "Hemis", "Namdapha", "Desert NP"],
    correct: 1,
    explanation: "Hemis National Park in Ladakh is the largest national park in South Asia."
  },
  {
    question: "Silent Valley National Park is famous for which animal?",
    options: ["Lion-tailed macaque", "Red panda", "Snow leopard", "Asiatic lion"],
    correct: 0,
    explanation: "Silent Valley in Kerala is famous for the endangered Lion-tailed macaque."
  },
  {
    question: "Which national park has the highest density of Bengal tigers?",
    options: ["Ranthambore", "Bandhavgarh", "Kanha", "Jim Corbett"],
    correct: 1,
    explanation: "Bandhavgarh National Park in Madhya Pradesh has the highest density of Bengal tigers."
  },
  {
    question: "What is special about Keibul Lamjao National Park?",
    options: ["Highest altitude park", "Only floating park", "Largest park", "First marine park"],
    correct: 1,
    explanation: "Keibul Lamjao is the world's only floating national park, located on Loktak Lake in Manipur."
  },
  {
    question: "When was Project Tiger launched?",
    options: ["1970", "1972", "1973", "1975"],
    correct: 2,
    explanation: "Project Tiger was launched in 1973 to protect Bengal tigers, with Jim Corbett as the first reserve."
  },
  {
    question: "Which park is famous for Nilgiri Tahr?",
    options: ["Silent Valley", "Eravikulam", "Periyar", "Bandipur"],
    correct: 1,
    explanation: "Eravikulam National Park in Kerala is famous for the Nilgiri Tahr, an endangered mountain goat."
  },
  {
    question: "Total number of national parks in India (as of 2026)?",
    options: ["101", "105", "107", "110"],
    correct: 2,
    explanation: "India has 107 national parks covering 44,402.95 km², which is 1.35% of the country's geographical area."
  },
  {
    question: "Which was India's first Marine Biosphere Reserve?",
    options: ["Sundarbans", "Gulf of Mannar", "Mahatma Gandhi Marine NP", "Bhitarkanika"],
    correct: 1,
    explanation: "Gulf of Mannar Marine National Park in Tamil Nadu was India's first Marine Biosphere Reserve."
  },
  {
    question: "Sangai (brow-antlered deer) is found in which park?",
    options: ["Kaziranga", "Keibul Lamjao", "Manas", "Dudhwa"],
    correct: 1,
    explanation: "Sangai, the state animal of Manipur, is found only in Keibul Lamjao National Park."
  },
  {
    question: "Which park is located within Mumbai city limits?",
    options: ["Guindy NP", "Sanjay Gandhi NP", "KBR NP", "Van Vihar NP"],
    correct: 1,
    explanation: "Sanjay Gandhi National Park is located within Mumbai city limits and contains the historic Kanheri Caves."
  },
  {
    question: "Great Indian Bustard is found in which park?",
    options: ["Keoladeo NP", "Desert NP", "Ranthambore NP", "Sariska NP"],
    correct: 1,
    explanation: "The critically endangered Great Indian Bustard is found in Desert National Park, Rajasthan."
  },
  {
    question: "Which park has melanistic tigers (black tigers)?",
    options: ["Bandhavgarh", "Kanha", "Simlipal", "Pench"],
    correct: 2,
    explanation: "Simlipal National Park in Odisha is known for melanistic tigers, a rare genetic variation."
  },
  {
    question: "Namdapha National Park is unique because it has:",
    options: ["All four big cats", "Floating vegetation", "Highest altitude", "Coral reefs"],
    correct: 0,
    explanation: "Namdapha in Arunachal Pradesh is one of the few places in the world with all four big cats: tiger, leopard, snow leopard, and clouded leopard."
  },
  {
    question: "Which state has NO national park?",
    options: ["Bihar", "Punjab", "Jharkhand", "Goa"],
    correct: 1,
    explanation: "Punjab has no national parks. Other states without NPs: Delhi, Chandigarh, Puducherry, Lakshadweep, Dadra & Nagar Haveli and Daman & Diu."
  },
  {
    question: "Bhitarkanika National Park is famous for:",
    options: ["Tigers", "Saltwater crocodiles", "Snow leopards", "Asiatic lions"],
    correct: 1,
    explanation: "Bhitarkanika in Odisha is famous for saltwater crocodiles and is the second largest mangrove ecosystem after Sundarbans."
  },
  {
    question: "Which national park has the Gangotri Glacier?",
    options: ["Nanda Devi NP", "Valley of Flowers NP", "Gangotri NP", "Great Himalayan NP"],
    correct: 2,
    explanation: "Gangotri National Park in Uttarakhand has the Gangotri Glacier, which is the source of the Ganges River."
  },
  {
    question: "Mouling National Park is part of which Biosphere Reserve?",
    options: ["Nokrek BR", "Dihang-Dibang BR", "Great Nicobar BR", "Sundarbans BR"],
    correct: 1,
    explanation: "Mouling National Park in Arunachal Pradesh is part of the Dihang-Dibang Biosphere Reserve."
  },
  {
    question: "Which park is known as 'Mini Kaziranga'?",
    options: ["Manas NP", "Orang NP", "Dibru-Saikhowa NP", "Nameri NP"],
    correct: 1,
    explanation: "Orang National Park in Assam is known as 'Mini Kaziranga' due to similar landscape and fauna including one-horned rhinos."
  },
  {
    question: "Rajaji National Park is named after:",
    options: ["Rajiv Gandhi", "Rajendra Prasad", "C. Rajagopalachari", "Raja Ravi Varma"],
    correct: 2,
    explanation: "Rajaji National Park in Uttarakhand is named after C. Rajagopalachari, the last Governor-General of India."
  },
  {
    question: "Which national park has Kanheri Caves?",
    options: ["Sanjay Gandhi NP", "Tadoba NP", "Bandhavgarh NP", "Kanha NP"],
    correct: 0,
    explanation: "Sanjay Gandhi National Park in Mumbai contains the historic Kanheri Caves dating back to 1st century BCE."
  },
  {
    question: "Satpura National Park is part of which Biosphere Reserve?",
    options: ["Nilgiri BR", "Pachmarhi BR", "Simlipal BR", "Nanda Devi BR"],
    correct: 1,
    explanation: "Satpura National Park in Madhya Pradesh is part of the Pachmarhi Biosphere Reserve."
  },
  {
    question: "Which is India's first Marine Biosphere Reserve?",
    options: ["Sundarbans", "Gulf of Mannar", "Bhitarkanika", "Gulf of Kutch"],
    correct: 1,
    explanation: "Gulf of Mannar in Tamil Nadu was India's first Marine Biosphere Reserve, established in 1989."
  },
  {
    question: "Dibru-Saikhowa National Park is famous for:",
    options: ["Desert ecosystem", "Swamp forest", "Alpine meadows", "Coral reefs"],
    correct: 1,
    explanation: "Dibru-Saikhowa in Assam is the largest swamp forest in North-East India."
  },
  {
    question: "Which park has the highest percentage coverage of its state's area?",
    options: ["Hemis (Ladakh)", "Khangchendzonga (Sikkim)", "Gir (Gujarat)", "Sundarbans (WB)"],
    correct: 1,
    explanation: "Khangchendzonga NP covers 25.14% of Sikkim's area, the highest percentage among all states."
  },
  {
    question: "Bandhavgarh Fort is located in which national park?",
    options: ["Kanha", "Bandhavgarh", "Pench", "Satpura"],
    correct: 1,
    explanation: "Bandhavgarh National Park in MP contains the historic Bandhavgarh Fort."
  },
  {
    question: "Which national park is located in cold desert area?",
    options: ["Desert NP", "Pin Valley NP", "Great Himalayan NP", "Hemis NP"],
    correct: 1,
    explanation: "Pin Valley National Park in Himachal Pradesh is located in the cold desert area of Spiti valley."
  },
  {
    question: "Campbell Bay National Park is part of which Biosphere Reserve?",
    options: ["Nilgiri BR", "Great Nicobar BR", "Nokrek BR", "Gulf of Mannar BR"],
    correct: 1,
    explanation: "Campbell Bay NP in Andaman & Nicobar is part of Great Nicobar Biosphere Reserve."
  },
  {
    question: "Which endangered deer is found in Keibul Lamjao NP?",
    options: ["Barasingha", "Sangai", "Musk deer", "Hangul"],
    correct: 1,
    explanation: "Sangai (Manipur brow-antlered deer), the state animal of Manipur, is found only in Keibul Lamjao NP."
  },
  {
    question: "Periyar National Park has which famous lake?",
    options: ["Dal Lake", "Loktak Lake", "Periyar Lake", "Wular Lake"],
    correct: 2,
    explanation: "Periyar National Park in Kerala has the famous Periyar Lake."
  },
  {
    question: "Which act was enacted to protect wildlife in India?",
    options: ["Wildlife Protection Act 1972", "Forest Conservation Act 1980", "Environment Protection Act 1986", "Biodiversity Act 2002"],
    correct: 0,
    explanation: "The Wildlife Protection Act was enacted in 1972 to protect wildlife and their habitats in India."
  },
  {
    question: "Indravati National Park is located in:",
    options: ["Odisha", "Chhattisgarh", "Madhya Pradesh", "Maharashtra"],
    correct: 1,
    explanation: "Indravati National Park is in Chhattisgarh and is known for wild water buffalo."
  },
  {
    question: "Which national park is closest to Bangalore?",
    options: ["Bandipur", "Nagarhole", "Bannerghatta", "Kudremukh"],
    correct: 2,
    explanation: "Bannerghatta National Park is located near Bangalore and includes a biological park."
  },
  {
    question: "Valmiki National Park is India's only national park in:",
    options: ["Bihar", "Jharkhand", "Odisha", "West Bengal"],
    correct: 0,
    explanation: "Valmiki is the only national park in Bihar, part of Project Tiger."
  },
  {
    question: "Which park is famous for Nilgiri Langur?",
    options: ["Silent Valley", "Periyar", "Eravikulam", "Mudumalai"],
    correct: 0,
    explanation: "Silent Valley National Park in Kerala is known for Nilgiri Langur and Lion-tailed Macaque."
  },
  {
    question: "Betla National Park is located in:",
    options: ["Bihar", "Jharkhand", "Chhattisgarh", "Odisha"],
    correct: 1,
    explanation: "Betla National Park is in Jharkhand and is part of Palamau Tiger Reserve."
  },
  {
    question: "Which is the newest UNESCO World Heritage national park in India?",
    options: ["Khangchendzonga", "Great Himalayan", "Valley of Flowers", "Manas"],
    correct: 0,
    explanation: "Khangchendzonga NP in Sikkim became a UNESCO site in 2016, the most recent addition."
  },
  {
    question: "Guru Ghasidas National Park is also known as:",
    options: ["Kanger Valley NP", "Indravati NP", "Sanjay NP", "Achanakmar NP"],
    correct: 2,
    explanation: "Guru Ghasidas NP in Chhattisgarh is also known as Sanjay National Park."
  },
  {
    question: "Which river flows through Kaziranga National Park?",
    options: ["Ganges", "Brahmaputra", "Godavari", "Yamuna"],
    correct: 1,
    explanation: "The Brahmaputra River flows through Kaziranga National Park in Assam."
  },
  {
    question: "Mudumalai National Park is part of which Biosphere Reserve?",
    options: ["Nilgiri BR", "Western Ghats BR", "Pachmarhi BR", "Agasthyamalai BR"],
    correct: 0,
    explanation: "Mudumalai NP in Tamil Nadu is part of the Nilgiri Biosphere Reserve."
  },
  {
    question: "Which national park has Dudhsagar Falls?",
    options: ["Bandipur", "Bhagwan Mahavir", "Periyar", "Silent Valley"],
    correct: 1,
    explanation: "Bhagwan Mahavir (Mollem) National Park in Goa has the famous Dudhsagar Falls."
  },
  {
    question: "Blackbuck National Park (Velavadar) is located in:",
    options: ["Rajasthan", "Gujarat", "Maharashtra", "Madhya Pradesh"],
    correct: 1,
    explanation: "Blackbuck NP is in Gujarat and is famous for the Blackbuck antelope."
  },
  {
    question: "Which park is famous for Coconut Crab (Robber Crab)?",
    options: ["Campbell Bay", "Galathea", "Mount Harriet", "Mahatma Gandhi Marine"],
    correct: 1,
    explanation: "Galathea National Park in Andaman & Nicobar is known for the Giant Robber Crab."
  },
  {
    question: "Panna National Park is a UNESCO Biosphere Reserve in:",
    options: ["Rajasthan", "Madhya Pradesh", "Chhattisgarh", "Maharashtra"],
    correct: 1,
    explanation: "Panna NP in Madhya Pradesh is a UNESCO Biosphere Reserve and tiger reserve."
  },
  {
    question: "Which is the only national park in Sikkim?",
    options: ["Khangchendzonga", "Singalila", "Neora Valley", "Namdapha"],
    correct: 0,
    explanation: "Khangchendzonga is the only national park in Sikkim and covers 25.14% of the state."
  },
  {
    question: "Govind Pashu Vihar National Park is in:",
    options: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Sikkim"],
    correct: 1,
    explanation: "Govind Pashu Vihar NP is in Uttarakhand, known for snow leopards and brown bears."
  },
  {
    question: "Which park has the Joranda and Barehipani waterfalls?",
    options: ["Simlipal", "Bhitarkanika", "Satpura", "Kanha"],
    correct: 0,
    explanation: "Simlipal National Park in Odisha has Joranda and Barehipani waterfalls."
  },
  {
    question: "Anshi National Park is located in:",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    correct: 1,
    explanation: "Anshi NP is in Karnataka and is known for black panthers and tigers."
  },
  {
    question: "Which is the smallest national park by area in India?",
    options: ["Guindy NP", "South Button Island NP", "KBR NP", "Van Vihar NP"],
    correct: 1,
    explanation: "South Button Island NP in Andaman & Nicobar is one of the smallest national parks."
  },
  {
    question: "Nokrek National Park is known for:",
    options: ["Tigers", "Red Panda", "Asiatic Lions", "One-horned Rhino"],
    correct: 1,
    explanation: "Nokrek NP in Meghalaya, part of Nokrek Biosphere Reserve, is known for Red Pandas."
  },
  {
    question: "Which park has the highest density of Asiatic Lions?",
    options: ["Gir", "Ranthambore", "Bandhavgarh", "Kanha"],
    correct: 0,
    explanation: "Gir National Park in Gujarat is the only place where Asiatic Lions are found in the wild."
  },
  {
    question: "Papikonda National Park is located along which river?",
    options: ["Krishna", "Godavari", "Cauvery", "Mahanadi"],
    correct: 1,
    explanation: "Papikonda NP in Andhra Pradesh is located along the Godavari River."
  },
  {
    question: "Which national park is famous for Himalayan Tahr?",
    options: ["Eravikulam", "Great Himalayan", "Nanda Devi", "Valley of Flowers"],
    correct: 0,
    explanation: "Eravikulam NP in Kerala is famous for the Nilgiri Tahr (also called Nilgiri Ibex)."
  },
  {
    question: "Kishtwar National Park is located in:",
    options: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Ladakh"],
    correct: 2,
    explanation: "Kishtwar NP is in Jammu & Kashmir, known for snow leopards and brown bears."
  },
  {
    question: "Which park has Kalpong Dam Reservoir?",
    options: ["Campbell Bay", "Saddle Peak", "Mount Harriet", "Galathea"],
    correct: 1,
    explanation: "Saddle Peak National Park in Andaman & Nicobar has the Kalpong Dam Reservoir."
  },
  {
    question: "Clouded Leopard National Park is in:",
    options: ["Tripura", "Mizoram", "Nagaland", "Manipur"],
    correct: 0,
    explanation: "Clouded Leopard NP in Tripura is named after the clouded leopard found there."
  },
  {
    question: "Which is the largest national park in Madhya Pradesh?",
    options: ["Kanha", "Bandhavgarh", "Pench", "Satpura"],
    correct: 0,
    explanation: "Kanha National Park is one of the largest in Madhya Pradesh at 940 km²."
  },
  {
    question: "Ntangki National Park is famous for:",
    options: ["Tigers", "Hoolock Gibbon", "Snow Leopards", "Rhinos"],
    correct: 1,
    explanation: "Ntangki NP in Nagaland is known for Hoolock Gibbons and hornbills."
  },
  {
    question: "Which park is known for Stump-tailed Macaque?",
    options: ["Namdapha", "Kaziranga", "Manas", "Dibru-Saikhowa"],
    correct: 0,
    explanation: "Namdapha NP in Arunachal Pradesh is home to various macaque species including stump-tailed macaque."
  },
  {
    question: "Navegaon National Park is known for:",
    options: ["Tigers", "Bird diversity", "Rhinos", "Elephants"],
    correct: 1,
    explanation: "Navegaon NP in Maharashtra is known for its rich bird diversity."
  },
  {
    question: "Which park has the Noa Dihing River?",
    options: ["Kaziranga", "Namdapha", "Manas", "Dibru-Saikhowa"],
    correct: 1,
    explanation: "Namdapha National Park in Arunachal Pradesh has the Noa Dihing River."
  },
  {
    question: "Mandla Plant Fossils National Park is unique for:",
    options: ["Living plants", "Plant fossils", "Animal fossils", "Marine life"],
    correct: 1,
    explanation: "Mandla Plant Fossils NP in MP is unique for its ancient plant fossils of geological significance."
  },
  {
    question: "Which state has Anamudi Shola, Mathikettan Shola, and Pambadum Shola National Parks?",
    options: ["Karnataka", "Kerala", "Tamil Nadu", "Andhra Pradesh"],
    correct: 1,
    explanation: "All three Shola National Parks are in Kerala, known for Shola forest ecosystems."
  },
  {
    question: "Indira Gandhi (Annamalai) National Park is in:",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    correct: 1,
    explanation: "Indira Gandhi (Annamalai) NP is in Tamil Nadu, part of Western Ghats biodiversity."
  },
  {
    question: "Which park is famous for Gaur (Indian Bison)?",
    options: ["Bandipur", "Gir", "Kaziranga", "Sundarbans"],
    correct: 0,
    explanation: "Bandipur NP in Karnataka is known for Gaur (Indian Bison), tigers, and elephants."
  },
  {
    question: "Phawngpui National Park is also known as:",
    options: ["Blue Mountain NP", "Red Mountain NP", "Green Mountain NP", "White Mountain NP"],
    correct: 0,
    explanation: "Phawngpui NP in Mizoram is also known as Blue Mountain National Park."
  },
  {
    question: "Which park has the Siyom River?",
    options: ["Mouling", "Namdapha", "Kaziranga", "Manas"],
    correct: 0,
    explanation: "Mouling National Park in Arunachal Pradesh has the Siyom River."
  },
  {
    question: "Salim Ali National Park is named after:",
    options: ["A freedom fighter", "An ornithologist", "A king", "A saint"],
    correct: 1,
    explanation: "Salim Ali NP in J&K is named after Dr. Salim Ali, the famous Indian ornithologist and naturalist."
  },
  {
    question: "Which is the newest national park established in Assam?",
    options: ["Kaziranga", "Manas", "Raimona", "Orang"],
    correct: 2,
    explanation: "Raimona National Park, established in 2021, is the newest national park in Assam."
  },
  {
    question: "Kudremukh National Park is in:",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    correct: 1,
    explanation: "Kudremukh NP is in Karnataka, part of the Western Ghats biodiversity hotspot."
  },
  {
    question: "Which park is famous for Hispid Hare?",
    options: ["Kaziranga", "Dudhwa", "Manas", "Valmiki"],
    correct: 1,
    explanation: "Dudhwa NP in Uttar Pradesh is one of the few places where the endangered Hispid Hare is found."
  },
  {
    question: "Balphakram National Park is known as:",
    options: ["Land of eternal winds", "Valley of flowers", "Land of red pandas", "Tiger land"],
    correct: 0,
    explanation: "Balphakram NP in Meghalaya is known as the 'Land of eternal winds'."
  },
  {
    question: "Which river flows through Papikonda National Park?",
    options: ["Krishna", "Godavari", "Cauvery", "Tungabhadra"],
    correct: 1,
    explanation: "The Godavari River flows through Papikonda NP in Andhra Pradesh."
  },
  {
    question: "Simbalbara National Park is known for:",
    options: ["Tigers", "Elephant corridor", "Snow leopards", "Rhinos"],
    correct: 1,
    explanation: "Simbalbara NP in Himachal Pradesh is known for being an elephant corridor and habitat."
  },
  {
    question: "Which national park has coral reefs and 21 islands?",
    options: ["Mahatma Gandhi Marine NP", "Gulf of Mannar Marine NP", "Marine NP Gulf of Kutch", "Sundarbans NP"],
    correct: 1,
    explanation: "Gulf of Mannar Marine NP in Tamil Nadu has coral reefs and comprises 21 islands."
  },
  {
    question: "Mukundra Hills National Park is in:",
    options: ["Madhya Pradesh", "Rajasthan", "Gujarat", "Maharashtra"],
    correct: 1,
    explanation: "Mukundra Hills (Darrah) NP is the newest tiger reserve in Rajasthan, established in 2006."
  },
  {
    question: "Which park is famous for Wild Water Buffalo?",
    options: ["Kaziranga", "Dibru-Saikhowa", "Both A and B", "Manas"],
    correct: 2,
    explanation: "Both Kaziranga and Dibru-Saikhowa in Assam are known for Wild Water Buffalo."
  },
  {
    question: "Kanger Valley National Park is known for:",
    options: ["Tigers", "Limestone caves", "Mangroves", "Coral reefs"],
    correct: 1,
    explanation: "Kanger Valley NP in Chhattisgarh is famous for its limestone caves and unique geology."
  },
  {
    question: "Which is the only national park in Ladakh?",
    options: ["Hemis", "Dachigam", "Kishtwar", "Great Himalayan"],
    correct: 0,
    explanation: "Hemis is the only national park in Ladakh and the largest in South Asia."
  },
  {
    question: "Omkareshwar National Park is located along which river?",
    options: ["Ganges", "Narmada", "Yamuna", "Betwa"],
    correct: 1,
    explanation: "Omkareshwar NP in Madhya Pradesh is located along the Narmada River."
  },
  {
    question: "Which park has Dinosaur fossils?",
    options: ["Mandla Plant Fossils NP", "Dinosaur Fossils NP", "Kanha NP", "Bandhavgarh NP"],
    correct: 1,
    explanation: "Dinosaur Fossils National Park (Mandla) in MP preserves important dinosaur fossil sites."
  },
  {
    question: "Jaldapara National Park is famous for:",
    options: ["Tigers", "Indian Rhinoceros", "Asiatic Lions", "Snow Leopards"],
    correct: 1,
    explanation: "Jaldapara NP in West Bengal is known for Indian Rhinoceros and elephants."
  },
  {
    question: "Which three national parks are on Button Islands?",
    options: ["North, South, Middle Button Island NPs", "Great, Little, Middle Nicobar NPs", "Ross, Havelock, Neil Island NPs", "Car, Katchal, Nancowry NPs"],
    correct: 0,
    explanation: "North Button, Middle Button, and South Button Island National Parks are in Andaman & Nicobar."
  },
  {
    question: "Marine National Park in Gulf of Kutch was India's first:",
    options: ["Tiger Reserve", "Marine National Park", "Biosphere Reserve", "Ramsar Site"],
    correct: 1,
    explanation: "Marine National Park in Gulf of Kutch, Gujarat, was India's first marine national park."
  },
  {
    question: "Which park is famous for Spectacled Monkey?",
    options: ["Clouded Leopard NP", "Namdapha NP", "Manas NP", "Nokrek NP"],
    correct: 0,
    explanation: "Clouded Leopard NP in Tripura is known for clouded leopards and spectacled monkeys."
  },
  {
    question: "Bison (Rajbari) National Park is in:",
    options: ["Manipur", "Mizoram", "Tripura", "Nagaland"],
    correct: 2,
    explanation: "Bison (Rajbari) NP in Tripura is named after the Indian Bison (Gaur) found there."
  },
  {
    question: "Which park has the Penna River?",
    options: ["Sri Venkateswara NP", "Rajiv Gandhi (Rameswaram) NP", "Papikonda NP", "Nagarhole NP"],
    correct: 1,
    explanation: "Rajiv Gandhi (Rameswaram) National Park in Andhra Pradesh has the Penna River."
  },
  {
    question: "Dehing Patkai National Park is known for:",
    options: ["Desert", "Rainforest", "Mangroves", "Alpine meadows"],
    correct: 1,
    explanation: "Dehing Patkai NP in Assam is known for its rainforest ecosystem and white-winged wood duck."
  },
  {
    question: "Which park in Telangana is located in Hyderabad?",
    options: ["KBR NP", "Mahavir Harina Vanasthali NP", "Mrugavani NP", "All of the above"],
    correct: 3,
    explanation: "All three Telangana national parks (KBR, Mahavir Harina Vanasthali, and Mrugavani) are in or near Hyderabad."
  },
  {
    question: "Consider the following statements about National Parks in India:\n1. They fall under IUCN Category II protection\n2. Private rights can exist within National Parks\n3. Changes to boundaries require National Board approval\nWhich is/are correct?",
    options: ["1 and 3 only", "2 and 3 only", "1 only", "All of the above"],
    correct: 0,
    explanation: "Statements 1 and 3 are correct. National Parks are IUCN Category II and boundary changes need National Board approval. Unlike sanctuaries, NO private rights exist in National Parks."
  },
  {
    question: "Which National Park was established in 2021, making it one of India's newest?",
    options: ["Raimona NP", "Mukundra Hills NP", "Dehing Patkai NP", "Kuno NP"],
    correct: 0,
    explanation: "Raimona National Park in Assam was established in 2021, making it one of the newest NPs in India."
  },
  {
    question: "Inderkilla and Khirganga National Parks are located in:",
    options: ["Uttarakhand", "Jammu & Kashmir", "Himachal Pradesh", "Sikkim"],
    correct: 2,
    explanation: "Both Inderkilla and Khirganga National Parks are in Himachal Pradesh, established in 2010."
  },
  {
    question: "Consider the following pairs:\n1. Kuno NP - Asiatic Lion reintroduction\n2. Sariska NP - Tiger reintroduction\n3. Gir NP - Tiger conservation\nWhich is/are correctly matched?",
    options: ["1 and 2 only", "2 and 3 only", "1 only", "All of the above"],
    correct: 0,
    explanation: "Kuno is being prepared for Asiatic Lion reintroduction. Sariska had successful tiger reintroduction. Gir is for Asiatic Lions, not tigers."
  },
  {
    question: "Murlen National Park is located in:",
    options: ["Manipur", "Mizoram", "Nagaland", "Tripura"],
    correct: 1,
    explanation: "Murlen National Park is in Mizoram, known for Hoolock gibbons."
  },
  {
    question: "Which Act gave state governments authority to create National Parks?",
    options: ["Forest Conservation Act 1980", "Wildlife Protection Act 1972", "Environment Protection Act 1986", "Biological Diversity Act 2002"],
    correct: 1,
    explanation: "The Wildlife Protection Act of 1972 gave state governments authority to create national parks."
  },
  {
    question: "Kalesar National Park is located in:",
    options: ["Punjab", "Haryana", "Himachal Pradesh", "Uttarakhand"],
    correct: 1,
    explanation: "Kalesar NP in Haryana (established 2003) is known for Sal forests."
  },
  {
    question: "Which of the following is/are Marine National Parks?\n1. Gulf of Mannar\n2. Gulf of Kutch\n3. Mahatma Gandhi Marine NP\n4. Sundarbans",
    options: ["1, 2 and 3 only", "All of the above", "1 and 2 only", "1, 2, 3 and 4"],
    correct: 3,
    explanation: "All four are marine/coastal parks. Sundarbans has both mangrove forests and marine ecosystems."
  },
  {
    question: "Shola forests are found in which National Parks?",
    options: ["Anamudi, Mathikettan, Pambadum in Kerala", "Silent Valley, Periyar in Kerala", "Bandipur, Nagarhole in Karnataka", "Mudumalai, Mukurthi in Tamil Nadu"],
    correct: 0,
    explanation: "Shola forests are unique to high-altitude tropical montane forests found in Anamudi Shola, Mathikettan Shola, and Pambadum Shola NPs in Kerala."
  },
  {
    question: "Sirohi (also called Shiroi) National Park in Manipur is famous for:",
    options: ["Floating vegetation", "Sangai deer", "Shirui Lily", "Red Panda"],
    correct: 2,
    explanation: "Sirohi/Shiroi NP in Manipur is famous for the rare Shirui Lily found only there."
  },
  {
    question: "Consider the following about Project Tiger (1973):\n1. Jim Corbett was the first tiger reserve\n2. Launched in 1972\n3. Currently has 50+ tiger reserves\nWhich is/are correct?",
    options: ["1 and 3 only", "2 and 3 only", "1 only", "All of the above"],
    correct: 0,
    explanation: "Jim Corbett was the first tiger reserve under Project Tiger launched in 1973 (not 1972). India now has 50+ tiger reserves."
  },
  {
    question: "Vansda National Park in Gujarat is known for:",
    options: ["Asiatic Lions", "Deciduous forests", "Marine biodiversity", "Snow leopards"],
    correct: 1,
    explanation: "Vansda NP in Gujarat is known for its deciduous forests and biodiversity."
  },
  {
    question: "Which National Park has the Galathea River?",
    options: ["Campbell Bay NP", "Galathea NP", "Saddle Peak NP", "Mount Harriet NP"],
    correct: 1,
    explanation: "Galathea National Park in Andaman & Nicobar has the Galathea River."
  },
  {
    question: "Match the following:\nA. Van Vihar NP - 1. Urban park in Bhopal\nB. Guindy NP - 2. Urban park in Chennai  \nC. Sanjay Gandhi NP - 3. Urban park in Mumbai\nD. KBR NP - 4. Urban park in Hyderabad",
    options: ["A-1, B-2, C-3, D-4", "A-2, B-1, C-4, D-3", "A-4, B-3, C-2, D-1", "A-3, B-4, C-1, D-2"],
    correct: 0,
    explanation: "All matches are correct: Van Vihar (Bhopal), Guindy (Chennai), Sanjay Gandhi (Mumbai), KBR (Hyderabad)."
  },
  {
    question: "Sultanpur National Park in Haryana is primarily a:",
    options: ["Tiger reserve", "Bird sanctuary", "Elephant corridor", "Marine park"],
    correct: 1,
    explanation: "Sultanpur NP in Haryana is primarily known as a bird sanctuary."
  },
  {
    question: "Which river system is Sundarbans a part of?",
    options: ["Brahmaputra Delta", "Ganges Delta", "Mahanadi Delta", "Godavari Delta"],
    correct: 1,
    explanation: "Sundarbans is part of the Ganges-Brahmaputra Delta, primarily the Ganges Delta."
  },
  {
    question: "Consider these statements about Ramsar Sites:\n1. Keoladeo NP is a Ramsar site\n2. Sundarbans NP is a Ramsar site\n3. Loktak Lake (with Keibul Lamjao NP) is a Ramsar site\nWhich is/are correct?",
    options: ["1 and 2 only", "All of the above", "1 and 3 only", "2 and 3 only"],
    correct: 1,
    explanation: "All three are correct. These are important Ramsar Wetland sites in India."
  },
  {
    question: "Kudremukh National Park gets its name from:",
    options: ["A tribal word", "Horse-face shaped peak", "A historical figure", "A type of tree"],
    correct: 1,
    explanation: "Kudremukh means 'horse-face' in Kannada, named after the mountain peak's shape."
  },
  {
    question: "Which is the only national park in Uttar Pradesh?",
    options: ["Jim Corbett NP", "Dudhwa NP", "Rajaji NP", "Valmiki NP"],
    correct: 1,
    explanation: "Dudhwa is the only national park in Uttar Pradesh. (Jim Corbett and Rajaji are in Uttarakhand)"
  },
  {
    question: "Tadoba-Andhari Tiger Reserve was established in which year?",
    options: ["1935", "1955", "1975", "1995"],
    correct: 1,
    explanation: "Tadoba National Park was established in 1955, making it Maharashtra's oldest NP."
  },
  {
    question: "Consider the following about Biosphere Reserves:\n1. Nilgiri BR includes Bandipur, Nagarhole, Mudumalai\n2. Nanda Devi BR includes both Nanda Devi and Valley of Flowers NPs\n3. Pachmarhi BR includes Satpura NP\nWhich is/are correct?",
    options: ["All of the above", "1 and 2 only", "2 and 3 only", "1 and 3 only"],
    correct: 0,
    explanation: "All statements are correct. These are important Biosphere Reserves with multiple national parks."
  },
  {
    question: "Chandoli National Park in Maharashtra is part of:",
    options: ["Project Tiger", "Project Elephant", "Project Snow Leopard", "None"],
    correct: 0,
    explanation: "Chandoli NP in Maharashtra is a tiger reserve under Project Tiger."
  },
  {
    question: "Which National Park has Pench River flowing through it?",
    options: ["Kanha NP", "Pench NP", "Bandhavgarh NP", "Satpura NP"],
    correct: 1,
    explanation: "Pench National Park (shared between MP & Maharashtra) has the Pench River flowing through it."
  },
  {
    question: "Rani Jhansi Marine National Park is located in:",
    options: ["Andaman Islands", "Nicobar Islands", "Ritchie's Archipelago", "Lakshadweep"],
    correct: 2,
    explanation: "Rani Jhansi Marine NP is located in Ritchie's Archipelago of Andaman & Nicobar Islands."
  },
  {
    question: "Which National Park is NOT in Assam?",
    options: ["Kaziranga", "Dibru-Saikhowa", "Nokrek", "Manas"],
    correct: 2,
    explanation: "Nokrek National Park is in Meghalaya, not Assam."
  },
  {
    question: "Madhav National Park is located in:",
    options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Chhattisgarh"],
    correct: 1,
    explanation: "Madhav NP is in Madhya Pradesh, known for the historic George Castle."
  },
  {
    question: "Which endangered species is Dachigam NP trying to conserve?",
    options: ["Great Indian Bustard", "Hangul (Kashmir Stag)", "Nilgiri Tahr", "Sangai"],
    correct: 1,
    explanation: "Dachigam NP in J&K is the last habitat of the critically endangered Hangul (Kashmir Stag)."
  },
  {
    question: "Intanki National Park (also called Ntangki) is in:",
    options: ["Manipur", "Mizoram", "Nagaland", "Tripura"],
    correct: 2,
    explanation: "Intanki/Ntangki National Park is in Nagaland, known for Hoolock gibbons and hornbills."
  },
  {
    question: "Consider the following statements:\n1. Grazing is permitted in National Parks\n2. Timber extraction is prohibited in National Parks\n3. Research activities require permission in National Parks\nWhich is/are correct?",
    options: ["2 and 3 only", "1 and 3 only", "3 only", "All of the above"],
    correct: 0,
    explanation: "Grazing is NOT permitted in National Parks (unlike sanctuaries). Timber extraction is prohibited. Research requires Chief Wildlife Warden's permission."
  },
  {
    question: "Gugamal National Park is part of which Tiger Reserve?",
    options: ["Tadoba TR", "Melghat TR", "Pench TR", "Chandoli TR"],
    correct: 1,
    explanation: "Gugamal NP in Maharashtra is part of Melghat Tiger Reserve."
  },
  {
    question: "Which National Park has Mount Khangchendzonga (3rd highest peak)?",
    options: ["Great Himalayan NP", "Nanda Devi NP", "Khangchendzonga NP", "Valley of Flowers NP"],
    correct: 2,
    explanation: "Khangchendzonga NP in Sikkim has Mt. Khangchendzonga, the world's 3rd highest peak."
  },
  {
    question: "Navegaon National Park and Pench National Park are both in:",
    options: ["Madhya Pradesh", "Maharashtra", "Chhattisgarh", "Odisha"],
    correct: 1,
    explanation: "Both Navegaon and Pench (partially) are in Maharashtra."
  },
  {
    question: "Which is the correct sequence of National Parks from North to South?",
    options: ["Hemis - Jim Corbett - Kanha - Periyar", "Kaziranga - Sundarbans - Simlipal - Gulf of Mannar", "Dachigam - Rajaji - Bandhavgarh - Silent Valley", "Namdapha - Manas - Bhitarkanika - Guindy"],
    correct: 2,
    explanation: "Dachigam (J&K) → Rajaji (Uttarakhand) → Bandhavgarh (MP) → Silent Valley (Kerala) is North to South."
  },
  {
    question: "Neora Valley National Park is known for:",
    options: ["Tigers", "Red Panda and Clouded Leopard", "One-horned Rhino", "Asiatic Lions"],
    correct: 1,
    explanation: "Neora Valley NP in West Bengal is known for Red Pandas and Clouded Leopards."
  },
  {
    question: "Which National Park is closest to the Nepal border?",
    options: ["Jim Corbett NP", "Dudhwa NP", "Valmiki NP", "Kaziranga NP"],
    correct: 1,
    explanation: "Dudhwa National Park in UP is located adjacent to the Nepal border."
  },
  {
    question: "Anshi National Park in Karnataka is also known as:",
    options: ["Kali Tiger Reserve", "Dandeli Wildlife Sanctuary", "Anshi-Dandeli Tiger Reserve", "Western Ghats NP"],
    correct: 2,
    explanation: "Anshi NP is part of Anshi-Dandeli Tiger Reserve in Karnataka."
  },
  {
    question: "Which park has the THREE Button Islands?",
    options: ["Campbell Bay, Galathea, Mahatma Gandhi Marine", "North, Middle, South Button Island NPs", "Mount Harriet, Saddle Peak, Rani Jhansi Marine", "Great Nicobar, Little Nicobar, Car Nicobar"],
    correct: 1,
    explanation: "North Button, Middle Button, and South Button Island are three separate tiny national parks in Andaman."
  },
  {
    question: "Bannerghatta National Park is famous for:",
    options: ["Being near Bangalore city", "Biological park and zoo", "Butterfly park", "All of the above"],
    correct: 3,
    explanation: "Bannerghatta near Bangalore is known for its biological park, zoo, and butterfly park."
  },
  {
    question: "Which state has Mollem National Park?",
    options: ["Karnataka", "Goa", "Maharashtra", "Kerala"],
    correct: 1,
    explanation: "Mollem (Bhagwan Mahavir) National Park is in Goa, famous for Dudhsagar Falls."
  },
  {
    question: "Consider wildlife corridors. Which NP is important for elephant corridor?",
    options: ["Simbalbara NP", "Rajaji NP", "Bandipur NP", "All of the above"],
    correct: 3,
    explanation: "All three are important elephant corridors. Simbalbara (HP), Rajaji (Uttarakhand), and Bandipur (Karnataka)."
  },
  {
    question: "Sri Venkateswara National Park is located in:",
    options: ["Eastern Ghats", "Western Ghats", "Vindhya Range", "Satpura Range"],
    correct: 0,
    explanation: "Sri Venkateswara NP in Andhra Pradesh is located in the Eastern Ghats (Seshachalam Hills)."
  },
  {
    question: "Which National Park has Joranda and Barehipani waterfalls?",
    options: ["Bhitarkanika NP", "Simlipal NP", "Kanha NP", "Dudhsagar (Mollem) NP"],
    correct: 1,
    explanation: "Simlipal National Park in Odisha has beautiful Joranda and Barehipani waterfalls."
  },
  {
    question: "Gorumara and Jaldapara National Parks in West Bengal are known for:",
    options: ["Tigers", "Indian Rhinoceros", "Red Pandas", "Snow Leopards"],
    correct: 1,
    explanation: "Both Gorumara and Jaldapara NPs in West Bengal are known for Indian Rhinoceros conservation."
  },
  {
    question: "Which is the correct statement about Kuno National Park?",
    options: ["It's a tiger reserve in MP", "Being prepared for Asiatic Lion translocation", "Both A and B", "None"],
    correct: 2,
    explanation: "Kuno NP in Madhya Pradesh is both a tiger reserve and being prepared for Asiatic Lion translocation from Gir."
  },
  {
    question: "Mukurthi National Park is part of:",
    options: ["Nilgiri Biosphere Reserve", "Western Ghats UNESCO site", "Both A and B", "None"],
    correct: 2,
    explanation: "Mukurthi NP in Tamil Nadu is part of both Nilgiri BR and Western Ghats UNESCO World Heritage site."
  },
  {
    question: "Singalila National Park in West Bengal is famous for:",
    options: ["Being highest NP in WB", "Red Panda habitat", "Views of Khangchendzonga", "All of the above"],
    correct: 3,
    explanation: "Singalila is the highest NP in West Bengal, known for Red Pandas and spectacular views of Khangchendzonga."
  },
  {
    question: "Which fossil park is in Madhya Pradesh?",
    options: ["Dinosaur Fossils NP", "Mandla Plant Fossils NP", "Both A and B", "None"],
    correct: 2,
    explanation: "MP has TWO fossil national parks: Dinosaur Fossils NP and Mandla Plant Fossils NP, both of geological importance."
  },
  {
    question: "Buxa Tiger Reserve was formerly a:",
    options: ["Fort", "Prison camp", "Palace", "Trade route"],
    correct: 1,
    explanation: "Buxa in West Bengal was formerly a detention camp during British rule and later became a Tiger Reserve."
  },
  {
    question: "Which National Park is named after India's first PM?",
    options: ["Pench (Jawaharlal Nehru) NP", "Rajiv Gandhi NP", "Indira Gandhi NP", "None"],
    correct: 0,
    explanation: "Pench National Park in Maharashtra is also called Jawaharlal Nehru National Park."
  }
];
