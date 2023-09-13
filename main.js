"use strict"
// declaration of variables
const quotesContainer = document.getElementById("Quotes");
const quotesBtn = document.getElementById("btn");
function fetchQuotes() {
    quotesContainer.classList.remove("fade");
    fetch("	https://api.themotivate365.com/stoic-quote")
.then(data=>data.json())
.then(item=>{
    quotesContainer.textContent = `${item.quote}`;
    quotesContainer.classList.add("fade");
});
}
quotesBtn.addEventListener("click",fetchQuotes);
fetchQuotes();


// fetch("	https://api.themotivate365.com/stoic-quote")
// .then(response=>response.json())
// // console.log(data)
// .then(data=>{console.log(data)})