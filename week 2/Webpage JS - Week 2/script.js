/**
 * Created by jeremyperkins on 8/26/15.
 */
var titleColor = document.getElementById('title');
var today = new Date();
var hourNow = today.getHours();

if(hourNow > 18) {
    titleColor.style.backgroundColor = 'blue';
}
else if (hourNow > 12) {
    titleColor.style.backgroundColor = 'cyan';
}
else {
    titleColor.style.backgroundColor = 'magenta';
}


