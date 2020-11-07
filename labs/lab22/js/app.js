var divArray = new Array(100);

var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];

for (var i = 0; i < divArray.length; i++) {

   divArray[i] = document.createElement('div');

   divArray[i].className = "divs";

   divArray[i].style.background = colors[parseInt(Math.random() * colors.length)];
    
   document.body.appendChild(divArray[i]);

   console.log(print);
}
