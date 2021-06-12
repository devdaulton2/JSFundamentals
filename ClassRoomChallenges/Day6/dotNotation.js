let aboutMe = {
    name: 'Aryn Daulton',
    age: 27,
    numberOfSiblings: 9,
    pets: true,
    petNames: ["Drax", "Sonny", "Badgie"],
    mostRecentMovieWatched: 'Raya and the Last Dragon',
    carsOwned: [{make: "Jeep", model: "Commander"}] ,
    favoriteSinger: 'Beyonce',
};

let aboutSterling = {
    name: 'Sterling',
    age: 38,
    numberOfSiblings: 3,
    pets: true,
    petNames: ["Boots", "Purdy", "Kiki", "Tila Tequila", "Cody"],
    mostRecentMovieWatched: "Howl's Moving Castle",
    carsOwned: [{make: 'Toyota', model: 'Avalon',}],
    favoriteSinger: 'Doja Cat',
};

let aboutStephanie = {
    name: 'Stephanie',
    age: 38,
    numberOfSiblings: 1,
    pets: true,
    petNames: ["Ampersand", "Pendleton", "Rowsdower", "Winifred"],
    mostRecentMovieWatched: 'Salon Moon Eternal Part 1',
    carsOwned: [{make: 'Jeep', model: 'Renegade'}],
    favoriteSinger: 'Credence Clear Water Rivival',
}

let allOfUs = [];

allOfUs.push(aboutStephanie, aboutSterling, aboutMe);

console.log(allOfUs);

console.log(`In my group, we have ${aboutStephanie.name}, ${aboutSterling.name}, and ${aboutMe.name}. ${aboutStephanie.name} has started ${aboutStephanie.mostRecentMovieWatched}, ${aboutSterling.name} has a finished ${aboutSterling.mostRecentMovieWatched}, and ${aboutMe.name} has just finished ${aboutMe.mostRecentMovieWatched} for the 20th time. ${aboutStephanie.name} loves to listen to ${aboutStephanie.favoriteSinger}, ${aboutSterling.name} keeps it lit with ${aboutSterling.favoriteSinger}, while ${aboutMe.name} enjoys the finer things with ${aboutMe.favoriteSinger}.`)

console.log(allOfUs[2].name);

console.log(allOfUs[2]["name"]);