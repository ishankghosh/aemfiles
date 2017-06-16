
/* Place here all JS specific to tabs */

($CQ || $)(function($) {

     var tabs = $('.tabs').find('li'),
        tabContent = $('.theme-content');

    $('.tabs').on('click', 'li', function() {
        var $this = $(this);

        tabContent.removeClass('selected');
        tabContent.eq($this.index()).addClass('selected');
        tabs.removeClass('selected');
        $this.addClass('selected');

    });



});
