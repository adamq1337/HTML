

const inputMC = document.getElementById("inputMC");
const displayMC = document.getElementById("displayMC");
const inputNI = document.getElementById("inputNI");

inputMC.addEventListener("input", function () {
    const marketcapValue = inputMC.value;
    displayMC.textContent = "Marketcap value: " + marketcapValue;
});

var nmr = myNumber;

// Get the div by its id
var divElement = document.getElementById("myDiv");

// Set the content of the div
divElement.innerHTML = "The value for number is: " + nmr;



