//
var countryToCurrency = {
  AD: "EUR",
  AE: "AED",
  AF: "AFN",
  AG: "XCD",
  AI: "XCD",
  AL: "ALL",
  AM: "AMD",
  AN: "ANG",
  AO: "AOA",
  AQ: "USD",
  AR: "ARS",
  AS: "USD",
  AT: "EUR",
  AU: "AUD",
  AW: "AWG",
  AX: "EUR",
  AZ: "AZN",
  BA: "BAM",
  BB: "BBD",
  BD: "BDT",
  BE: "EUR",
  BF: "XOF",
  BG: "BGN",
  BH: "BHD",
  BI: "BIF",
  BJ: "XOF",
  BL: "EUR",
  BM: "BMD",
  BN: "BND",
  BO: "BOB",
  BQ: "USD",
  BR: "BRL",
  BS: "BSD",
  BT: "BTN",
  BV: "NOK",
  BW: "BWP",
  BY: "BYN",
  BZ: "BZD",
  CA: "CAD",
  CC: "AUD",
  CD: "CDF",
  CF: "XAF",
  CG: "CDF",
  CH: "CHF",
  CI: "XOF",
  CK: "NZD",
  CL: "CLP",
  CM: "XAF",
  CN: "CNY",
  CO: "COP",
  CR: "CRC",
  CU: "CUC",
  CV: "CVE",
  CW: "ANG",
  CX: "AUD",
  CY: "EUR",
  CZ: "CZK",
  DE: "EUR",
  DJ: "DJF",
  DK: "DKK",
  DM: "DOP",
  DO: "DOP",
  DZ: "DZD",
  EC: "USD",
  EE: "EUR",
  EG: "EGP",
  EH: "MAD",
  ER: "ERN",
  ES: "EUR",
  ET: "ETB",
  FI: "EUR",
  FJ: "FJD",
  FK: "FKP",
  FM: "USD",
  FO: "DKK",
  FR: "EUR",
  GA: "XAF",
  GB: "GBP",
  GD: "XCD",
  GE: "GEL",
  GF: "EUR",
  GG: "GBP",
  GH: "GHS",
  GI: "GIP",
  GL: "DKK",
  GM: "GMD",
  GN: "GNF",
  GP: "EUR",
  GQ: "XAF",
  GR: "EUR",
  GS: "FKP",
  GT: "GTQ",
  GU: "USD",
  GW: "XOF",
  GY: "GYD",
  HK: "HKD",
  HM: "AUD",
  HN: "HNL",
  HR: "EUR",
  HT: "HTG",
  HU: "HUF",
  ID: "IDR",
  IE: "EUR",
  IL: "ILS",
  IM: "GBP",
  IN: "INR",
  IO: "USD",
  IQ: "IQD",
  IR: "IRR",
  IS: "ISK",
  IT: "EUR",
  JE: "GBP",
  JM: "JMD",
  JO: "JOD",
  JP: "JPY",
  KE: "KES",
  KG: "KGS",
  KH: "KHR",
  KI: "AUD",
  KM: "KMF",
  KN: "XCD",
  KP: "KPW",
  KR: "KRW",
  KW: "KWD",
  KY: "KYD",
  KZ: "KZT",
  LA: "LAK",
  LB: "LBP",
  LC: "XCD",
  LI: "CHF",
  LK: "LKR",
  LR: "LRD",
  LS: "LSL",
  LT: "EUR",
  LU: "EUR",
  LV: "EUR",
  LY: "LYD",
  MA: "MAD",
  MC: "EUR",
  MD: "MDL",
  ME: "EUR",
  MF: "EUR",
  MG: "MGA",
  MH: "USD",
  MK: "MKD",
  ML: "XOF",
  MM: "MMK",
  MN: "MNT",
  MO: "MOP",
  MP: "USD",
  MQ: "EUR",
  MR: "MRU",
  MS: "XCD",
  MT: "EUR",
  MU: "MUR",
  MV: "MVR",
  MW: "MWK",
  MX: "MXN",
  MY: "MYR",
  MZ: "MZN",
  NA: "NAD",
  NC: "XPF",
  NE: "NGN",
  NF: "AUD",
  NG: "NGN",
  NI: "NIO",
  NL: "EUR",
  NO: "NOK",
  NP: "NPR",
  NR: "AUD",
  NU: "NZD",
  NZ: "NZD",
  OM: "OMR",
  PA: "PAB",
  PE: "PEN",
  PF: "XPF",
  PG: "PGK",
  PH: "PHP",
  PK: "PKR",
  PL: "PLN",
  PM: "EUR",
  PN: "NZD",
  PR: "USD",
  PS: "ILS",
  PT: "EUR",
  PW: "USD",
  PY: "PYG",
  QA: "QAR",
  RE: "EUR",
  RO: "RON",
  RS: "RSD",
  RU: "RUB",
  RW: "RWF",
  SA: "SAR",
  SB: "SBD",
  SC: "SCR",
  SD: "SDG",
  SE: "SEK",
  SG: "SGD",
  SH: "SHP",
  SI: "EUR",
  SJ: "NOK",
  SK: "EUR",
  SL: "SLL",
  SM: "EUR",
  SN: "XOF",
  SO: "SOS",
  SR: "SRD",
  SS: "SSP",
  ST: "STN",
  SV: "USD",
  SX: "ANG",
  SY: "SYP",
  SZ: "SZL",
  TC: "USD",
  TD: "XAF",
  TF: "EUR",
  TG: "XOF",
  TH: "THB",
  TJ: "TJS",
  TK: "NZD",
  TL: "USD",
  TM: "TMT",
  TN: "TND",
  TO: "TOP",
  TR: "TRY",
  TT: "TTD",
  TV: "AUD",
  TW: "TWD",
  TZ: "TZS",
  UA: "UAH",
  UG: "UGX",
  UM: "USD",
  US: "USD",
  UY: "UYU",
  UZ: "UZS",
  VA: "EUR",
  VC: "XCD",
  VE: "VES",
  VG: "USD",
  VI: "USD",
  VN: "VND",
  VU: "VUV",
  WF: "XPF",
  WS: "USD",
  YE: "YER",
  YT: "EUR",
  ZA: "ZAR",
  ZM: "ZMW",
  ZW: "ZWL",
  default: "USD",
};
//
var fromCurrency = document.querySelector(".fromCurrency");
var toCurrency = document.querySelector(".toCurrency");
var countryCodEl = document.querySelector(".country-option");

