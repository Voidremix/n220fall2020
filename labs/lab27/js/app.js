let element = document.getElementById("capital");
element.addEventListener("click", isClicked);

let element2 = document.getElementById("inches");
element.addEventListener("click", isClicked);

let element3 = document.getElementById("beer");
element.addEventListener("click", isClicked);


function isClicked(event){

    let div = document.getElementById("responses");

    let attr = event.target.getAttribute("data-attribute");

    div.innerHTML = attr;
    
};