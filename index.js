let countryInput = document.getElementById("countryInput");
let myBtn = document.getElementById("myBtn");

let myDiv = document.getElementById("countries")


let countriesApi = () => {
    
    let makeApiCall = fetch(`https://restcountries.com/v3.1/alpha/${countryInput.value}`);

   
    makeApiCall
    .then(function(response){
        console.log("Response from fetch:", response)
        let parsedResponde = response.json();
        console.log(parsedResponde);
        return parsedResponde
    })
    .then((result) => {
        console.log(result)
        printingCountryName(result[0].altSpellings[1])
        printingNeighbours(result[0].borders)
    })
    .catch((error) => {
        console.log("You have an error", error)
    })
};


myBtn.addEventListener("click", function(){
    countriesApi()
});


let printingCountryName = (country) => {
    myDiv.innerHTML = "";
    myDiv.innerHTML += `<h3>Country: ${country}</h3>`
};

let printingNeighbours = (neighbours) => {
    myDiv.innerHTML += `</br> <h3>Neighbours: ${neighbours}</h3>`
};