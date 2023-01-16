// PVZ

// const getData = async (word) => {
//     try {
//         const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
//         console.log(response);
//         const word_from_api = await response.json();
//         console.log(word_from_api);
//     } catch (error){
//         console.log(error);
//     }
// }

// getData("tree")

console.log('test JS failas');
//1. gauti vieta, kur idesiu foto
const place = document.getElementById('root');
const myButton = document.createElement('button')
place.appendChild(myButton);
myButton.innerText = 'Get doggo'

//1. sukurti img elementa
const img = document.createElement('img');
//2. img prideti i div html
place.appendChild(img);

async function getData(){
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log(data);
    //3. src atributui priskirti reiksme, kuria gauname is API
    document.querySelector('img').src = data.message;
}
//funkcijos iskvietimas
getData();
//4. kas karta, paspaudus mygtuka, keiciasi esama nuotrauka
myButton.addEventListener('click', getData);
//tikrinu ar veikia kodas, nesustoja
console.log('test JS veikia toliau');



