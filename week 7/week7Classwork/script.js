/**
 * Created by jeremyperkins on 9/30/15.
 */

var randomNumber = document.getElementById('randomNumber');

var rand = function() {

    if (randomNumber.value > 500) {
        document.getElementById('returnRandomNumber').textContent = 'You picked a number above 500!';
    }
    else
        document.getElementById('returnRandomNumber').textContent = 'Your number needs to be above 500!';
};

randomNumber.onblur = rand;




var firstName = document.getElementById('firstName');

var first = function() {

    if (firstName.value.length >= 5) {

        document.getElementById('returnFirstName').textContent = 'Your first name is equal to or longer than 5 characters';

    }
    else {

        document.getElementById('returnFirstName').textContent = 'Your first name must include 5 or more characters';

    }
};

firstName.onblur = first;



var lastName = document.getElementById('lastName');

var last = function () {

        if (lastName.value.length < 5) {

            document.getElementById('returnLastName').textContent = 'Your last name is less than 5 characters';

        }
        else {

            document.getElementById('returnLastName').textContent = 'Make sure your last name is less than 5 characters';

        }

};

lastName.onblur = last;



var month = document.getElementById('month');

var monthGuess = function () {

    if (month.value == 'October') {

        document.getElementById('returnMonth').textContent = 'Correct month!';

    }
    else {

        document.getElementById('returnMonth').textContent = 'Guess again!';

    }

};

month.onblur = monthGuess;