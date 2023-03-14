const data = [
  {
    name: "Maryam",
    last_name: "Gholampour",
    user_name: "johndoe",
    contract_number: "1234",
    registry_date: "2021-01-01",
    date: "2021-01-15",
    contract_price: 1000,
    contract_name: "Contract A",
    status: "Active",
    age_range: "Adult",
    national_id: "344545",
    passport_number: "978675",
    ticket_number: "5654543",
    reference_number: "56734",
    operation: "Sell",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/asemanairlines.png",
    airline_logo: "/asemanairline.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "IS 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Rasool",
    last_name: "Rasooli",
    user_name: "janedoe",
    contract_number: "5678",
    registry_date: "2021-02-01",
    date: "2021-02-15",
    contract_price: 2000,
    contract_name: "Contract B",
    status: "Inactive",
    age_range: "Child",
    national_id: "23234",
    passport_number: "8967",
    ticket_number: "3534",
    reference_number: "32333",
    operation: "Buy",
    departure_date: "2021-11-01",
    departure_time: "09:35 PM",
    origin_city: "Kuwait",
    destination_city: "Tehran",
    origin_airport: "KWT",
    destination_airport: "THR",
    airline: "Taban Air",
    airline_logo: "/ataairlines.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "20 kg",
    flight_number: "QB 2217 ",
    flight_duration: "1 hr, 04 min",
    rate_class: "Business",
    arrival_date: "2021-11-01",
    arrival_time: "10:21 PM",
  },
  {
    name: "Amir",
    last_name: "Najafi",
    user_name: "bobsmith",
    contract_number: "9012",
    registry_date: "2021-03-01",
    date: "2021-03-15",
    contract_price: 3000,
    contract_name: "Contract C",
    status: "Active",
    age_range: "Child",
    national_id: "87643",
    passport_number: "34532532534",
    ticket_number: "8888",
    reference_number: "4653543",
    operation: "Buy",
    departure_date: "2022-05-04",
    departure_time: "10:35 PM",
    origin_city: "Tehran",
    destination_city: "Al-Najaf",
    origin_airport: "THR",
    destination_airport: "NJF",
    airline: "Qeshm Air",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 01",
    allowed_cargo: "15 kg",
    flight_number: "IS 324",
    flight_duration: "1 hr, 03 min",
    rate_class: "Economy",
    arrival_date: "2022-05-04",
    arrival_time: "10:50 AM",
  },
  {
    name: "Javad",
    last_name: "Bolouri",
    user_name: "alicesmith",
    contract_number: "3456",
    registry_date: "2021-04-01",
    date: "2021-04-15",
    contract_price: 4000,
    contract_name: "Contract D",
    status: "Inactive",
    age_range: "Adult",
    national_id: "1111",
    passport_number: "7875t",
    ticket_number: "544324",
    reference_number: "43435",
    operation: "Sell",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Mohsen",
    last_name: "Etemadi",
    user_name: "evejones",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Child",
    national_id: "643253245",
    passport_number: "34355",
    ticket_number: "65323",
    reference_number: "945365",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Ali",
    last_name: "Ayati",
    user_name: "peterpan",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Adult",
    national_id: "32234",
    passport_number: "2342111123476",
    ticket_number: "746354321",
    reference_number: "324",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Ahmad",
    last_name: "Salem",
    user_name: "johndoe",
    contract_number: "1234",
    registry_date: "2021-01-01",
    date: "2021-01-15",
    contract_price: 1000,
    contract_name: "Contract A",
    status: "Active",
    age_range: "Child",
    national_id: "4534545",
    passport_number: "435354",
    ticket_number: "890765",
    reference_number: "657",
    operation: "Sell",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Elham",
    last_name: "Jamshidi",
    user_name: "janedoe",
    contract_number: "5678",
    registry_date: "2021-02-01",
    date: "2021-02-15",
    contract_price: 2000,
    contract_name: "Contract B",
    status: "Inactive",
    age_range: "Adult",
    national_id: "657",
    passport_number: "1567567",
    ticket_number: "547857578",
    reference_number: "5473575",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Hedieh",
    last_name: "Omat Reza",
    user_name: "bobsmith",
    contract_number: "9012",
    registry_date: "2021-03-01",
    date: "2021-03-15",
    contract_price: 3000,
    contract_name: "Contract C",
    status: "Active",
    age_range: "Adult",
    national_id: "457",
    passport_number: "47773",
    ticket_number: "7435",
    reference_number: "455555555555555",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Hamid Reza",
    last_name: "Zare",
    user_name: "alicesmith",
    contract_number: "3456",
    registry_date: "2021-04-01",
    date: "2021-04-15",
    contract_price: 4000,
    contract_name: "Contract D",
    status: "Inactive",
    age_range: "Child",
    national_id: "5675",
    passport_number: "245754",
    ticket_number: "574785464578235",
    reference_number: "45646465",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Zahra",
    last_name: "Kazemi",
    user_name: "evejones",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Adult",
    national_id: "9845",
    passport_number: "2345",
    ticket_number: "4572345",
    reference_number: "856754",
    operation: "Sell",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Batool",
    last_name: "Ghobeyshavi",
    user_name: "peterpan",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Child",
    national_id: "7843",
    passport_number: "23456",
    ticket_number: "87654",
    reference_number: "23456",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Nazanin",
    last_name: "Bakhshi",
    user_name: "johndoe",
    contract_number: "1234",
    registry_date: "2021-01-01",
    date: "2021-01-15",
    contract_price: 1000,
    contract_name: "Contract A",
    status: "Active",
    age_range: "Adult",
    national_id: "54",
    passport_number: "744353",
    ticket_number: "6745",
    reference_number: "23456789",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Asma",
    last_name: "Maleki Far",
    user_name: "janedoe",
    contract_number: "5678",
    registry_date: "2021-02-01",
    date: "2021-02-15",
    contract_price: 2000,
    contract_name: "Contract B",
    status: "Inactive",
    age_range: "Adult",
    national_id: "3457678",
    passport_number: "1756",
    ticket_number: "167654",
    reference_number: "9874632463245",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Effat",
    last_name: "Akbari",
    user_name: "bobsmith",
    contract_number: "9012",
    registry_date: "2021-03-01",
    date: "2021-03-15",
    contract_price: 3000,
    contract_name: "Contract C",
    status: "Active",
    age_range: "Adult",
    national_id: "213",
    passport_number: "1234567890",
    ticket_number: "12345",
    reference_number: "9876",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Fatemeh",
    last_name: "Javadi",
    user_name: "alicesmith",
    contract_number: "3456",
    registry_date: "2021-04-01",
    date: "2021-04-15",
    contract_price: 4000,
    contract_name: "Contract D",
    status: "Inactive",
    age_range: "Child",
    national_id: "349",
    passport_number: "2345",
    ticket_number: "987654",
    reference_number: "3456754356",
    operation: "Sell",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Shaghayegh",
    last_name: "Hashemi",
    user_name: "evejones",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Child",
    national_id: "3459",
    passport_number: "54344213",
    ticket_number: "4356789",
    reference_number: "3245678423456789",
    operation: "Sell",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Neda",
    last_name: "Rezayi",
    user_name: "peterpan",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Child",
    national_id: "343399",
    passport_number: "4532",
    ticket_number: "9876",
    reference_number: "4345676543",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Kosar",
    last_name: "Shahmani",
    user_name: "alicesmith",
    contract_number: "3456",
    registry_date: "2021-04-01",
    date: "2021-04-15",
    contract_price: 4000,
    contract_name: "Contract D",
    status: "Inactive",
    age_range: "Adult",
    national_id: "07313399",
    passport_number: "424y672311",
    ticket_number: "34876",
    reference_number: "87685636384643736",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
  {
    name: "Parviz",
    last_name: "Parastouyi",
    user_name: "evejones",
    contract_number: "7890",
    registry_date: "2021-05-01",
    date: "2021-05-15",
    contract_price: 5000,
    contract_name: "Contract E",
    status: "Active",
    age_range: "Adult",
    national_id: "0731753399",
    passport_number: "4242311",
    ticket_number: "87634876",
    reference_number: "8768348736384643736",
    operation: "Buy",
    departure_date: "2022-02-21",
    departure_time: "11:35 PM",
    origin_city: "Al-Najafi",
    destination_city: "Mashhad",
    origin_airport: "NJF",
    destination_airport: "MHD",
    airline: "Sepehran Airlines",
    airline_logo: "/iranair.png",
    airplane_model: "Boeing 324",
    allowed_cargo: "15 kg",
    flight_number: "Is 324",
    flight_duration: "1 hr, 34 min",
    rate_class: "Economy",
    arrival_date: "2022-02-22",
    arrival_time: "7:21 AM",
  },
];
export default data;