/**
 * Created by jeremyperkins on 9/13/15.
 */

var firstName = [
    "Donald",
    "Ted",
    "Ben",
    "Hillary",
    "Mike"
];

var lastName = [
    "Trump",
    "Cruz",
    "Carson",
    "Clinton",
    "Huckabee"
];

var rand = function() {
    var random1 = firstName[Math.floor(Math.random() * firstName.length)];
    var random2 = lastName[Math.floor(Math.random() * lastName.length)];

    return document.getElementById("randomNames").innerHTML = random1 +' '+ random2;
};

rand();

