'use strict';
console.log('proof of life');

let allFavorites = [];

function getRestaurants() {
    let getFavorites = localStorage.getItem('allFavorites');
    if (getFavorites){
      let parsedItems = JSON.parse(getFavorites);
      allFavorites = parsedItems;
    }
  }

  getRestaurants();

let favorites = document.getElementById("favorites");
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

    //   let favorites = document.createElement('li');
    //   let input = document.createElement('button');

      //Referencing bookmark function when clicked

      // commented out because error code TO LOOK AT!!
      // input.setAttribute('onclick', 'bookmark()');
      
    //   input.setAttribute('id', 'favorites');
    //   input.innerText = 'Bookmark';
    //   input.addEventListener('click', bookmark);

    //   function bookmark (event){
    //     event.preventDefault();
    //     allFavorites.push(allRestaurants[i]);
    //     console.log(allFavorites);
    //     saveRestaurants();

    //   }

    //   favorites.appendChFavorites


      title.innerText = allFavorites[i].name;
      address.innerText = allFavorites[i].address;
      categories.innerText = `${allFavorites[i].cuisine}, ${allFavorites[i].preferences}`;

      restaurant.appendChild(title);
      restaurant.appendChild(img);
      restaurant.appendChild(address);
      restaurant.appendChild(categories);
    //   restaurant.appendChild(favorites);
      favorites.appendChild(restaurant);
    } 
