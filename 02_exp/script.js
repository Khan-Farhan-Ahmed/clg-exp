import {
    tajMahal, hawaMahal, indiaGate, gateWayOfIndia, victoriaMemorial, charminar, ajmerSharifDargah, kapaleeshwararTemple, bangalorePalace, mysorePalace
} from "./image.js"

const information = {
    Agra: {
        name: "Taj Mahal",
        image: tajMahal,
        description: "The iconic white marble mausoleum built by Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal."
    },
    Jaipur: {
        name: "Hawa Mahal",
        image: hawaMahal,
        description: "Also called the Palace of Winds, it is a five-story pink sandstone structure built for royal women to observe street life."
    },
    Delhi: {
        name: "India Gate",
        image: indiaGate,
        description: "A war memorial located in the heart of Delhi, honoring soldiers who died in World War I."
    },
    Mumbai: {
        name: "Gateway of India",
        image: gateWayOfIndia,
        description: "Built during the 20th century in honor of King George V and Queen Mary, overlooking the Arabian Sea."
    },
    Kolkata: {
        name: "Victoria Memorial",
        image: victoriaMemorial,
        description: "A white marble monument built in memory of Queen Victoria, surrounded by lush gardens."
    },
    Hyderabad: {
        name: "Charminar",
        image: charminar,
        description: "A 16th-century mosque with four grand arches and minarets, symbol of Hyderabad city."
    },
    Ajmer: {
        name: "Ajmer Sharif Dargah",
        image: ajmerSharifDargah,
        description: "A Sufi shrine dedicated to Moinuddin Chishti, attracting pilgrims from all over the world."
    },
    Chennai: {
        name: "Kapaleeshwarar Temple",
        image: kapaleeshwararTemple,
        description: "A historic Hindu temple dedicated to Lord Shiva, known for its Dravidian architecture and colorful gopuram."
    },
    Bangalore: {
        name: "Bangalore Palace",
        image: bangalorePalace,
        description: "A Tudor-style palace built in 1887, famous for its wood carvings, expansive gardens, and royal architecture."
    },
    Mysore: {
        name: "Mysore Palace",
        image: mysorePalace,
        description: "The historic palace of the Wodeyar dynasty, known for its grandeur, ornate interiors, and Dasara festival celebrations."
    }
};

const city = document.getElementById('city')
const monument = document.querySelector('.monument');
const image = document.getElementById('monumentImage')
const nameEl = document.querySelector("#monumentName")
const descriptionEl = document.querySelector(".description")
// getelement by classname collection return krta hai isiliye isko yahan use nhi krna 
// const name = document.getElementsByClassName('name')
// const description = document.getElementsByClassName('description')

city.addEventListener('change', () => {
    const selectedCity = city.value;

    if(selectedCity && information[selectedCity]) {
        const thisMonument = information[selectedCity];

        monument.style.background ="linear-gradient(to right, #11161e, #196abb)";
        nameEl.textContent = thisMonument.name;
        image.src = thisMonument.image;
        descriptionEl.textContent = thisMonument.description;
    }
    else {
        monument.style.background = ""
        nameEl.textContent = "";
        image.src = "";
        descriptionEl.textContent = "";
    }
})