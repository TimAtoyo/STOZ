// Testing api to see the results

var url = `https://www.travel-advisory.info/api`;

fetch(url)
.then( response => response.json())
.then(data => log(data))