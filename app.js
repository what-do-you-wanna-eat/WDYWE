'use strict';

//--------------------GLOBAL VARIABLES/IMPORTS

allRestaurants = [];


//--------------------CONSTRUCTORS
function Restaurant (name, cuisine, address, vegan, vegetarian, gluten_free){
  this.name = name;
  this.cuisine = cuisine;
  this.address = address; 
  //following rows will be boolean values
  this.vegan = vegan;
  this.vegetarian = vegetarian;
  this.gluten_free = gluten_free;
}


//--------------------CONSTRUCTOR METHODS
new Restaurant ("Shiro\'s", "Japanese", "2401 2nd Ave. Seattle, WA 98121", true, true, false);
new Restaurant ("Ishoni Yakiniku", "Japanese", "2401 2nd Ave. Seattle, WA 98121", true, true, true);
new Restaurant ("Kizuki Ramen", "Japanese", "320 E. Pine St. Seattle, WA 98122", true, true, false);
new Restaurant ("Fogon Cocina", "Mexican", "600 E. Pine St. Seattle, WA 98122", true, true, false);
new Restaurant ("Fonda la Catrina", "Mexican", "5905 Airport Way S. Seattle, WA 98108", true, true, false);
new Restaurant ("La Carta de Oaxaca", "Mexican", "5431 Ballard Ave. Seattle, WA 98107", true, true, false);
new Restaurant ("Cafe Turko", "Mediterranean", "750 N. 34th St., Seattle, WA 98103", true, true, false);
new Restaurant ("Momnoon", "Mediterranean", "1508 Melrose Ave. Seattle, WA 98122", true, true, false);
new Restaurant ("Petra Bistro", "Mediterranean", "2501 4th Ave., Seattle, WA 98121", true, true, false);
new Restaurant ("Tast of India", "Indian", "5517 Roosevelt Way, Seattle, WA 98105", true, true, false);
new Restaurant ("Daawat Grill", "Indian", "820 Pike St., Seattle, WA 98101", true, true, false);
new Restaurant ("Nirmal\'s", "Indian", "106 Occidental Ave., Seattle, WA 98104", true, true, false);
new Restaurant ("Applebee\'s", "American", "13856 Bel Red Rd., Bellevue, WA 90005", false, false, true);
new Restaurant ("Denny\'s", "American", "2762 4th Ave., Seattle, WA 98134", false, false, true);
new Restaurant ("Red Lobster", "American", "4231 196th St., Lynwood, WA 98036", false, false, true);


//--------------------FUNCTIONS

//Generate a random restaurant
function randomRestaurant(){
  return Math.floor(math.random()* allRestaurants.length)
}

//--------------------EVENT LISTENERS




//--------------------EVENT HANDLERS




//--------------------FUNCTION CALLS
