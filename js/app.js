'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS

let slideIndex = 0;
let allFavorites = [];
let allRestaurants = [
new Restaurant ("Shiro\'s", 'imgs/geoDuck_shiro.jpeg',"Japanese", "2401 2nd Ave. Seattle, WA 98121", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Ishoni Yakiniku", 'imgs/japaneseWagyu_ishoni.jpeg', "Japanese", "2401 2nd Ave. Seattle, WA 98121", ['vegan', 'vegetarian', 'gluten-free'], 'Any'),
new Restaurant ("Kizuki Ramen", 'imgs/spicyramen_kizuki.jpeg', "Japanese", "320 E. Pine St. Seattle, WA 98122", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Fogon Cocina", 'imgs/streetTacos_fogon.jpeg', "Mexican", "600 E. Pine St. Seattle, WA 98122", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Fonda la Catrina", 'imgs/chileRelleno_catrina.jpeg', "Mexican", "5905 Airport Way S. Seattle, WA 98108", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("La Carta de Oaxaca", 'imgs/birria_oaxaca.jpeg', "Mexican", "5431 Ballard Ave. Seattle, WA 98107", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Cafe Turko", 'imgs/muhammara_turko.jpeg',  "Mediterranean", "750 N. 34th St., Seattle, WA 98103", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Momnoon", 'imgs/friedCauli_mamnoon.jpeg', "Mediterranean", "1508 Melrose Ave. Seattle, WA 98122", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Petra Bistro", 'imgs/mezzaTray_petra.jpeg', "Mediterranean", "2501 4th Ave., Seattle, WA 98121", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Taste of India", 'imgs/samosa_india.jpeg', "Indian", "5517 Roosevelt Way, Seattle, WA 98105",['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Daawat Grill", 'imgs/vegetableKofta_daawat.jpeg', "Indian", "820 Pike St., Seattle, WA 98101", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Nirmal\'s", 'imgs/crabCurry_nirmals.jpeg', "Indian", "106 Occidental Ave., Seattle, WA 98104", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Applebee\'s", 'imgs/chickenWontonTacos_apple.jpeg', "American", "13856 Bel Red Rd., Bellevue, WA 90005", ['gluten-free'], 'Any'),
new Restaurant ("Denny\'s", 'imgs/moonsOverMyHammy_dennys.jpeg', "American", "2762 4th Ave., Seattle, WA 98134", ['gluten-free'], 'Any'),
new Restaurant ("Red Lobster", 'imgs/endlessShrimp_redLobster.jpeg', "American", "4231 196th St., Lynwood, WA 98036", ['gluten-free'], 'Any'),
];


//--------------------CONSTRUCTORS

function Restaurant (name, src, cuisine, address, preferences, any){
  this.name = name;
  this.src = src;
  this.cuisine = cuisine;
  this.address = address; 
  this.preferences = preferences;
  this.any = any;
}

//--------------------CONSTRUCTOR METHODS


//--------------------FUNCTIONS

function saveRestaurants () {
  let stringify = JSON.stringify(allFavorites);
  localStorage.setItem('allFavorites', stringify);
}

function getRestaurants() {
  let getFavorites = localStorage.getItem('allFavorites');
  if (getFavorites){
    let parsedItems = JSON.parse(getFavorites);
    allFavorites = parsedItems;
  }
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

//--------------------EVENT LISTENERS

let form = document.getElementById("options");
form.addEventListener('submit', displayRestaurants);


//--------------------EVENT HANDLERS

function displayRestaurants(e){
  e.preventDefault();
  let options = e.target;
  let cuisineType = options.cuisinetype.value;
  let checkedPreference = 0;
  let preferences = options.preference;

  for (let i = 0; i < preferences.length; i++) {
    let preference = preferences[i];
    if (preference.checked) {
      checkedPreference = preference.value;
    }
  }
  
  let results = document.getElementById("results");
  results.innerHTML = '';

    for (let i = 0; i < allRestaurants.length; i++){
      if (allRestaurants[i].cuisine == cuisineType && allRestaurants[i].preferences.includes(checkedPreference) || allRestaurants[i].any == cuisineType && allRestaurants[i].preferences.includes(checkedPreference) || allRestaurants[i].any == cuisineType && checkedPreference == 0 || allRestaurants[i].cuisine == cuisineType && checkedPreference == 0){
        let restaurant = document.createElement('ul');
        restaurant.setAttribute('id', 'restaurantOptions');
    
        let title = document.createElement('li');
        title.setAttribute('id', 'restaurantTitle');

        let img = document.createElement('li');
        let createImg = document.createElement('img');
        createImg.setAttribute('src', `${allRestaurants[i].src}`);
        createImg.setAttribute('id', 'foodImgs');
        img.appendChild(createImg);

        let address = document.createElement('li');
        let categories = document.createElement('li');

        let favorites = document.createElement('li');
        let input = document.createElement('button');
        
        input.setAttribute('class', 'favorites');
        input.setAttribute('id', allRestaurants[i].name);
        input.innerText = 'Favorite';

        input.addEventListener('click', bookmark);

        favorites.appendChild(input);

        title.innerText = allRestaurants[i].name;
        address.innerText = allRestaurants[i].address;
        categories.innerText = `${allRestaurants[i].cuisine}, ${allRestaurants[i].preferences}`;

        restaurant.appendChild(title);
        restaurant.appendChild(img);
        restaurant.appendChild(address);
        restaurant.appendChild(categories);
        restaurant.appendChild(favorites);
        results.appendChild(restaurant);
      } 
      else if (allRestaurants[i].cuisine == cuisineType && allRestaurants[i].preferences.includes(checkedPreference) !== true){
        let message2 = document.createElement('h1');
        message2.innerText = 'There are no restaurants that match your requests!';
        results.appendChild(message2);
        break;
      }
    } 

}

function bookmark (event){
  event.preventDefault();
  for (let i = 0; i < allFavorites.length; i ++){
    if (allFavorites[i].name == event.target.id){
      return;
    }
  }

  for (let i = 0; i < allRestaurants.length; i ++){
    if (allRestaurants[i].name == event.target.id){
      allFavorites.push(allRestaurants[i]);
    }
  }

  saveRestaurants();
}

//--------------------FUNCTION CALLS

showSlides();
getRestaurants();

