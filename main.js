 fetch("https://igspots.onrender.com/spots")
    .then(response => response.json())
    .then(function (spots) {
        renderSpots(spots);
        filterSeasons(spots);
    });


function renderSpots(spots) {
    console.log(spots);

    const spotDiv = document.querySelector('#spots');
    spotDiv.innerHTML = ""
    console.log(spotDiv);

    for (let i = 0; i < spots.length; i++) {

        const spot = spots[i];
        console.log(spot);

        const li = document.createElement('div');

        li.innerHTML = `  
      
        <div class="image-container">
            <img src="${spot.img_link}" alt=""/>
                <span>
                     <p> ${spot.spot_id}</p>
                     <h1>${spot.location_name}</h1>
                     <p> ${spot.address}
                        <br>
                         ${spot.season}</p>
                </span>    
        </div>   

        `;
        spotDiv.appendChild(li);
    }
}



 function filterSeasons(spots) {
     console.log(spots);

     const button = document.querySelector('button.filter');
     console.log(button);

     button.addEventListener("click", function () {
         console.log("button clicked");

         const inputElement = document.querySelector('input');
         console.log(inputElement);

         const filteredSeason = inputElement.value;
         console.log(filteredSeason);

         const seasonFiltered = [];
         console.log(seasonFiltered);

         for (let i = 0; i < spots.length; i++) {
             const spot = spots[i];
             console.log(spot.season);
             console.log(filteredSeason);
             console.log(spot.season === filteredSeason);

             if ((spot.season) === (filteredSeason)) {
                 seasonFiltered.push(spot);
             }
         }
         renderSpots(seasonFiltered);
     });
 }

 fetch("https://igspots.onrender.com/user_spot")
     .then(response => response.json())
     .then(function (userSpots) {
         renderUsers(userSpots);
     });

 function renderUsers(userSpots) {
     console.log(userSpots);

     const spotDiv = document.querySelector('ul#user_spots');
     spotDiv.innerHTML = ""
     console.log(spotDiv);

     for (let i = 0; i < userSpots.length; i++) {

         const user = userSpots[i];
         console.log(user);

         const li = document.createElement('li');
         li.innerHTML = `

        <div class="image-container-users">
          <img src="${user.img_link}" alt=""/>
            <span>
                <p> ${user.spot_id}</p>
                <h1>${user.location_name}</h1>
                <p>
                ${user.user_name}
                <br>
                ${user.user_mail}
               </p>
            </span>    
        </div>   
       
        `;
         spotDiv.appendChild(li);
     }
}