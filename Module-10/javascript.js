/* Author:  Michael Galarneau
 * Class:   UNH Boot Camp
 * Assignment:   Module 10 -  Jiggle Into Javascript
 * Date:  July 30, 2018
 */

//  file:  javascript.js

var height=150;

// Grow Button Event Handler - grow box by 25px per click
document.getElementById("growBtn").addEventListener("click", function () {

    height += 25;
    document.getElementById("box").style.height = height + "px";

});

// Shrink Button Event Handler - shrink box by 25px per click until minimum size of 25px
document.getElementById("shrinkBtn").addEventListener("click", function () {

    if (height > 25)
        height -= 25;
    document.getElementById("box").style.height = height + "px";

});

// Blue Button Event Handler - make the box blue
document.getElementById("blueBtn").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "blue";

});

// Orange Button Event Handler - make the box orange
document.getElementById("orangeBtn").addEventListener("click", function () {

    document.getElementById("box").style.backgroundColor = "orange";

});

// Fade Button Event Handler - fade box if orange or blue, otherwise ignore (since it must already be faded)
document.getElementById("fadeBtn").addEventListener("click", function () {

    // if orange or blue:  fade it accordingly 
    if (strcmp(document.getElementById("box").style.backgroundColor, "orange") === 0)
        document.getElementById("box").style.backgroundColor = "lightsalmon";
    else if (strcmp(document.getElementById("box").style.backgroundColor, "blue") === 0)
        document.getElementById("box").style.backgroundColor = "lightblue";

});

// Brighten Button Event Handler - reverse the fade effect on the box
document.getElementById("brightBtn").addEventListener("click", function () {

    // if light orange or light blue:  brighten it accordingly 
    if (strcmp(document.getElementById("box").style.backgroundColor, "lightsalmon") === 0)
        document.getElementById("box").style.backgroundColor = "orange";
    else if (strcmp(document.getElementById("box").style.backgroundColor, "lightblue") === 0)
        document.getElementById("box").style.backgroundColor = "blue";

});

// Reset Button Event Handler - make box default size, color and border
document.getElementById("resetBtn").addEventListener("click", function () {

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.borderStyle = "none";
    height = 150;

});

// Show Button Event Handler - show a border on the box
document.getElementById("showBtn").addEventListener("click", function () {

    // if border style was never set, or is set to "none" - set it to "solid" to show border,
    // otherwise assume border is already showing and ignore it
    if ((strcmp(document.getElementById("box").style.borderStyle, "none") === 0) ||
        (strcmp(document.getElementById("box").style.borderStyle, "") === 0))
        document.getElementById("box").style.borderStyle = "solid";

});

// Hide Button Event Handler - hide the box border 
document.getElementById("hideBtn").addEventListener("click", function () {

    document.getElementById("box").style.borderStyle = "none";

});

// Dotted Border Button Event Handler - show the box border as dotted
document.getElementById("dottedBtn").addEventListener("click", function () {

    document.getElementById("box").style.borderStyle = "dotted";

});

// Dashed Border Button Event Handler - show the box border as dashed
document.getElementById("dashedBtn").addEventListener("click", function () {

    document.getElementById("box").style.borderStyle = "dashed";

});

// Solid Border Button Event Handler - show the box border as solid
document.getElementById("solidBtn").addEventListener("click", function () {

    document.getElementById("box").style.borderStyle = "solid";

});

// Local String Compare utility function
function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}
