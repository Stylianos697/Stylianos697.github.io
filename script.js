document.getElementById("showPhone").addEventListener("click", function() {
    alert("Phone number: +375 96526532");
});

var div = document.getElementById("header");

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(){
  div.style.backgroundColor= getRandomColor();
}

setInterval(changeColor,1000);