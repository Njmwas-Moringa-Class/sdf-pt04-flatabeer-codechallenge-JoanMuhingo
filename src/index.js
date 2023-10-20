// Code here

document.addEventListener('DOMContentLoaded',function(){
    fetch('http://localhost:3000/beers')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const firstBeer = data[0];
        displayFirstBeer(firstBeer);
        const beers= data.beers;
        displayBeerMenu(beers);
    });
});


 function  displayFirstBeer(beer){
        const beerName = document.getElementById('beer-name');
        const beerImage = document.getElementById('beer-image');
        const description = document.getElementById('beer-description');
        const reviews = document.getElementById('review-list');

        beerName.textContent = beer.name;
        beerImage.src = beer.image_url;
        description.textContent = beer.description;
         
        reviews.innerHTML= '';
        const ul= document.createElement('ul');
        beer.reviews.forEach(review => {
            const li= document.createElement('li');
            li.textContent = review;
            ul.appendChild(li);
        });
        reviews.appendChild(ul);
   
 }

 displayFirstBeer

 function displayBeerMenu(beers){
    let beerList = document.getElementsByTagName("nav");
    beers.forEach(beer => {
        const menuItem = createBeerMenuItem(beer);
        beerList.appendChild(menuItem);
    });
 }
 function createBeerMenuItem(beer){
    const menuItem = document.createElement('div');
    menuItem.classList.add('beer-menu-item');

    const beerName =document.createElement('h2');
    beerName.textContent = beer.Name;

    const description = document.createElement('p');
    description.textContent = beer.description;

    const beerImage = document.createElement('img');
    beerImage.src = beer.image_url;

    const reviewsList = document.createElement('ul');
    beer.reviews.forEach(review =>{
        const reviewItem = document.createElement('li');
        reviewItem. textContent = review ;
        reviewsList.appendChild(reviewItem);
    });
    menuItem.appendChild(beerName);
    menuItem.appendChild(description);
    menuItem.appendChild(beerImage);
    menuItem.appendChild(reviewsList);

 };

displayBeerMenu