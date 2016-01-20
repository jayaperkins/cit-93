
var addItem = document.getElementsByClassName('button');

var input = function () {

    document.getElementById('inputField').innerHTML = '<h3 style="padding-left: 10px">Please submit an item name.</h3><input type="text" id="data">';

};

addItem.click = input;







var addItemForm = function () {

    var submittedData = document.getElementById('inputField').value;
    console.log('Output: ' + submittedData);

    var addElm = document.createElement('li');

    var txtNode = document.createTextNode(submittedData);
    addElm.appendChild(txtNode);

    var elm = document.getElementsByTagName('ul')[0];
    elm.insertBefore(addElm, elm.firstChild);

};

document.getElementById('inputField').addEventListener('blur', addItemForm);


