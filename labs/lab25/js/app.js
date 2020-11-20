
var objects = [

    { color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
];

for (var i = 0; i < objects.length; i++) {
    var curObject = objects[i];

    var newObj = document.createElement("div");

    newObj.style["background-color"] = curObject.color;
    newObj.style.width = curObject.width + "px";
    newObj.style.height = curObject.height + "px";

    document.body.appendChild(newObj);

    console.log(newObj)
};
