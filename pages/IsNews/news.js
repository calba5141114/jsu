
const newsContainer = document.getElementById('newsContainer');

const url = 'https://newsapi.org/v2/top-headlines?' +
    'country=il&' +
    'apiKey=3b229e5fa8824687b484a6b42baac102';

window.sr = ScrollReveal();
sr.reveal('.foo');
sr.reveal('.bar');

const backHome = document.getElementById('backHome');


// fetching articles from the news api
fetch(url)
    .then(data => data.json())
    .then(fmtData => FmtAndPrnt(fmtData))


function FmtAndPrnt(jsonFile) {

    // Temporary holding place for our Txt
    let printData = " ";
    let list = jsonFile.articles;
    const totalResults = jsonFile.totalResults;


    let articleCount = document.getElementById('articleCount');

    articleCount.innerHTML = ` <p>${totalResults}</p>  `;


    // printing out and formatiting all the recieved articles.

    for (let index in list) {


        if(list[index].urlToImage <= 0){
            list[index].urlToImage = '';
        }

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