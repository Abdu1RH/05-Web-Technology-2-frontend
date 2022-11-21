fetch ("https://igspots.onrender.com/spots")
    .then(response => response.json())
    .then(function (spots){
        renderSpots(spots);
});



function renderSpots (spots){
    console.log(spots);
    const ul = document.querySelector("ul");
    console.log(ul);
    for (let i = 0; i < spots.length; i++) {
        console.log(i)
    }
    const spot = spots [i];
    console.log(spot);

    const li = document.createElement("li")
    li.innerHTML = spots.title;
    //`<p class="title">${spot.name}</p>´
    ul.appendChild(li);

}

