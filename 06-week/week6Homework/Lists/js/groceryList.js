// Insert your javascript below.
var classRemoval = function() {
    var classes = document.getElementsByTagName('li');

    if (classes.length > 0) {
        for (var i = 0; i < classes.length; i++) {
             classes[i].className = '';
        }
    }
};

var evenNumbers = function() {
    var classes = document.getElementsByTagName('li');

    if (classes.length > 0) {
        for (var i = 0; i < classes.length; i++) {
            if (i % 2 == 1) {
                classes[i].className = 'cool';
            }
        }
    }
};

var addElement = function () {

        var newElm = document.createElement('li');
        newElm.className = 'hot';

        var newTxt = document.createTextNode('watermelon');
        newElm.appendChild(newTxt);

        var add = document.getElementsByTagName('ul')[0];
        add.insertBefore(newElm, add.firstChild);
};


classRemoval();

evenNumbers();

addElement();