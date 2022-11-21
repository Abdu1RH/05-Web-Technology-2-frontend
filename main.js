fetch("https://igspots.onrender.com/spots")
    .then(response => response.json())
    .then(function (spots) {
        renderSpots(spots);



    });

function renderSpots(spots) {
    console.log(spots);
    const ul = document.querySelector('ul#spots');
    console.log(ul);
    for (let i = 0; i < spots.length; i++) {
        const spot = spots[i];
        console.log(spot);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="location_name">${spot.location_name}</p>
            
            <p class="address">${spot.address}</p>
        `;
        ul.appendChild(li);
    }

    // lave et loop
    // create element

}




