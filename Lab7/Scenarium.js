//===================================== task 2 =====================================
let firstValInput = document.querySelector("#firstValue");
let secondValInput = document.querySelector("#secondValue");
let swapBtn = document.querySelector("#swapButton");
swapBtn.addEventListener("click", swapValues);
function swapValues(){    
    let tmp = firstValInput.value;
    firstValInput.value = secondValInput.value;
    secondValInput.value=tmp;
}

//===================================== task 4 =====================================
let btnSmaller = document.querySelector("#makeSmaller");
let btnBigger = document.querySelector("#makeBigger");
let squareDiv = document.querySelector("#square");
let defaultSize = 50;
squareDiv.style.width = `${defaultSize}px`;
squareDiv.style.height = `${defaultSize}px`;

btnSmaller.addEventListener("click", makeSmaller);
btnBigger.addEventListener("click", makeBigger);

function makeSmaller(){
    let sizeStr = squareDiv.style.width
    let size = Number(sizeStr.slice(0, sizeStr.length-2)); 
    squareDiv.style.width = `${size-15}px`;
    squareDiv.style.height = `${size-15}px`;    
}
function makeBigger(){
    let sizeStr = squareDiv.style.width
    let size = Number(sizeStr.slice(0, sizeStr.length-2));     
    squareDiv.style.width = `${size+15}px`;
    squareDiv.style.height = `${size+15}px`;  
}

//===================================== task 6 =====================================
let btnDouble = document.querySelector("#double");
btnDouble.addEventListener("click", doubleIncrease);
function doubleIncrease(){
    let listElementsCollection = document.querySelectorAll("#task6 ul li");
    let listElementArray = [...listElementsCollection];
    for(const element of listElementArray){
        element.innerText=element.innerText*2;
    }
}

//===================================== task 7 =====================================
let categoriesElementsCollection = document.querySelectorAll("#task7 #categories .item");
console.log("Task 7");
console.log(`Number of categories in ul#categories is ${categoriesElementsCollection.length}`);
let categoriesArray = [...categoriesElementsCollection];
categoriesArray.forEach((category)=>{
    console.log(`Category: ${category.querySelector("h2").innerText}`);
    console.log(`Elements: ${category.querySelectorAll("li").length}`)
})

//===================================== task 8 =====================================
let loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event)=>{
    event.preventDefault();  
    let loginFormElements = loginForm.elements;
    let userEmail = loginFormElements["email"].value;
    let userPassword = loginFormElements["password"].value

    if(userEmail == "" || userPassword == "")
        alert("All form fields must be filled in");
    else{
        let logedUser = {};
        logedUser["email"] = userEmail.trim();
        logedUser["password"] = userPassword.trim();
        console.log(logedUser);
        loginForm.reset();
    }
})

//===================================== task 9 =====================================
let widget = document.querySelector(".widget");
(widget.querySelector("button.change-color")).addEventListener("click",()=>{
    let newColor = getRandomHexColor();
    widget.querySelector("span.color").innerText = newColor;
    widget.style.backgroundColor = newColor;
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

//===================================== task 10 =====================================
let btnCreate = document.querySelector("#controls button[data-create]");
let btnDestroy = document.querySelector("#controls button[data-destroy]");
let elementNumber = document.querySelector("#controls input[type='number']");
let boxesDiv = document.querySelector("#boxes");

btnCreate.addEventListener("click", ()=>{
    let num = Number(elementNumber.value)
    if(num>0 && num<=100 && num == Math.floor(num))
        createBoxes(num);
    elementNumber.value = "";
});
let currentSize = 30;
function createBoxes(amount){
    for(let i = 0; i< amount; i++){
        const currentElement = document.createElement("div");
        currentElement.style.display = "block";
        currentElement.style.width = `${currentSize+=10}px`;
        currentElement.style.height = `${currentSize+=10}px`;
        currentElement.style.backgroundColor = getRandomHexColor()
        boxesDiv.append(currentElement);
    }
}

btnDestroy.addEventListener("click", destroyBoxes);

function destroyBoxes(){
    let boxesArray = [...boxesDiv.children];
    boxesArray.forEach(element=>{element.remove()});
}