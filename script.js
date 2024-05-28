let key = '0a70cc05ea344d5bb33fcd2a5927e460';

let cardData = document.querySelector(".cardData");
//fetch function is used to fetch data from any api
//async await will wait till we not get data

let SearchBtn = document.getElementById("searchBtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");
let getData = async (input) => {
  let res = await fetch(`
    https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
  let jsonData = await res.json();

//   console.log(jsonData);
searchType.innerHTML = "Search : " + input;
inputData.value = "";
cardData.innerHTML="";

  jsonData.articles.forEach(function(article){
    console.log(article);

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);
  
    divs.innerHTML = `
    <img src="${article.urlToImage}" alt="not available">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `

    divs.addEventListener("click" , function(){
        window.open(article.url);
    })
  })
 
};

window.addEventListener("load" , function(){
    getData("India")
})

window.


SearchBtn.addEventListener("click" , function(){
    let inputText = inputData.value;

    getData(inputText);
    
})


function navClick(item){
    if(item == "politics"){
        document.getElementById("politics").style.color="rgb(91, 115, 224)";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("finance").style.color="white";
    }
    if(item == "sports"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="rgb(91, 115, 224)";
        document.getElementById("technology").style.color="white";
        document.getElementById("finance").style.color="white";
    }
    if(item == "technology"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="rgb(91, 115, 224)";
        document.getElementById("finance").style.color="white";
    }
    if(item == "finance"){
        document.getElementById("politics").style.color="white";
        document.getElementById("sports").style.color="white";
        document.getElementById("technology").style.color="white";
        document.getElementById("finance").style.color="rgb(91, 115, 224)";
    }
    getData(item);
}
