
//switch function
function season_function() {
    var seasons_output;
    var seasons = document.getElementById("season_input").value;
    var seasons_string = " is great!";
    switch(seasons) {
        case "Spring":
            seasons_output = "Spring" + seasons_string;
        break;
        case "Summer":
            seasons_output = "Summer" + seasons_string;
        break;
        case "Fall":
            seasons_output = "Fall" + seasons_string;
        break;
        case "Winter":
            seasons_output = "Winter" + seasons_string;
        break;
        default:
            seasons_output = "Please enter a color exactley as written on the list above.";
    }
    document.getElementById("output").innerHTML = seasons_output;
}

//get by class function
function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML = "The text has changed";
}

//linear gradient for canvis
var c = document.getElementById("art");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 300);