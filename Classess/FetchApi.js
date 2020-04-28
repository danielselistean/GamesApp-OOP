function FetchApi(apiURL) {
    this.apiURL = apiURL;
}

   FetchApi.prototype.getGamesList =async function(){
    try{
        const response = await  fetch(`${this.apiURL}` + "/games", {
                method: "GET",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
        });
                console.log(response);

        const arrayOfGames = await response.json();
            return arrayOfGames;

    } catch(errorMsg){
        console.log("An error has occured: ", errorMsg);
    }

}


 FetchApi.prototype.deleteGame = async function(gameID){
    try{
        const response = await  fetch(`${this.apiURL}` + "/games/" + gameID, {
                    method: "DELETE",
                     headers: {
                     "Content-Type": "application/x-www-form-urlencoded"
                     }
        });
                console.log(response);

        const apiresponse = await response.text();
            return apiresponse;

    }catch(errorMsg){
        console.log("An error has occured: ", errorMsg);
    }
}


 FetchApi.prototype.createGameRequest = async function(gameObject){
    try{
        const response = await fetch(`${this.apiURL}` + "/games", {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/x-www-form-urlencoded"
                     },
                    body: gameObject
        });

        const createdGame = await response.json();
        console.log(createdGame);
            return createdGame;

    }catch(errorMsg){
        console.log("An error has occured: ", errorMsg);
    }
}


 FetchApi.prototype.updateGameRequest = async function(gameID, updatedGameObject){
    try{
        const response = await fetch(`${this.apiURL}` + "/games/" + gameID, {
            method: "PUT",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: updatedGameObject
        });

        const updatedGame = await response.json();
        console.log(updatedGame);
            return updatedGame;

    }catch(errorMsg){
        console.log("An error has occured: ", errorMsg);
    }    
}