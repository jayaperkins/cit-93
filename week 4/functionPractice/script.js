/**
 * Created by jeremyperkins on 9/9/15.
 */

/*function addTax(price) {
    return (price * 0.0823) + price;
}

var taxTotal = addTax(42.50);

document.getElementById('testRun').textContent = taxTotal;


/*var tax = function (price) {
    return (price * 0.0823) + price;
};

tax(42.50);

document.getElementById('testRun').textContent = tax;


var hotel = {
    name: ‘Otter Inn’,
    rooms: 40,
    booked: 28,
    checkAvailability: function() {
    return this.rooms - this.booked;
}
};*/


function Student(name, major, gender) {
    this.name = name;
    this.major = major;
    this.gender = gender;
    this.classes = [];

    this.addClass = function(className) {
        this.classes[this.classes.length] = className;
    }

    this.clearSchedule = function() {
        this.classes = [];
    }
}


var nina = new Student('Nina', 'Web Development', 'Female');

document.getElementById('testRun').textContent = nina.name;

document.getElementById('testRun2').textContent = nina.addClass('CIT 93');

nina.clearSchedule();

document.getElementById('testRun').textContent = nina.name + '' + nina.major + '\n' + nina.classes.length;