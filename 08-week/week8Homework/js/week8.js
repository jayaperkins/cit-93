// Be sure to use jQuery for this assignment.

$(function() {

	var $list = $('ul');
	var $notes = $('p#notes');

	/*var delay = 700;
	var clicks = 0;
	var timer = null;

	$list.on('click', function(e) {
		clicks ++;

		if(clicks == 1) {
			timer = setTimeout(function(){
				alert('Single Click');
				clicks = 0;
			}, delay);}
		else
		{
			clearTimeout(timer);
			alert('Double Click');
			clicks = 0;
		}
	})

		.on('dblclick', function(e) {
			e.preventDefault();
		});*/



	$list.on('mouseover', 'li', function () {
		var $this = $(this);
		$this.addClass('cool');
	});

	$list.on('mouseout', 'li', function () {
		var $this = $(this);
		$this.removeClass('cool');
	});

	$list.on('click', 'li', function () {
		var $this = $(this);
		$this.addClass('favorite');
		$notes.append($this.text());
		$notes.append(', ');
	});

	$list.on('dblclick', 'li', function (){
		var $this = $(this);
		$this.remove('li');
		$this.appendTo($list);
		$this.removeClass('favorite');
		$this.addClass('complete');
		$notes.empty();
	});
});
