 fetch("https://igspots.onrender.com/spots")
    .then(response => response.json())
    .then(function (spots) {
        renderSpots(spots);
    });


function renderSpots(spots) {
    console.log(spots);
    const ul = document.querySelector('#spots');
    console.log(ul);
    for (let i = 0; i < spots.length; i++) {
        const spot = spots[i];
        console.log(spot);
        const li = document.createElement('div');

        /*
        <p class="spot_id">${spot.spot_id}</p>
            <p class="location_name">${spot.location_name}</p>
            <p class="address">${spot.address}</p>
            <p class="longtitude">${spot.longitude}</p>
            <p class="latitude">${spot.latitude}</p>
         */
        li.innerHTML = `
            
      
       <div class="image-container">
        <img src="${spot.img_link}" alt=""/>
        <span>
                <p> ${spot.spot_id}</p>
                <h1>${spot.location_name}</h1>
                <p>
                ${spot.address}
                <br>
                ${spot.season}
                
               </p>
               </span>
            
    </div>
    
     </div>
        `;
        ul.appendChild(li);
    }
}




    // lave et loop
    // create element


 /*
 fetch("https://igspots.onrender.com/user_spot")
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

    <div class="image-container">
        <img src="${spot.img_link}" alt=""/>
        <span>
             <p class="user_id">${user.user_id}</p>
             <p class="user_name">${user.user_name}</p>
             <p class="email">${user.email}</p>
             <p class="user_password">${user.user_password}</p>
         </span>

    </div>

         `;
         ul.appendChild(li);
     }

 }
  */

 /*

fetch("https://igspots.onrender.com/images")
    .then(response => response.json())
    .then(function (images) {
        renderImages(images);
        filterSeasons(images);



    });

function renderImages(images) {
    console.log(images);
    const ul = document.querySelector('ul#images');
    ul.innerHTML=""
    console.log(ul);
    for (let i = 0; i < images.length; i++) {
        const image = images[i];
        console.log(image);
        const li = document.createElement('li');
        li.innerHTML = `
            <p class="img_id">${image.img_id}</p>
            <p class="img_link">${image.img_link}</p>
            `;
        ul.appendChild(li);
    }

}

 function filterSeasons(images) {
     console.log(images);
     const button = document.querySelector('button.filter');
     console.log(button);
     button.addEventListener("click", function () {
         console.log("button clicked");
         const inputElement = document.querySelector('input');
         console.log(inputElement);
         const filteredSeason = inputElement.value;
         console.log(filteredSeason);
         const seasonFiltered = [];
         console.log(seasonFiltered)
         for (let i = 0; i < images.length; i++) {
             const image = images[i];
             console.log(image.season);
             console.log(filteredSeason);
             console.log(image.season === filteredSeason);
             if ((image.season) === (filteredSeason)) {
                 seasonFiltered.push(image);
             }
         }

         renderImages(seasonFiltered)
     })

 }



/*
 fetch("https://igspots.onrender.com/user_spot")
     .then(response => response.json())
     .then(function (users) {
         renderUsers(users);
     });

 function renderUsers(users) {
     console.log(users);
     const ul = document.querySelector('ul#user_ratings');
     console.log(ul);
     for (let i = 0; i < users.length; i++) {
         const user = users[i];
         console.log(user);
         const li = document.createElement('li');
         li.innerHTML = `
            <p class="user_id">${user.user_id}</p>
            <p class="spot_id">${user.spot_id}</p>
           
         
        `;
         ul.appendChild(li);
     }


}

 */

