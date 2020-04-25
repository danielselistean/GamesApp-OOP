function fetchApi(serverUrl){
  this.serverUrl = serverUrl;
}

fetchApi.prototype.getGamesList = function() {
    return fetch(`${this.serverUrl}/games`,{
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

fetchApi.prototype.deleteGame = function (gameID) {
    return fetch(`${this.serverUrl}/games/${gameID}`,{
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

fetchApi.prototype.createGameRequest = function(gameObject) {
    return fetch(`${this.serverUrl}/games`, {
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

fetchApi.prototype.updateGameRequest = function(gameId, updateGameObj) {
    return fetch(`${this.serverUrl}/games/${gameId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: updateGameObj
    }).then(function(response){
        return response.json();
    })
    // .catch(function(error){
    //     console.log('An error has occured:', error);
    // });
}