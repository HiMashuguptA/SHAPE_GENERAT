var button = document.getElementById("button")
console.log("button;", button);
var numberInsideShape = 1
var lastShapenumber = 0
button.onclick= () =>{
    //input value
    var n = document.getElementById("number").value
    console.log("number:",n);
    //options selected
    var circle = document.getElementById("circle").checked
    console.log("circle:",circle);
    var square = document.getElementById("square").checked
    console.log("square:",square);
    var rectangle = document.getElementById("rectangle").checked
    console.log("rectangle:",rectangle);
    //total shapes
    var TotalShapes = Number(lastShapenumber) + Number(n) 
    console.log("TotalShapes", TotalShapes);

    //create box variables where all shapes are inserted
    var box = document.getElementById("box");
    
    for(let i = numberInsideShape; i<= TotalShapes; i++){
    var shape = document.createElement("div");
    shape.innerHTML = numberInsideShape ;

    numberInsideShape = numberInsideShape + 1

    if(square==true){
        shape.classList.add("square");
    }else if(circle==true){
        shape.classList.add("circle");
    }else if(rectangle==true){
        shape.classList.add("rectangle");
    }
    box.append(shape)
    lastShapenumber = box.lastElementChild.innerHTML

    }
}