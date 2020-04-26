function FetchApi(apiUrl){
  this.apiUrl = apiUrl;
}

FetchApi.prototype.getGamesList = function() {
    return fetch(`${this.apiUrl}/games`,{
        method: "GET",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(response){
        console.log(response);
        return response.json();
    })
    // .catch(function(error){
    //     console.log('An error has occured:', error);
    // });
   
}


FetchApi.prototype.deleteGame = function (gameID) {
    return fetch(`${this.apiUrl}/games/${gameID}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then(function(response){
        return response.text();
    })
    // .catch(function(error){
    //     console.log('An error has occured:', error);
    // });

}

FetchApi.prototype.createGameRequest = function(gameObject) {
    return fetch(`${this.apiUrl}/games`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: gameObject
    }).then(function(response){
        return response.json();
    })
    // .catch(function(error){
    //     console.log('An error has occured:', error);
    // });
}

FetchApi.prototype.updateGameRequest = function(gameId, updateGameObj) {
    return fetch(`${this.apiUrl}/games/${gameId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: updateGameObj
    }).then(function(response){
        return response.json();
    })
//     // .catch(function(error){
    //     console.log('An error has occured:', error);
    // });
}