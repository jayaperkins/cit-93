var prime = function() {

    var i = document.getElementById('number').value;
    var check = i % 2;

    if(check == 0) {
        document.getElementById('returnStatement').textContent = "Your number is even! " + i + " is divisible by 2!";
    }
    else if(check == 1) {
        document.getElementById('returnStatement').textContent = "Your number is odd! " + i + " is not divisible by 2!";
    }
    else {
        document.getElementById('returnStatement').textContent = "Not a number!";
    }
};

var submission = document.getElementById('number');
submission.onblur = prime;

