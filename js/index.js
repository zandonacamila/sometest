const leftButton = $("#cantoEsquerdo")
const middleButton = $("#meio");
const rightButton = $("#cantoDireito");
const addToList = $("#addInput");

leftButton.on("click", addClassNameLeft);

middleButton.on("click", addClassNameMiddle);

rightButton.on("click", addClassNameRight);

addToList.on("click", addItemToList);


function addClassNameLeft() {

    $("#left").toggleClass("hidden");
}

function addClassNameMiddle() {

    $("#middle").toggleClass("hidden");
}

function addClassNameRight() {
    
    $("#right").toggleClass("hidden");
}

function addItemToList(event) {

    event.preventDefault;
    
    const li = document.createElement("li")
    const inputValue = $("#listInput").val();
    const cell = document.createTextNode(inputValue);

    $("#ulContent").append(cell);

}