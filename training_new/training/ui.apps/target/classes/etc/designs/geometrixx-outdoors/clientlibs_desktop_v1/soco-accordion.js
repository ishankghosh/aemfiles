/* JS for accordions */

jQuery(function($){

    $.fn.simpleAccordion = function() {

        this.each(function() {
            var accordion = $(this),
                content = accordion.find('.content');

            /*
                Hide the content for initial state                
            */

            content.hide();

            var accordionToggles = accordion.find('.accordion-toggle');

            /*
                Find each "toggle" button and bind it to the
                click event.  On click, add/remove the "expanded" class
                to the toggle button and the content via the jQuery
                toggleClass method.
            */

            accordionToggles.each(function() {
               var accordionToggle = $(this);

                accordionToggle.click(function() {
                    accordion.find('.accordion-toggle').toggleClass('expanded');

                    content.toggleClass('expanded');

                    /*
                        On each click, check to see whether the content
                        has the "expanded" class; and animate accordingly.
                    */

                    if(content.hasClass('expanded')) {
                        content.slideDown();
                    } else {
                        content.slideUp();                        
                    }

                });

            });
        });
    }

    $('.page-product .accordion-block').simpleAccordion();

});