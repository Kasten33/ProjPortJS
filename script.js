let currentDate = new Date().toLocaleDateString();
let date = document.querySelector("#date");

date.textContent = currentDate;

let currentYear = new Date().getFullYear();
let year = document.querySelector("#year");

year.textContent = currentYear;

//-----------------------------------------------------------------------------------------



let cardsList = document.querySelector(".cards");
let cards = [];
let newCard1 = {title: "wheather app", url: "https://kasten33.github.io/WeatherApp/", text: "cool" }
let newCard2 = {title: "todo list", url: "https://kasten33.github.io/todo/", text: "cool project"}

cards.push(newCard1)
cards.push(newCard2)

cards.map((item) => {
 
    
        
        
        
        cardsList.innerHTML+=(`
        <div class="cards">
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <h2>${item.title}</h2>
                    </div>
                    <div class="card-back">
                        <a href="${item.url}">${item.text}</a>
                    </div>
            
                </div>
            </div>
        </div>`)



});




// push to array cards. put whats in the array into a card. whats pushed needs to be a title and a link to a git page.