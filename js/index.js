var addInput = document.getElementById("addInput");
addInput.addEventListener("click", newElement);


// Add a remove button at the end of each item
var myNodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodeList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Click on a remove button and remove the current item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("listInput").value;
    var listLine = document.createTextNode(inputValue);
    li.appendChild(listLine);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("ulContent").appendChild(li);
    }
    document.getElementById("listInput").value = "";

// Adding the remove button to the new element
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }  
}







/* const leftButton = $("#cantoEsquerdo")
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

} */

