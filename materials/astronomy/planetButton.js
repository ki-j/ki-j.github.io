// FOR EACH PLANET, THERE IS A HEADER, MAIN TEXT, IMAGE, STATS, AND THREE FUN FACTS

// MERCURY
const mercHead = "MERCURY" // the title (aka. the planet name)
const mercText = "Some text about Mercury..." // the main text about the planet
const mercImg = "mercury.png" // the filepath to the image which will accompany the planet information
const mercStats = "Statistics about Mercury" // stats to be compared to other planets
const mercF1 = "A fact about Mercury" // first fun fact
const mercF2 = "Another fact about Mercury" // second fun fact
const mercF3 = "A final fact about Mercury" // third fun fact

// VENUS
const venHead = "VENUS" // the title (aka. the planet name)
const venText = "Some text about Venus..." // the main text about the planet
const venImg = "venus.png" // the filepath to the image which will accompany the planet information
const venStats = "Statistics about Venus" // stats to be compared to other planets
const venF1 = "A fact about Venus" // first fun fact
const venF2 = "Another fact about Venus" // second fun fact
const venF3 = "A final fact about Venus" // third fun fact

// EARTH 
const earHead = "EARTH" // the title (aka. the planet name)
const earText = "Some text about Earth..." // the main text about the planet
const earImg = "earth.png" // the filepath to the image which will accompany the planet information
const earStats = "Statistics about Earth" // stats to be compared to other planets
const earF1 = "A fact about Earth" // first fun fact
const earF2 = "Another fact about Earth" // second fun fact
const earF3 = "A final fact about Earth" // third fun fact

// MARS
const marHead = "MARS" // the title (aka. the planet name)
const marText = "Some text about Mars..." // the main text about the planet
const marImg = "mars.png" // the filepath to the image which will accompany the planet information
const marStats = "Statistics about Mars" // stats to be compared to other planets
const marF1 = "A fact about Mars" // first fun fact
const marF2 = "Another fact about Mars" // second fun fact
const marF3 = "A final fact about Mars" // third fun fact

// JUPITER
const jupHead = "JUPITER" // the title (aka. the planet name)
const jupText = "Some text about Jupiter..." // the main text about the planet
const jupImg = "jupiter.png" // the filepath to the image which will accompany the planet information
const jupStats = "Statistics about Jupiter" // stats to be compared to other planets
const jupF1 = "A fact about Jupiter" // first fun fact
const jupF2 = "Another fact about Jupiter" // second fun fact
const jupF3 = "A final fact about Jupiter" // third fun fact

// SATURN
const satHead = "SATURN" // the title (aka. the planet name)
const satText = "Some text about Saturn..." // the main text about the planet
const satImg = "saturn.png" // the filepath to the image which will accompany the planet information
const satStats = "Statistics about Saturn" // stats to be compared to other planets
const satF1 = "A fact about Saturn" // first fun fact
const satF2 = "Another fact about Saturn" // second fun fact
const satF3 = "A final fact about Saturn" // third fun fact

// URANUS
const urHead = "URANUS" // the title (aka. the planet name)
const urText = "Some text about Uranus..." // the main text about the planet
const urImg = "uranus.png" // the filepath to the image which will accompany the planet information
const urStats = "Statistics about Uranus" // stats to be compared to other planets
const urF1 = "A fact about Uranus" // first fun fact
const urF2 = "Another fact about Uranus" // second fun fact
const urF3 = "A final fact about Uranus" // third fun fact

// NEPTUNE
const nepHead = "NEPTUNE" // the title (aka. the planet name)
const nepText = "Some text about Neptune..." // the main text about the planet
const nepImg = "neptune.png" // the filepath to the image which will accompany the planet information
const nepStats = "Statistics about Neptune" // stats to be compared to other planets
const nepF1 = "A fact about Neptune" // first fun fact
const nepF2 = "Another fact about Neptune" // second fun fact
const nepF3 = "A final fact about Neptune" // third fun fact


let planets = [mercHead, venHead, earHead, marHead, jupHead, satHead, urHead, nepHead];
let planetClasses = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
let planetIms = ["mercury.png", "venus.png", "earth.png", "mars.png", "jupiter.png", "saturn.png", "uranus.png", "neptune.png"]
let planetTexts = [mercText, venText, earText, marText, jupText, satText, urText, nepText]
let planetStats = [mercStats, venStats, earStats, marStats, jupStats, satStats, urStats, nepStats]
let planetSectIms = [mercImg, venImg, earImg, marImg, jupImg, satImg, urImg, nepImg]
let fact1 = [mercF1, venF1, earF1, marF1, jupF1, satF1, urF1, nepF1]
let fact2 = [mercF2, venF2, earF2, marF2, jupF2, satF2, urF2, nepF2]
let fact3 = [mercF3, venF3, earF3, marF3, jupF3, satF3, urF3, nepF3]

// planet button
let planIm = document.getElementById("planetImage");
let planetButton = document.getElementById("planetButton"); // button to change the page to give information of a specific planet
function planetChoice(k) {
    document.getElementById("planetPage").classList = planetClasses[k];
    document.getElementById("planetHeader").innerHTML = planets[k];
    document.getElementById("planetText").innerHTML = planetTexts[k];
    document.getElementById("planetSectImage").src = planetSectIms[k];
    document.getElementById("planetStats").innerHTML = planetStats[k];
    document.getElementById("planetF1").innerHTML = fact1[k];
    document.getElementById("planetF2").innerHTML = fact2[k];
    document.getElementById("planetF3").innerHTML = fact3[k];
    return
}
planetButton.addEventListener("click", () => { // when you click on a planet button...
    if (planIm.src === planetIms[0]) {planetChoice(0)} // MERCURY
    else if (planIm.src === planetIms[1]) {planetChoice(1)} // VENUS
    else if (planIm.src === planetIms[2]) {planetChoice(2)} // EARTH
    else if (planIm.src === planetIms[3]) {planetChoice(3)} // MARS
    else if (planIm.src === planetIms[4]) {planetChoice(4)} // JUPITER
    else if (planIm.src === planetIms[5]) {planetChoice(5)} // SATURN
    else if (planIm.src === planetIms[6]) {planetChoice(6)} // URANUS
    else {planetChoice(7)}; // NEPTUNE
})

// button which changes the value of the planet button
let changePlanet = document.getElementById("changePlanet");
                
let i = 0;
changePlanet.addEventListener("click", () => { // when you click on the planet changer button...
    if (i < 8) { // ...if we haven't gone through all the planets...
        planIm.src = planetIms[i++]; // ...go to the next planet if the button is clicked
    } else { // ...otherwise...
        i = 0 // start again with mercury
    }
})