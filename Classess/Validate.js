// function Validate(inputElement,id, inputValue, errorMessage){
//      this.input = inputElement;
//      this.inputId = id;
//      this.inputValue = inputValue;
//      this.errorMessage = errorMessage;
//  }

// Validate.prototype.gameFormElement = function(){
//     if(this.inputValue === "") {
//         if(!document.querySelector('[rel="' + this.inputId + '"]')){
//             buildErrorMessage(this.input, this.errorMessage);
//         }
//     } else {
//         if(document.querySelector('[rel="' + this.inputId + '"]')){
//             console.log("the error is erased!");
//             document.querySelector('[rel="' + this.inputId + '"]').remove();
//             this.input.classList.remove("inputError");
//         }
//     }
//   }

// Validate.prototype.ReleaseTimestampElement = function (){
//   if(isNaN(this.inputValue) && this.inputValue !== "") {
//       buildErrorMessage(this.input , this.errorMessage);
//   }
// }

// Validate.prototype.buildErrorMessage = function(){
//     this.input.classList.add("inputError");
//     const errorMsgElement = document.createElement("span");
//     errorMsgElement.setAttribute("rel", this.inputId);
//     errorMsgElement.classList.add("errorMsg");
//     errorMsgElement.innerHTML = this.errorMessage;
//     this.input.after(errorMsgElement);
//   }