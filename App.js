const apiUrl = "https://games-app-siit.herokuapp.com";

const fetchApi = new FetchApi(apiUrl);

getGamesList().then(function(arrayOfGames){
    console.log(arrayOfGames);
      for(let i = 0; i < arrayOfGames.length; i++) {
          createDomElement(arrayOfGames[i]);
      };
  });

  container.appendChild(gameELement);

  //Formul pentru update-ul jocului pus intr-un div pentru a fi atasat div-ului 'gameElement' prin butonul Edit Game;
  
    //console.log(gameELement);
  
    // Se creaza functionalitate pe butoanele de Delete respectiv Edit(Update);
      
document.getElementById(`${gameObj._id}`).addEventListener("click", function(event){
    if (event.target.classList.contains('delete-btn')){
  
          deleteGame(event.target.getAttribute("id")).then(removeDeletedElementFromDOM(event.target.parentElement));
    } else if(event.target.classList.contains('update-btn')){
  
        gameELement.appendChild(updateGameElement);

    }else if(event.target.classList.contains('cancelBtn')){
        removeDeletedElementFromDOM(updateGameElement);

    }else if(event.target.classList.contains('updateBtn')){
        newDomElement(gameELement);
        console.log(gameELement);
        removeDeletedElementFromDOM(updateGameElement);
    }
  
});

//functia pentru stergerea elementului din DOM;
function removeDeletedElementFromDOM(domElement){
    domElement.remove();
  }

   //Adaugam functionalitate pe butonul de submit;
  
   document.querySelector(".submitBtn").addEventListener("click", function(event){
    event.preventDefault();
  
    //colectam datele din Form (create form);
    const gameTitle = document.getElementById("gameTitle");
    const gameDescription = document.getElementById("gameDescription");
    const gameGenre = document.getElementById("gameGenre");
    const gamePublisher = document.getElementById("gamePublisher");
    const gameImageUrl = document.getElementById("gameImageUrl");
    const gameRelease = document.getElementById("gameRelease");
  
    //Validam elemenntele care sunt obligatorii(required *);
    validateFormElement(gameTitle, "The title is required!");
    validateFormElement(gameGenre, "The genre is required!");
    validateFormElement(gameImageUrl, "The image URL is required!");
    validateFormElement(gameRelease, "The release date is required!");
  
    validateReleaseTimestampElement(gameRelease, "The release date you provided is not a valid timestamp!");
  
    if(gameTitle.value !== "" && gameGenre.value !== "" && gameImageUrl.value !== "" && gameRelease.value !== "") {
        // Daca totul este valid, encodam parametrii pentru  a fi trimisi in request catre Api
        const urlencoded = new URLSearchParams();

        urlencoded.append("title", gameTitle.value);
        urlencoded.append("releaseDate", gameRelease.value);
        urlencoded.append("genre", gameGenre.value);
        urlencoded.append("publisher", gamePublisher.value);
        urlencoded.append("imageUrl", gameImageUrl.value);
        urlencoded.append("description", gameDescription.value);
  
        // facem requestul si folosim raspunsul la afisarea jocului
        // createGameRequest(urlencoded, createDomElement);
        createGameRequest(urlencoded).then(createDomElement);
    }
    // Resetam form-ul , golind inputurile, dupa "succes form submit" ;
    clearInputs();
  })
  
  function clearInputs() {
    document.querySelector(".creationForm").reset()
  }
