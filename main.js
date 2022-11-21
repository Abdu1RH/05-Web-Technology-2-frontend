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
            <p class="spot_id">${spot.spot_id}</p>
            <p class="location_name">${spot.location_name}</p>
            <p class="address">${spot.address}</p>
            <p class="longtitude">${spot.longitude}</p> 
            <p class="latitude">${spot.latitude}</p>
        `;
        ul.appendChild(li);
    }

    // lave et loop
    // create element

}




