const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/globeMarkers"
);

const markerSeed = [
  {
    id: 1,
    country: "Aruba",
    coordinates: [12.5, -69.96666666],
    color: "green",
    value: 50
  },
  {
    id: 2,
    country: "Afghanistan",
    coordinates: [33, 65],
    color: "green",
    value: 50
  },
  {
    id: 3,
    country: "Anguilla",
    coordinates: [18.25, -63.16666666],
    color: "green",
    value: 50
  },
  {
    id: 4,
    country: "Albania",
    coordinates: [41, 20],
    color: "green",
    value: 50
  },
  {
    id: 5,
    country: "Andorra",
    coordinates: [42.5, 1.5],
    color: "green",
    value: 50
  },
  {
    id: 6,
    country: "UAE",
    coordinates: [24, 54],
    color: "green",
    value: 50
  },
  {
    id: 7,
    country: "Argentina",
    coordinates: [-34, -64],
    color: "green",
    value: 50
  },
  {
    id: 8,
    country: "Armenia",
    coordinates: [40, 45],
    color: "green",
    value: 50
  },
  {
    id: 9,
    country: "Antigua and Barbuda",
    coordinates: [17.05, -61.8],
    color: "green",
    value: 50
  },
  {
    id: 10,
    country: "Australia",
    coordinates: [-27, 133],
    color: "green",
    value: 50
  },
  {
    id: 11,
    country: "Austria",
    coordinates: [47.33333333, 13.33333333],
    color: "green",
    value: 50
  },
  {
    id: 12,
    country: "Azerbaijan",
    coordinates: [40.5, 47.5],
    color: "green",
    value: 50
  },
  {
    id: 13,
    country: "Burundi",
    coordinates: [-3.5, 30],
    color: "green",
    value: 50
  },
  {
    id: 14,
    country: "Belgium",
    coordinates: [50.83333333, 4],
    color: "green",
    value: 50
  },
  {
    id: 15,
    country: "Benin",
    coordinates: [9.5, 2.25],
    color: "green",
    value: 50
  },
  {
    id: 16,
    country: "Burkina Faso",
    coordinates: [13, -2],
    color: "green",
    value: 50
  },
  {
    id: 17,
    country: "Bangladesh",
    coordinates: [24, 90],
    color: "green",
    value: 50
  },
  {
    id: 18,
    country: "Bulgaria",
    coordinates: [43, 25],
    color: "green",
    value: 50
  },
  {
    id: 19,
    country: "Bahrain",
    coordinates: [26, 50.55],
    color: "green",
    value: 50
  },
  {
    id: 20,
    country: "Bahamas",
    coordinates: [24.25, -76],
    color: "green",
    value: 50
  },
  {
    id: 21,
    country: "Bosnia and Herzegovina",
    coordinates: [44, 18],
    color: "green",
    value: 50
  },
  {
    id: 22,
    country: "Belarus",
    coordinates: [53, 28],
    color: "green",
    value: 50
  },
  {
    id: 23,
    country: "Belize",
    coordinates: [17.25, -88.75],
    color: "green",
    value: 50
  },
  {
    id: 24,
    country: "Bermuda",
    coordinates: [32.33333333, -64.75],
    color: "green",
    value: 50
  },
  {
    id: 25,
    country: "Bolivia",
    coordinates: [ -17, -65],
    color: "green",
    value: 50
  },
  {
    id: 26,
    country: "Brazil",
    coordinates: [-10, -55],
    color: "green",
    value: 50
  },
  {
    id: 27,
    country: "Barbados",
    coordinates: [13.16666666, -59.53333333],
    color: "green",
    value: 50
  },
  {
    id: 28,
    country: "Brunei",
    coordinates: [4.5, 114.66666666],
    color: "green",
    value: 50
  },
  {
    id: 29,
    country: "Bhutan",
    coordinates: [ 27.5, 90.5],
    color: "green",
    value: 50
  },
  {
    id: 30,
    country: "Botswana",
    coordinates: [-22, 24],
    color: "green",
    value: 50
  },
  {
    id: 31,
    country: "Canada",
    coordinates: [60, -95],
    color: "green",
    value: 50
  },
  {
    id: 32,
    country: "Switzerland",
    coordinates: [47, 8],
    color: "green",
    value: 50
  },
  {
    id: 33,
    country: "Chile",
    coordinates: [ -30, -71],
    color: "green",
    value: 50
  },
  {
    id: 34,
    country: "China",
    coordinates: [35, 105],
    color: "green",
    value: 50
  },
  {
    id: 35,
    country: "Ivory Coast",
    coordinates: [8, -5],
    color: "green",
    value: 50
  },
  {
    id: 36,
    country: "Cameroon",
    coordinates: [6, 12],
    color: "green",
    value: 50
  },
  {
    id: 37,
    country: "Congo",
    coordinates: [-1, 15],
    color: "green",
    value: 50
  },
  {
    id: 38,
    country: "Colombia",
    coordinates: [ 4, -72],
    color: "green",
    value: 50
  },
  {
    id: 39,
    country: "Comoros",
    coordinates: [ -12.16666666, 44.25],
    color: "green",
    value: 50
  },
  {
    id: 40,
    country: "Costa Rica",
    coordinates: [10, -84],
    color: "green",
    value: 50
  },
  {
    id: 41,
    country: "Cuba",
    coordinates: [21.5, -80],
    color: "green",
    value: 50
  },
  {
    id: 42,
    country: "Cayman Islands",
    coordinates: [ 19.5, -80.5],
    color: "green",
    value: 50
  },
  {
    id: 43,
    country: "Cyprus",
    coordinates: [35, 33],
    color: "green",
    value: 50
  },
  {
    id: 44,
    country: "Czechia",
    coordinates: [49.75, 15.5],
    color: "green",
    value: 50
  },
  {
    id: 45,
    country: "Germany",
    coordinates: [51, 9],
    color: "green",
    value: 50
  },
  {
    id: 46,
    country: "Djibouti",
    coordinates: [11.5, 43],
    color: "green",
    value: 50
  },
  {
    id: 47,
    country: "Dominica",
    coordinates: [15.41666666, -61.33333333],
    color: "green",
    value: 50
  },
  {
    id: 48,
    country: "Denmark",
    coordinates: [56, 10],
    color: "green",
    value: 50
  },
  {
    id: 49,
    country: "Dominican Republic",
    coordinates: [19, -70.66666666],
    color: "green",
    value: 50
  },
  {
    id: 50,
    country: "Algeria",
    coordinates: [28, 3],
    color: "green",
    value: 50
  },
  {
    id: 51,
    country: "Ecuador",
    coordinates: [ -2, -77.5],
    color: "green",
    value: 50
  },
  {
    id: 52,
    country: "Egypt",
    coordinates: [27, 30],
    color: "green",
    value: 50
  },
  {
    id: 53,
    country: "Western Sahara",
    coordinates: [24.5, -13],
    color: "green",
    value: 50
  },
  {
    id: 54,
    country: "Spain",
    coordinates: [40, -4],
    color: "green",
    value: 50
  },
  {
    id: 55,
    country: "Estonia",
    coordinates: [59, 26],
    color: "green",
    value: 50
  },
  {
    id: 56,
    country: "Ethiopia",
    coordinates: [8, 38],
    color: "green",
    value: 50
  },
  {
    id: 57,
    country: "Finland",
    coordinates: [64, 26],
    color: "green",
    value: 50
  },
  {
    id: 58,
    country: "Fiji",
    coordinates: [-18, 175],
    color: "green",
    value: 50
  },
  {
    id: 59,
    country: "Falkland Islands",
    coordinates: [-51.75, -59],
    color: "green",
    value: 50
  },
  {
    id: 60,
    country: "France",
    coordinates: [46, 2],
    color: "green",
    value: 50
  },
  {
    id: 61,
    country: "Gabon",
    coordinates: [-1, 11.75],
    color: "green",
    value: 50
  },
  {
    id: 62,
    country: "UK",
    coordinates: [54, -2],
    color: "green",
    value: 50
  },
  {
    id: 63,
    country: "Georgia",
    coordinates: [42, 43.5],
    color: "green",
    value: 50
  },
  {
    id: 64,
    country: "Ghana",
    coordinates: [8, -2],
    color: "green",
    value: 50
  },
  {
    id: 65,
    country: "Gibraltar",
    coordinates: [36.13333333, -5.35],
    color: "green",
    value: 50
  },
  {
    id: 66,
    country: "Guadeloupe",
    coordinates: [16.25, -61.583333],
    color: "green",
    value: 50
  },
  {
    id: 67,
    country: "Gambia",
    coordinates: [13.46666666, -16.56666666],
    color: "green",
    value: 50
  },
  {
    id: 68,
    country: "Equatorial Guinea",
    coordinates: [2, 10],
    color: "green",
    value: 50
  },
  {
    id: 69,
    country: "Greece",
    coordinates: [39, 22],
    color: "green",
    value: 50
  },
  {
    id: 70,
    country: "Grenada",
    coordinates: [12.11666666, -61.66666666],
    color: "green",
    value: 50
  },
  {
    id: 71,
    country: "Greenland",
    coordinates: [72, -40],
    color: "green",
    value: 50
  },
  {
    id: 72,
    country: "Guatemala",
    coordinates: [15.5, -90.25],
    color: "green",
    value: 50
  },
  {
    id: 73,
    country: "Guyana",
    coordinates: [5, -59],
    color: "green",
    value: 50
  },
  {
    id: 74,
    country: "Hong Kong",
    coordinates: [22.267, 114.188],
    color: "green",
    value: 50
  },
  {
    id: 75,
    country: "Honduras",
    coordinates: [15, -86.5],
    color: "green",
    value: 50
  },
  {
    id: 76,
    country: "Croatia",
    coordinates: [45.16666666, 15.5],
    color: "green",
    value: 50
  },
  {
    id: 77,
    country: "Haiti",
    coordinates: [19, -72.41666666],
    color: "green",
    value: 50
  },
  {
    id: 78,
    country: "Hungary",
    coordinates: [47, 20],
    color: "green",
    value: 50
  },
  {
    id: 79,
    country: "Indonesia",
    coordinates: [ -5, 120],
    color: "green",
    value: 50
  },
  {
    id: 80,
    country: "Isle of Man",
    coordinates: [54.25, -4.5],
    color: "green",
    value: 50
  },
  {
    id: 91,
    country: "India",
    coordinates: [20, 77],
    color: "green",
    value: 50
  },
  {
    id: 92,
    country: "Ireland",
    coordinates: [53, -8],
    color: "green",
    value: 50
  },
  {
    id: 93,
    country: "Iran",
    coordinates: [32, 53],
    color: "green",
    value: 50
  },
  {
    id: 94,
    country: "Iraq",
    coordinates: [33, 44],
    color: "green",
    value: 50
  },
  {
    id: 95,
    country: "Iceland",
    coordinates: [65, -18],
    color: "green",
    value: 50
  },
  {
    id: 96,
    country: "Israel",
    coordinates: [31.47, 35.13],
    color: "green",
    value: 50
  },
  {
    id: 97,
    country: "Italy",
    coordinates: [42.83333333, 12.83333333],
    color: "green",
    value: 50
  },
  {
    id: 98,
    country: "Jamaica",
    coordinates: [18.25, -77.5],
    color: "green",
    value: 50
  },
  {
    id: 99,
    country: "Jordan",
    coordinates: [31, 36],
    color: "green",
    value: 50
  },
  {
    id: 100,
    country: "Japan",
    coordinates: [36, 138],
    color: "green",
    value: 50
  },
  {
    id: 101,
    country: "Kazakhstan",
    coordinates: [48, 68],
    color: "green",
    value: 50
  },
  {
    id: 102,
    country: "Kenya",
    coordinates: [ 1, 38],
    color: "green",
    value: 50
  },
  {
    id: 103,
    country: "Kyrgyzstan",
    coordinates: [41, 75],
    color: "green",
    value: 50
  },
  {
    id: 104,
    country: "S. Korea",
    coordinates: [37, 127.5],
    color: "green",
    value: 50
  },
  {
    id: 105,
    country: "Kuwait",
    coordinates: [29.5, 45.75],
    color: "green",
    value: 50
  },
  {
    id: 106,
    country: "Lebanon",
    coordinates: [33.83333333, 35.83333333],
    color: "green",
    value: 50
  },
  {
    id: 107,
    country: "Liberia",
    coordinates: [6.5, -9.5],
    color: "green",
    value: 50
  },
  {
    id: 108,
    country: "Libya",
    coordinates: [25, 17],
    color: "green",
    value: 50
  },
  {
    id: 109,
    country: "Liechtenstein",
    coordinates: [47.26666666, 9.53333333],
    color: "green",
    value: 50
  },
  {
    id: 110,
    country: "Sri Lanka",
    coordinates: [7, 81],
    color: "green",
    value: 50
  },
  {
    id: 111,
    country: "Lesotho",
    coordinates: [-29.5, 28.5],
    color: "green",
    value: 50
  },
  {
    id: 112,
    country: "Lithuania",
    coordinates: [56, 24],
    color: "green",
    value: 50
  },
  {
    id: 113,
    country: "Luxembourg",
    coordinates: [49.75, 6.16666666],
    color: "green",
    value: 50
  },
  {
    id: 114,
    country: "Latvia",
    coordinates: [57, 25],
    color: "green",
    value: 50
  },
  {
    id: 115,
    country: "Morocco",
    coordinates: [32, -5],
    color: "green",
    value: 50
  },
  {
    id: 116,
    country: "Monaco",
    coordinates: [43.73333333, 7.4],
    color: "green",
    value: 50
  },
  {
    id: 117,
    country: "Moldova",
    coordinates: [47, 29],
    color: "green",
    value: 50
  },
  {
    id: 118,
    country: "Madagascar",
    coordinates: [-20, 47],
    color: "green",
    value: 50
  },
  {
    id: 119,
    country: "Maldives",
    coordinates: [3.25, 73],
    color: "green",
    value: 50
  },
  {
    id: 120,
    country: "Mexico",
    coordinates: [23, -102],
    color: "green",
    value: 50
  },
  {
    id: 121,
    country: "Marshall Islands",
    coordinates: [9, 168],
    color: "green",
    value: 50
  },
  {
    id: 122,
    country: "Macedonia",
    coordinates: [41.83333333, 22],
    color: "green",
    value: 50
  },
  {
    id: 123,
    country: "Mali",
    coordinates: [17, -4],
    color: "green",
    value: 50
  },
  {
    id: 124,
    country: "Malta",
    coordinates: [35.83333333, 14.58333333],
    color: "green",
    value: 50
  },
  {
    id: 125,
    country: "Myanmar",
    coordinates: [22, 98],
    color: "green",
    value: 50
  },
  {
    id: 126,
    country: "Montenegro",
    coordinates: [42.5, 19.3],
    color: "green",
    value: 50
  },
  {
    id: 127,
    country: "Mongolia",
    coordinates: [46, 105],
    color: "green",
    value: 50
  },
  {
    id: 128,
    country: "Mozambique",
    coordinates: [-18.25, 35],
    color: "green",
    value: 50
  },
  {
    id: 129,
    country: "Mauritania",
    coordinates: [ 21, 10.9408],
    color: "green",
    value: 50
  },
  {
    id: 130,
    country: "Montserrat",
    coordinates: [16.75, -62.2],
    color: "green",
    value: 50
  },
  {
    id: 131,
    country: "Martinique",
    coordinates: [14.666667, -61],
    color: "green",
    value: 50
  },
  {
    id: 132,
    country: "Mauritius",
    coordinates: [-20.28333333, 57.55],
    color: "green",
    value: 50
  },
  {
    id: 133,
    country: "Malawi",
    coordinates: [-13.5, 34],
    color: "green",
    value: 50
  },
  {
    id: 134,
    country: "Malaysia",
    coordinates: [2.5, 112.5],
    color: "green",
    value: 50
  },
  {
    id: 135,
    country: "Mayotte",
    coordinates: [-12.83333333, 45.16666666],
    color: "green",
    value: 50
  },
  {
    id: 136,
    country: "Namibia",
    coordinates: [-22, 17],
    color: "green",
    value: 50
  },
  {
    id: 137,
    country: "New Caledonia",
    coordinates: [-21.5, 165.5],
    color: "green",
    value: 50
  },
  {
    id: 138,
    country: "Niger",
    coordinates: [16, 8],
    color: "green",
    value: 50
  },
  {
    id: 139,
    country: "Nigeria",
    coordinates: [10, 8],
    color: "green",
    value: 50
  },
  {
    id: 140,
    country: "Nicaragua",
    coordinates: [13, -85],
    color: "green",
    value: 50
  },
  {
    id: 140,
    country: "Netherlands",
    coordinates: [52.5, 5.75],
    color: "green",
    value: 50
  },
  {
    id: 141,
    country: "Norway",
    coordinates: [62, 10],
    color: "green",
    value: 50
  },
  {
    id: 142,
    country: "Nepal",
    coordinates: [28, 84],
    color: "green",
    value: 50
  },
  {
    id: 143,
    country: "New Zealand",
    coordinates: [-41, 174],
    color: "green",
    value: 50
  },
  {
    id: 144,
    country: "Oman",
    coordinates: [21, 57],
    color: "green",
    value: 50
  },
  {
    id: 145,
    country: "Pakistan",
    coordinates: [30, 70],
    color: "green",
    value: 50
  },
  {
    id: 146,
    country: "Panama",
    coordinates: [9, -80],
    color: "green",
    value: 50
  },
  {
    id: 147,
    country: "Peru",
    coordinates: [-10, -76],
    color: "green",
    value: 50
  },
  {
    id: 148,
    country: "Philippines",
    coordinates: [13, 122],
    color: "green",
    value: 50
  },
  {
    id: 149,
    country: "Papua New Guinea",
    coordinates: [-6, 147],
    color: "green",
    value: 50
  },
  {
    id: 150,
    country: "Poland",
    coordinates: [52, 20],
    color: "green",
    value: 50
  },
  {
    id: 150,
    country: "Portugal",
    coordinates: [39.5, -8],
    color: "green",
    value: 50
  },
  {
    id: 151,
    country: "Paraguay",
    coordinates: [-23, -58],
    color: "green",
    value: 50
  },
  {
    id: 152,
    country: "Palestine",
    coordinates: [31.9, 35.2],
    color: "green",
    value: 50
  },
  {
    id: 153,
    country: "French Polynesia",
    coordinates: [-15, -140],
    color: "green",
    value: 50
  },
  {
    id: 154,
    country: "Qatar",
    coordinates: [25.5, 51.25],
    color: "green",
    value: 50
  },
  {
    id: 155,
    country: "Romania",
    coordinates: [46, 25],
    color: "green",
    value: 50
  },
  {
    id: 156,
    country: "Russia",
    coordinates: [60, 100],
    color: "green",
    value: 50
  },
  {
    id: 157,
    country: "Rwanda",
    coordinates: [-2, 30],
    color: "green",
    value: 50
  },
  {
    id: 158,
    country: "Saudi Arabia",
    coordinates: [25, 45],
    color: "green",
    value: 50
  },
  {
    id: 159,
    country: "Sudan",
    coordinates: [15, 30],
    color: "green",
    value: 50
  },
  {
    id: 160,
    country: "Senegal",
    coordinates: [14, -14],
    color: "green",
    value: 50
  },
  {
    id: 160,
    country: "Singapore",
    coordinates: [1.36666666, 103.8],
    color: "green",
    value: 50
  },
  {
    id: 161,
    country: "Solomon Islands",
    coordinates: [-8, 159],
    color: "green",
    value: 50
  },
  {
    id: 162,
    country: "Sierra Leone",
    coordinates: [8.5, -11.5],
    color: "green",
    value: 50
  },
  {
    id: 163,
    country: "El Salvador",
    coordinates: [13.83333333, -88.91666666],
    color: "green",
    value: 50
  },
  {
    id: 164,
    country: "San Marino",
    coordinates: [43.76666666, 12.41666666],
    color: "green",
    value: 50
  },
  {
    id: 165,
    country: "Somalia",
    coordinates: [10, 49],
    color: "green",
    value: 50
  },
  {
    id: 166,
    country: "Saint Pierre Miquelon",
    coordinates: [46.83333333, -56.33333333],
    color: "green",
    value: 50
  },
  {
    id: 167,
    country: "Serbia",
    coordinates: [44, 21],
    color: "green",
    value: 50
  },
  {
    id: 168,
    country: "South Sudan",
    coordinates: [7, 30],
    color: "green",
    value: 50
  },
  {
    id: 169,
    country: "Suriname",
    coordinates: [4, -56],
    color: "green",
    value: 50
  },
  {
    id: 170,
    country: "Slovakia",
    coordinates: [48.66666666, 19.5],
    color: "green",
    value: 50
  },
  {
    id: 170,
    country: "Slovenia",
    coordinates: [46.11666666, 14.81666666],
    color: "green",
    value: 50
  },
  {
    id: 171,
    country: "Sweden",
    coordinates: [62, 15],
    color: "green",
    value: 50
  },
  {
    id: 172,
    country: "Sint Maarten",
    coordinates: [18.033333, -63.05],
    color: "green",
    value: 50
  },
  {
    id: 173,
    country: "Sint Maarten",
    coordinates: [18.033333, -63.05],
    color: "green",
    value: 50
  },
  {
    id: 174,
    country: "Seychelles",
    coordinates: [-4.58333333, 55.66666666],
    color: "green",
    value: 50
  },
  {
    id: 175,
    country: "Syria",
    coordinates: [35, 38],
    color: "green",
    value: 50
  },
  {
    id: 176,
    country: "Turks and Caicos",
    coordinates: [21.75, -71.58333333],
    color: "green",
    value: 50
  },
  {
    id: 177,
    country: "Chad",
    coordinates: [15, 19],
    color: "green",
    value: 50
  },
  {
    id: 178,
    country: "Togo",
    coordinates: [8, 1.16666666],
    color: "green",
    value: 50
  },
  {
    id: 179,
    country: "Thailand",
    coordinates: [15, 100],
    color: "green",
    value: 50
  },
  {
    id: 180,
    country: "Tajikistan",
    coordinates: [39, 71],
    color: "green",
    value: 50
  },
  {
    id: 180,
    country: "Timor-Leste",
    coordinates: [-8.83333333, 125.91666666],
    color: "green",
    value: 50
  },
  {
    id: 181,
    country: "Trinidad and Tobago",
    coordinates: [11, -61],
    color: "green",
    value: 50
  },
  {
    id: 182,
    country: "Tunisia",
    coordinates: [34, 9],
    color: "green",
    value: 50
  },
  {
    id: 183,
    country: "Turkey",
    coordinates: [39, 35],
    color: "green",
    value: 50
  },
  {
    id: 184,
    country: "Taiwan",
    coordinates: [23.5, 121],
    color: "green",
    value: 50
  },
  {
    id: 185,
    country: "Tanzania",
    coordinates: [-6, 
      35],
    color: "green",
    value: 50
  },
  {
    id: 186,
    country: "Uganda",
    coordinates: [1, 32],
    color: "green",
    value: 50
  },
  {
    id: 187,
    country: "Ukraine",
    coordinates: [49, 32],
    color: "green",
    value: 50
  },
  {
    id: 188,
    country: "Uruguay",
    coordinates: [-33, -56],
    color: "green",
    value: 50
  },
  {
    id: 189,
    country: "USA",
    coordinates: [38, -97],
      color: "green",
      value: 50
  },
  {
    id: 190,
    country: "Uzbekistan",
    coordinates: [41, 64],
    color: "green",
    value: 50
  },
  {
    id: 191,
    country: "Vatican City",
    coordinates: [41.9, 12.45],
    color: "green",
    value: 50
  },
  {
    id: 192,
    country: "Venezuela",
    coordinates: [8, -66],
    color: "green",
    value: 50
  },
  {
    id: 193,
    country: "British Virgin Islands",
    coordinates: [18.431383, -64.62305],
    color: "green",
    value: 50
  },
  {
    id: 194,
    country: "Vietnam",
    coordinates: [16.16666666, 107.83333333],
    color: "green",
    value: 50
  },
  {
    id: 195,
    country: "Vanuatu",
    coordinates: [-16, 167],
    color: "green",
    value: 50
  },
  {
    id: 196,
    country: "Wallis and Futuna",
    coordinates: [-16, 167],
    color: "green",
    value: 50
  },
  {
    id: 197,
    country: "Samoa",
    coordinates: [-13.58333333, -172.33333333],
    color: "green",
    value: 50
  },
  {
    id: 198,
    country: "Yemen",
    coordinates: [15, 48],
    color: "green",
    value: 50
  },
  {
    id: 199,
    country: "South Africa",
    coordinates: [-29, 24],
    color: "green",
    value: 50
  },
  {
    id: 200,
    country: "Zambia",
    coordinates: [-15, 30],
    color: "green",
    value: 50
  },
  {
    id: 201,
    country: "Zimbabwe",
    coordinates: [-20, 30],
    color: "green",
    value: 50
  },

];

db.Marker
  .remove({})
  .then(() => db.Marker.collection.insertMany(markerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });