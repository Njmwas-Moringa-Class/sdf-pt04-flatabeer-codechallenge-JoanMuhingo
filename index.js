
function getBeer(){
    fetch('http://localhost:3000/beers')
    .then(response => response.json())
    .then(data => console.log(data))
};

getBeer();