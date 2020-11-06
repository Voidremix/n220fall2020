var newDiv = document.createElement("div");

newDiv.addEventListener('click', handleClick);

document.body.appendChild(newDiv);

function handleClick(event) {
    //get old width & height
    var currentWidth = newDiv.offsetWidth;
    var currentHeight = newDiv.offsetHeight;

    //set new width & height
    newDiv.style.width = currentWidth*1.1 + "px";
    newDiv.style.height = currentHeight*1.1 + "px";
}
