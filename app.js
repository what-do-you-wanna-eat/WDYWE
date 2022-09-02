'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS
// array for all the restaurant objects
let allRestaurants = [
// using constructor functions to create restaurants
new Restaurant ("Shiro\'s", "Japanese", "2401 2nd Ave. Seattle, WA 98121", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Ishoni Yakiniku", "Japanese", "2401 2nd Ave. Seattle, WA 98121", ['vegan', 'vegetarian', 'gluten-free'], 'Any'),
new Restaurant ("Kizuki Ramen", "Japanese", "320 E. Pine St. Seattle, WA 98122", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Fogon Cocina", "Mexican", "600 E. Pine St. Seattle, WA 98122", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Fonda la Catrina", "Mexican", "5905 Airport Way S. Seattle, WA 98108", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("La Carta de Oaxaca", "Mexican", "5431 Ballard Ave. Seattle, WA 98107", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Cafe Turko", "Mediterranean", "750 N. 34th St., Seattle, WA 98103", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Momnoon", "Mediterranean", "1508 Melrose Ave. Seattle, WA 98122", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Petra Bistro", "Mediterranean", "2501 4th Ave., Seattle, WA 98121", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Taste of India", "Indian", "5517 Roosevelt Way, Seattle, WA 98105",['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Daawat Grill", "Indian", "820 Pike St., Seattle, WA 98101", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Nirmal\'s", "Indian", "106 Occidental Ave., Seattle, WA 98104", ['vegan', 'vegetarian'], 'Any'),
new Restaurant ("Applebee\'s", "American", "13856 Bel Red Rd., Bellevue, WA 90005", ['gluten-free'], 'Any'),
new Restaurant ("Denny\'s", "American", "2762 4th Ave., Seattle, WA 98134", ['gluten-free'], 'Any'),
new Restaurant ("Red Lobster", "American", "4231 196th St., Lynwood, WA 98036", ['gluten-free'], 'Any'),
];


//--------------------CONSTRUCTORS

// constructor function for creating restaurants

function Restaurant (name, cuisine, address, preferences, any){
  this.name = name;
  this.cuisine = cuisine;
  this.address = address; 
  this.preferences = preferences;
  this.any = any;
}

//--------------------CONSTRUCTOR METHODS

//--------------------FUNCTIONS

//Generate a random restaurant
function randomRestaurant(){
  return Math.floor(math.random()* allRestaurants.length)
}

// save Restaurants
function saveRestaurants () {
  let stringify = JSON.stringify(allRestaurants);
  localStorage.setItem('allRestaurants', stringify);
}

function getRestaurants() {
  let getRestaurants = localStorage.getItem('allRestaurants');
  if (getRestaurants){
    let parsedItems = JSON.parse(getRestaurants);
    allRestaurants = parsedItems;
  }
}

// function reset() {
//   let element = document.getElementById('results');
//     //if (element != null) {
//         element.remove();
//    // }
// }

//--------------------EVENT LISTENERS

// event listener and handler for the form


let form = document.getElementById("options");
form.addEventListener('submit', displayRestaurants);


//--------------------EVENT HANDLERS

function displayRestaurants(e){
  e.preventDefault();
  // event.target is the actual HTML of the form
  let options = e.target;

  // console log the input values
  let cuisineType = options.cuisinetype.value;
  console.log(cuisineType);

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
    if (allRestaurants[i].cuisine == cuisineType && allRestaurants[i].preferences.includes(checkedPreference) || allRestaurants[i].any == cuisineType && allRestaurants[i].preferences.includes(checkedPreference) || allRestaurants[i].any == cuisineType || allRestaurants[i].cuisine == cuisineType){
      let restaurant = document.createElement('ul');
      restaurant.setAttribute('id', 'restaurantOptions');
  
      let title = document.createElement('li');
      title.setAttribute('id', 'restaurantTitle');
      // let img = document.createElement('li');
      let address = document.createElement('li');
      let categories = document.createElement('li');

      title.innerText = allRestaurants[i].name;
      // img.innerText = 
      address.innerText = allRestaurants[i].address;
      categories.innerText = `${allRestaurants[i].cuisine}, ${allRestaurants[i].preferences}`;
      restaurant.appendChild(title);
      restaurant.appendChild(address);
      restaurant.appendChild(categories);
      results.appendChild(restaurant);
    } 
  }

}
  

//--------------------FUNCTION CALLS



// function for rendering objects

// function for saving favorites to local storage

// slide show function
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