// Testing api to see the results
var url = `https://www.travel-advisory.info/api`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // Results object
    var results = data.data;
    console.log(results);
    // Calling function to append country options and process map country to currency
    // console.log(displayCountryInfo(results));
  });



  function mapCountryToCurrencyField(){
    for (const country in countryToCurrency) {
        if (Object.hasOwnProperty.call(countryToCurrency, country)) {
            const element = countryToCurrency[country];
            
            var currencyfromOptionEl = document.createElement('option');
            currencyfromOptionEl.innerText = element;
            currencyfromOptionEl.setAttribute('value', element)
            fromCurrency.append(currencyfromOptionEl); 
            
            var currencyToOptionEl = document.createElement('option');
            currencyToOptionEl.innerText = element;
            currencyToOptionEl.setAttribute('value', element)
            toCurrency.append(currencyToOptionEl); 

        }
    }
}
var userCurrencyInput = fromCurrency.value;
// console.log(`usser input ${userCurrencyInput}`);


// Exchange API Call
var exchangeURL = `https://v6.exchangerate-api.com/v6/bd30a0f67f97361ae2f2083c/latest/${userCurrencyInput}`;
fetch(exchangeURL)
  .then((response) => response.json())
  .then((currencyData) => {
    var currencyObject = currencyData.conversion_rates;
    mapCountryToCurrency(currencyObject);
  });

var displayCountryInfo = function (results) {
  for (const key in results) {
    if (Object.hasOwnProperty.call(results, key)) {
      // Object of each country (advisory)
      const countryAdvisoryObject = results[key];

      // Name of country
      var countryName = countryAdvisoryObject.name;

      // iso Country Code
      var countryCode = countryAdvisoryObject.iso_alpha2;

      // Creating Option Element and adding country code and name to element value and text content respectively
      var optionEl = document.createElement("option");
      optionEl.textContent = countryName;
      optionEl.setAttribute("value", countryCode);

      // Append the options to the element on html Document
      countryCodEl.append(optionEl);
    }
  }

  var selectedvalue = countryCodEl.value;
  for (const country in countryToCurrency) {
    if (Object.hasOwnProperty.call(countryToCurrency, country)) {
      const selectedCountry = countryToCurrency[country];
      if (selectedvalue === country) {
        // console.log(`this is the one im looking for ${selectedCountry}`);
        return selectedCountry;
      }
    }
  }
};


mapCountryToCurrencyField()

function mapCountryToCurrency(currencyoObject) {
    var selectedCountry = displayCountryInfo();
  for (const key in currencyoObject) {
    if (Object.hasOwnProperty.call(currencyoObject, key)) {
      const element = currencyoObject[key];
        // console.log(element);
        // var currencyFromSelectElement = document.crea 
    }
  }
//   console.log(`this is the passed in country ${selectedCountry}`);
}

countryCodEl.addEventListener(
  "change",
  function (e, results, selectedCountry, currencyoObject) {
    // console.log(e.target)
    displayCountryInfo(results);
    mapCountryToCurrency(currencyoObject, selectedCountry);
  }
);
