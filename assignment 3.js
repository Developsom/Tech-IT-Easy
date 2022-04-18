//Opdracht 3A
//const brands = inventory.map((invent) => {
//    return invent.brand;
//})
//console.log(brands);

//const tvBrands = document.getElementById('tvBrands');
//tvBrands.textContent = brands

//Opdracht 3B
//function arrayTVObject(arrayTvObjects) {
//    const tvObject = arrayTvObjects.map((object) => {
//
//    })
//}

//////////////// BOVENSTAANDE CODE IS ZONDER UITWERKINGEN REPOSITORY \\\\\\\\\\\\\ VANAF HIER IS HET MET UITWERKINGEN

//PSEUDO-CODE
// maak een element in de HTML die we als 'anker' kunnen gebruiken in ons script
// sla de referentie naar dat element op in ons script
// maak een variabele waar we alle list-items in op kunnen slaan
// loop over iedere entry van de array heen
// geef voor iedere tv een <li>-element terug met daarin de merknaam van de tv
// Stop deze list-items in het 'anker' element

//const brandsList = document.getElementById('tvBrands');
//const listItems = inventory.map((tv) => {
 //   return `<li>${tv.brand}</li>`;
//});
//brandsList.innerHTML = `${listItems.join('')}`;

// ** -------------------------------------------------- **
// 3b: chrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht.
// ** -------------------------------------------------- **

function createBrandList(tvArray) {
    const brandsList = document.getElementById('tvBrands');

    const listItems = tvArray.map((tv) => {
        return `<li>${tv.brand}</li>`;
    });

    brandsList.innerHTML = `${listItems.join('')}`;
}
createBrandList(inventory);