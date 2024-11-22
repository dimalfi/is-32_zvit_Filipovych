let pages = [
    document.getElementById('topic'),
    document.getElementById('task1'),
    document.getElementById('task2'),
    document.getElementById('task3'),
    document.getElementById('task4'),
    document.getElementById('task5'),
    document.getElementById('conclusions')
];
let buttons =[
    document.getElementById('btnTopic'),
    document.getElementById('btnTask1'),
    document.getElementById('btnTask2'),
    document.getElementById('btnTask3'),
    document.getElementById('btnTask4'),
    document.getElementById('btnTask5'),
    document.getElementById('btnConclusions')
]
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