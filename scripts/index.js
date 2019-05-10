// console.log(`There are ${characters.length} characters in the array.`);

console.log(characters[0]);

//////////////////////////////////////////////////////////////
//What is the total number of characters?/////////////////////
//////////////////////////////////////////////////////////////


total = 0;
characters.forEach(function(character){
    total ++
})
console.log(`Total number of characters: ${total}`);

//////////////////////////////////////////////////////////////
//How many character names start with "A"?////////////////////
//////////////////////////////////////////////////////////////

let aCharactersArray = [];

characters.forEach(function(character){
    if (character.name[0] == "A") {
        aCharactersArray.push(character.name);
    }
});

console.log(`There are ${aCharactersArray.length} characters who's name starts with "A"`);

//////////////////////////////////////////////////////////////
//How many character names start with "Z"?////////////////////
//////////////////////////////////////////////////////////////

let zCharacterCounter = 0;

characters.forEach(function(character){
    if (character.name[0] == "Z"){
        zCharacterCounter += 1;
    }
})

console.log(`There are ${zCharacterCounter} character names that start with Z.`)

//////////////////////////////////////////////////////////////
//How many character are dead?////////////////////////////////
//////////////////////////////////////////////////////////////

let deadCharacters = [];

characters.forEach(function(character){
    if (character.died[0] != ""){
        deadCharacters.push(character.died);
    }
})

console.log(`There are ${deadCharacters.length} dead characters`);

//////////////////////////////////////////////////////////////
//Who has the most titles?////////////////////////////////////
//////////////////////////////////////////////////////////////

let mostTitles = 0;
let characterWithMostTitles = "";

characters.forEach(function(character){
    if (character.titles.length > mostTitles){
        mostTitles = character.titles.length;
        characterWithMostTitles = character.name;

        // mostTitles = character.name[0];
    }
})
console.log(`Largest amount of titles: ${mostTitles}`)
console.log(`Character With Most Titles: ${characterWithMostTitles}`);


//////////////////////////////////////////////////////////////
//How many Are Valyrian?//////////////////////////////////////
//////////////////////////////////////////////////////////////

let valyrianCount = 0;
let valyrianArray = [];

characters.forEach(function(character){
    if (character.culture == "Valyrian"){
        // valyrianArray.push(character.name);
        valyrianCount += 1;
    }
})

console.log(`Valyrian count: ${valyrianCount}`);
console.log(`Valyrian Array : ${valyrianArray}`);

//////////////////////////////////////////////////////////////
//What actor play "Hot Pie"?//////////////////////////////////
//////////////////////////////////////////////////////////////

let hotpie = [];

characters.forEach(function(character){
    if (character.name == "Hot Pie"){
        hotpie.push(character.playedBy);
    }
})

console.log(`Actor that plays "Hot Pie" is ${hotpie}`)

//////////////////////////////////////////////////////////////
// How many characters are not in the tv show?////////////////
//////////////////////////////////////////////////////////////

noActor = 0;

characters.forEach(function(character){
    if (character.playedBy[0] == ""){
        noActor += 1;
    }
})

console.log(`There are ${noActor} characters that are not played by anybody.`)

//////////////////////////////////////////////////////////////
// Produce a list characters with the last name "Targaryen"///
//////////////////////////////////////////////////////////////

numTargaryen = [];

characters.forEach(function(character){
    if ("Targaryen" in character.name){
        numTargaryen.push(character.name);
    }
})

console.log(`There are ${numTargaryen.length} Targaryens in GOT.`);