// function Game(id, title, imageUrl, description) {
//     this._id = id ;
//     this.title = title ; 
//     this.imageUrl = imageUrl ; 
//     this.description = description ;
// }

// Game.prototype.createDomElement = function(){
//     var container = document.querySelector('.container');
//     const gameELement = document.createElement("div");
//     gameELement.setAttribute("id", this._id);
//     gameELement.innerHTML = `<h1>${this.title}</h1> 
//                         <img src="${this.imageUrl}" />
//                         <p>${this.description}</p>
//                         <button class="delete-btn" id="${this._id}">Delete</button>
//                         <button class="update-btn" id="${this._id}">Edit Game</button>`; 

//                         container.appendChild(gameELement);
// }
