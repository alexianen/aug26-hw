let listaCumparaturi = ["apa", "paine", "suc", "salam", "cascaval", "rosii", "detergent", "sapun"];
let listaInitiala = [...listaCumparaturi];

//1
function sorteazaAlfabetic() {
    listaCumparaturi.sort();
    console.log(`Lista initiala a fost sortata in ordine alfabetica: ${listaCumparaturi}.`);
    return;
}
//sorteazaAlfabetic(); 

//2
function cautaProdus(produs) {
    produs = produs.toLowerCase();
    let index = listaCumparaturi.indexOf(produs);
    if (listaCumparaturi.includes(produs)) {
        console.log(`Produsul "${produs}" se afla pe locul ${index+1}.`);
        return;
    } 
    else {
        console.log(`Produsul "${produs}" nu se afla in lista de cumparaturi.`);
        return;
    }
}
//cautaProdus("Cascaval"); 


//3
function adaugaProdus(produs2) {
    produs2 = produs2.toLowerCase();
    if (listaCumparaturi.includes(produs2)) {
        console.log(`Acest produs se afla deja in lista de cumparaturi.`);
        return;
    }
    else {
        listaCumparaturi.push(produs2);
        console.log(`Produsul "${produs2}" a fost adaugat in lista de cumparaturi: ${listaCumparaturi}.`);
        return;
    }
} 
//adaugaProdus("cereale");


//4
function eliminaProdus(produs3) {
    produs3 = produs3.toLowerCase();
    let condition = listaCumparaturi.includes(produs3);
    let deletedItem = listaCumparaturi.indexOf(produs3);
    if (condition === true) {
        listaCumparaturi.splice(deletedItem, 1);        
        console.log(`Produsul "${produs3}" a fost eliminat din lista: ${listaCumparaturi}.`);
        return;
    }
    else {
        console.log("Acest produs nu se afla in lista de cumparaturi.");
        return;
    }
}
//eliminaProdus("suc");

//Comenzi

sorteazaAlfabetic();
cautaProdus("detergent");
adaugaProdus("cereale");
eliminaProdus("suc");

console.log(`Lista initiala de cumparaturi a fost: ${listaInitiala}; iar lista finala este: ${listaCumparaturi}.`);


