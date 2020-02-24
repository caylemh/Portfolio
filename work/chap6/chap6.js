//Tryout 1 -- Using an If statement to print your name.


var name = "Caylem";

if (name === "Caylem" || name === "Merv" || name === "Celeste") {
    if (name === "Caylem") {
        document.write("Hello Caylem!" + "<br>");
    } else if (name === "Celeste") {
        document.write("Hello Celeste!" + "<br>");
    } else {
        document.write("Hello Merv!" + "<br>");
    }

} else {
    document.write("Hello Stranger!" + "<br>");
}


//Tryout -- Printing the powers of 3.

for (var i = 3; i < 10000; i = i * 3) {
    document.write(i + "<br>");
}

// Do previous with a while loop.

var i = 3;

while (i < 10000) {
    document.write(i + "<br>");
    i = i * 3;
}