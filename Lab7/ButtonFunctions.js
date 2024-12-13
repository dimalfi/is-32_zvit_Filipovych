let pages = [...(document.querySelector(".content").children)];  
let buttons = [...(document.querySelectorAll(".labItems ul li"))];

let defaultColor = "rgb(171, 255, 176)";
let checkedColor = "rgb(0, 189, 9)";

function hideAll(){
    for(const page of pages)
        page.style.display = "none";
}
function buttonClick(currPageNum){
    for(let page=0; page<pages.length; page++){
        if(page == currPageNum){
            pages[page].style.display = "block";
            buttons[page].style.backgroundColor = checkedColor;
        }           
        else{
            pages[page].style.display = "none";
            buttons[page].style.backgroundColor = defaultColor;
        }
            
    }
}