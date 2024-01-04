// 
var countryCodEl = document.querySelector('.country-option');

// Testing api to see the results

var url = `https://www.travel-advisory.info/api`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.data);
    
    // Results object
    var results = data.data;

    // Loop to create options and append to html

    for (const key in results) {
        if (Object.hasOwnProperty.call(results, key)) {
            
            const value = results[key];
            var countryName = value.name;
             // iso value
             var countryCode = value.so_alpha2;
             // console.log(countryName);


             // Creatong option element
             var optionEl = document.createElement('option');
             optionEl.textContent = countryName;
             optionEl.setAttribute('value', countryCode);
             // Append the options to the element on html Document
             countryCodEl.append(optionEl);
        }
    }
  });
