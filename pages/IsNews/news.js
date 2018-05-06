//jshint esversion:6
const newsContainer = document.getElementById('newsContainer');
const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=il&' +
    'apiKey=3b229e5fa8824687b484a6b42baac102';

window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');





const backHome = document.getElementById('backHome');

var request = new XMLHttpRequest();
request.open("GET", url);
request.responseType = "json";
request.send();
request.onload = resp => {
    FmtAndPrnt(resp);
};

/**
 * @param {json} jsonFile - json data we get from the news api
 * This function formats the json and pushes it to the HTML template.
 */
function FmtAndPrnt(jsonFile) {
    // Temporary holding place for our Txt
    var printData = " ";
    let list = jsonFile.target.response.articles;

    for (let index in list) {
        var newsCard = `
<div class="newsCard foo">
<h5> Source: ${list[index].source.name},
${list[index].author}</h5>
<h3>  <a href="${list[index].url}" target="_blank">${list[index].title}</a> </h3>
<h4>${list[index].description}</h4>
<br>
 <img src="${list[index].urlToImage}">
 <br>
 <h5>
Published: ${list[index].publishedAt}</h5>
<div>
`;

        printData += newsCard;
    }
    newsContainer.innerHTML = printData;
}

backHome.onclick = () => {
    window.location = "../home/home.html";
};