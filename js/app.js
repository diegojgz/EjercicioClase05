class Button {
    constructor(parentID, text){
      this.parentID = parentID;
      this.text = text;
    }
    render(){
     let myApp = document.getElementById(this.parentID);
     const myButtonHTML = myApp.innerHTML + "<button id='button'>" + this.text + "</button>";
     myApp.innerHTML =  myButtonHTML;
    }
  }

class Input {
  constructor(parentID, type){
    this.parentID = parentID;
    this.type = type;
  }
  render(){
    let myApp = document.getElementById(this.parentID);
    const myInputHTML = myApp.innerHTML + "<input type=" + this.type + ">";
    myApp.innerHTML =  myInputHTML;
  }
}


let myArray1 = ["Login", "SignUp", "Reset", "Cancel"];


function RenderButton(text){
  let myButton = new Button ("app", text);
  myButton.render();
};

function RenderInput(type){
  let input_type = "none"
  switch (type) {
      case "Password":
          input_type = "password"
          break;
      case "E-mail":
          input_type = "email";
          break;
      default:
          input_type = "text"
          break;
  }
  let myInput = new Input("app", input_type);
    myInput.render();
}


myArray1.forEach(element => RenderButton(element));


////////////////////////////////////////////////////

let inputArray = ["Username", "Surname", "E-mail", "Password"];

let inputArrayFiltered = inputArray.filter( element => element=="Password");

inputArrayFiltered.forEach(function (element) {
    RenderInput(element);
});
