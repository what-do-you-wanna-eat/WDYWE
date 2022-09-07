'use strict';

let allFavorites = [];

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

getRestaurants();


// function that renders bookmarked restaurants

let renderFavorites = function() {

let favorites = document.getElementById("favoriteRestaurants");
favorites.innerHTML = '';

  for (let i = 0; i < allFavorites.length; i++){

      let restaurant = document.createElement('ul');
      restaurant.setAttribute('id', 'restaurantOptions');
  
      let title = document.createElement('li');
      title.setAttribute('id', 'restaurantTitle');

      let img = document.createElement('li');
      let createImg = document.createElement('img');
      createImg.setAttribute('src', `${allFavorites[i].src}`);
      createImg.setAttribute('id', 'foodImgs');
      img.appendChild(createImg);

      let address = document.createElement('li');
      let categories = document.createElement('li');

      
      let remove = document.createElement('li');
      let input = document.createElement('button');
      remove.appendChild(input);
      
      input.setAttribute('class', 'favorites');
      input.innerText = 'Remove';
      
      input.addEventListener('click', removeBookmark);

      function removeBookmark (event){
        event.preventDefault();
        allFavorites.splice(i, 1);
        console.log(allFavorites);
        saveRestaurants();
        renderFavorites();
      }
 
      title.innerText = allFavorites[i].name;
      address.innerText = allFavorites[i].address;
      categories.innerText = `${allFavorites[i].cuisine}, ${allFavorites[i].preferences}`;

      restaurant.appendChild(title);
      restaurant.appendChild(img);
      restaurant.appendChild(address);
      restaurant.appendChild(categories);
      restaurant.appendChild(remove);
      favorites.appendChild(restaurant);
    } 
  }

  renderFavorites();