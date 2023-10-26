// Code here

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const firstBeer = data[0]; 
            displayFirstBeer(firstBeer);
            displayBeerMenu(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
        newReview();
        newDescription();
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
 };
 displayFirstBeer();

  function displayBeerMenu(beers){
    let beerList = document.getElementById("beer-list");
    const ul = document.createElement('ul'); 
    beerList.innerHTML ='';
    for(let i = 0; i < beers.length; i++){
      const li= document.createElement('li');   
      li.textContent = beers[i].name;
        ul.appendChild(li);
    }
    beerList.appendChild(ul);
};



function newReview() {
    const reviewBox = document.getElementById('review-list');
    const reviewForm = document.getElementById("review-form");
    reviewForm.addEventListener("submit", function(e) {
      e.preventDefault();
  
      const reviewInput = document.getElementById("review");
      const reviewText = reviewInput.value;
  
        const reviewElement = document.createElement('p');
        reviewElement.textContent = reviewText;
        reviewInput.value = "";
        reviewBox.appendChild(reviewElement);
        
      }
    )};

    newReview();

 function newDescription(){
    const descriptionBox = document.getElementById('beer-description');
    const descriptionForm = document.getElementById('description-form'); 
    descriptionForm.addEventListener('submit',function(e){
        e.preventDefault();
        const descriptionInput = document.getElementById('description');
        const descriptionText = descriptionInput.value;

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = descriptionText;
        descriptionInput.value = " ";
        descriptionBox.appendChild(descriptionElement);


    });

 };
newDescription();

 
   
        