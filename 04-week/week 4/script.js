/**Created by jeremyperkins on 9/2/15.**/

var bookTitle = document.getElementById("productTitle").innerHTML;

var bookAuthor = document.getElementById("productAuthor").innerHTML;

var bookDescription = document.getElementById("productDescription").innerHTML;

var bookImage = document.getElementById("productImage").innerHTML;

var bookPublisher = document.getElementById("productPublisher").innerHTML;

var bookPages = document.getElementById("productPages").innerHTML;

var bookISBN = document.getElementById("productISBN").innerHTML;



var productPrice = 21.28;

var shippingCost = 2.55;

var taxRate = 8.23;

var totalCost = (productPrice * 0.0823) + productPrice + shippingCost;


document.getElementById('returnBookTitle').innerHTML = bookTitle;

document.getElementById('returnBookAuthor').innerHTML = bookAuthor;

document.getElementById('returnBookDescription').innerHTML = bookDescription;

document.getElementById('returnBookImage').innerHTML = '<img src="'+ bookImage +'">';

document.getElementById('returnBookPublisher').innerHTML = 'Publisher: ' + bookPublisher;

document.getElementById('returnBookPages').innerHTML = 'Page Number: ' + bookPages;

document.getElementById('returnBookISBN').innerHTML = 'ISBN: ' + bookISBN;


document.getElementById('returnBookPrice').textContent = 'Product Price: ' +'$'+productPrice;

document.getElementById('returnTaxRate').textContent = 'Tax Rate: ' + taxRate + '%';

document.getElementById('returnShippingCost').textContent = 'Shipping Cost: ' + '$' +shippingCost;

document.getElementById('returnBookTotalCost').textContent = 'Total Cost: ' + '$' + totalCost.toFixed(2);




