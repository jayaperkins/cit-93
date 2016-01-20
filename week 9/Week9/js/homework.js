// This is the script file for your homework assignment.

//jQuery Ready Function
$(function() {

    var $list, $newItemForm, $newItemButton;
    var item = '';
    var $newInput = $('#itemDescription');
    $list = $('ul');
    $newItemForm = $('#newItemForm');
    $newItemButton = $('#newItemButton');

    $('li').hide().each(function (index) {
        var $this = $(this);
        $this.delay(450 * index).fadeIn(1600);
    });

    var updateCount = function() {
        var items = $('li[class != complete]').length;
        $('#counter').text(items);
    };

    updateCount();


    $newItemButton.show();
    $newItemForm.hide();
    $('#showForm').on('click', function() {
        $newItemButton.hide();
        $newItemForm.show();
    });

    $newItemForm.on('submit', function(e){
        e.preventDefault();
        var text = $('input:text').val();
        $list.append('<li class=\"hot\">' + text + '</li>');
        updateCount();
        $newItemForm.hide();
        $newItemButton.show();

    });

    $list.on('click', 'li', function() {
        var $this = $(this);
        var complete = $this.hasClass('complete');

        if (complete === true) {
            $this.animate({
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function () {
                $this.remove();
            });
        } else {
                item = $this.text();
                $this.remove();
                $list
                    .append('<li class = \"complete\">' + item + '</li>')
                    .hide().fadeIn(300);
                updateCount();

        }
    });

    $newInput.on('click', function () {
        $('input:text').val('');
    });
});
