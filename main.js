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

fetch("https://igspots.onrender.com/users")
    .then(response => response.json())
    .then(function (users) {
        renderUsers(users);



    });

function renderUsers(users) {
    console.log(users);
    const ul = document.querySelector('ul#users');
    console.log(ul);
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        console.log(user);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="user_id">${user.user_id}</p>
            <p class="user_name">${user.user_name}</p>
            <p class="email">${user.email}</p>
            <p class="user_password">${user.user_password}</p> 
        `;
        ul.appendChild(li);
    }

}

fetch("https://igspots.onrender.com/images")
    .then(response => response.json())
    .then(function (images) {
        renderImages(images);



    });

function renderImages(images) {
    console.log(images);
    const ul = document.querySelector('ul#images');
    console.log(ul);
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        console.log(image);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="angle">${image.angle}</p>
            <p class="season">${image.season}</p>
            <p class="tag">${image.tag}</p>
            <p class="img_id">${image.img_id}</p> 
        `;
        ul.appendChild(li);
    }

}








