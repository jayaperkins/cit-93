/**
 * Created by jeremyperkins on 9/16/15.
 */
var elm = document.getElementById('display');
var arg = document.getElementById('arg');

/*function foo(a) {
    /*if (a > 3.5) {
     return 'You are UC material!';
     }
     else if (a > 2.5) {
     return 'Have you considered Fresno State?';
     }
     else if (a > 1.5) {
     return 'Keep working on it!';
     }
     else {
     return 'You have problems...';
     }*/

    /*var str = '';
     switch (a)
     {
     case 1:
     str += 'Tony ';
     //break;
     case 2:
     str += 'Stark ';
     //break;
     case 3:
     str+= 'is Iron Man.';
     break;
     default:
     str = 'Invalid';
     break;
     }
     return str
     }

     elm.textContent = foo(1);*/

    /*var str = '';
    for (var i = 10; i > 0; i--) {
        str += i + '<br>';
    }
str += 'BLASTOFF!';
elm.innerHTML = str;*/

var str = '';
var i = 10;
while (i > 0)
    str += i-- + '<br>';

str = str + 'BLASTOFF!';
elm.innerHTML = str;