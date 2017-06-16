
/* Place here all JS specific to the modal windows */

($CQ || $)(function($) {

    $(".modal").click(function (e) {
        e.preventDefault();

        var doc = $(document),
            win = $(window),
            mask = $('<div></div>', {
                id: 'mask'
            }),
            modalContainer,
            maskHeight = doc.height(),
            maskWidth = win.width(),
            wHeight = win.height(),
            modalPage = $( this ).attr('href');

        if( typeof modalPage != "undefined" && modalPage != "") {

            //Create the mask
            mask.css({
                'width': maskWidth,
                'height': maskHeight
            }).appendTo('body');

            $.ajax(modalPage, { "dataType": "html" }).done(function (data) {

                mask.after('<div class="modal-container">' + data + '</div>');

                modalContainer = $('.modal-container');

                close = modalContainer.find('.close');

                var modalHeight = modalContainer.outerHeight(),
                    modalWidth = modalContainer.outerWidth();


                /*
                  Set the size of the elements and keep the position centered
                  when the window is resized
                 */

                win.resize(function() {
                    maskHeight = doc.height();
                    maskWidth = win.width();
                    wHeight = win.height();

                    mask.css({
                        'width': maskWidth,
                        'height': maskHeight
                    })

                    modalContainer.css({
                        'top' : wHeight / 2 - modalHeight / 2,
                        'left' : maskWidth / 2 - modalWidth / 2
                    });


                //bind the close button to the click event and close when clicked
                close.click(function() {
                    mask.add(modalContainer).remove();
                });

                }).resize();

                if ( $( '.tags' ).length > 0 ) {
                    $( '.tags' ).tagsInput( {
                        height: 'auto',
                        width: '304px'
                    } );
                }
                if ( $( '.date' ).length > 0 ) {
                    $( '.date' ).datepicker( {
                        showOn: 'button',
                        buttonImage: '/etc/designs/geometrixx-outdoors/images/soco/date-picker.png',
                        buttonImageOnly: true
                    } );
                }
            });
        }

        //close the window when the mask is clicked

        mask.click(function(e) {
            if (e.target.id === 'mask') {
                mask.add(modalContainer).remove();
            }
        });
    });

});


$CQ(document).ready(function() {

    var openDialog = function() {
        var url = $CQ(this).attr('href');
        if (typeof url == 'undefined') {
            url = $CQ(this).data('url');
        }
        if (typeof url == 'undefined') {
            url = $CQ(this).attr('action');
        }
        var title = $CQ(this).data('title');
        if (typeof title == 'undefined') {
            title = '';
        }
        var data = {};
        if ($CQ(this).is('form')) {
            $CQ(this).find('input').each(function() {
                data[$CQ(this).attr('name')] = $CQ(this).attr('value');
            });
        }

        var dialog = $CQ('<div class="loading"><div id="fountainG">' +
            '<div id="fountainG_1" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_2" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_3" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_4" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_5" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_6" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_7" class="fountainG">' +
            '</div>' +
            '<div id="fountainG_8" class="fountainG">' +
            '</div>' +
            '</div></div>').appendTo('body');
        dialog.dialog({
            width: 700,
            minHeight: 350,
            zIndex: 11000,
            modal: true,
            position: "center",
            resizable: false,
            title: title,
            center: true,
            dialogClass: "modal-window",
            draggable: false,
            create: function(e, ui) {
                // No rounded corners thanks
                $CQ(this).dialog('widget').removeClass('ui-corner-all');
                $CQ(this).dialog('widget').find('.ui-corner-all').removeClass('ui-corner-all');
            },
            close: function(e, ui) {
                // Remove dialog on close
                dialog.remove();
            }
        });

        var callback = $CQ(this).data('callback');
        $CQ.get(url, data, function(html) {
            dialog.html(html);
            dialog.dialog("option", "position", "center");
            for (var key in data) {
                $CQ('.ui-dialog input').each(function(){
                    if ($CQ(this).attr('name') == key) {
                        $CQ(this).val(data[key]);
                    }
                });
            }
            if (typeof callback != 'undefined') {
                eval(callback+"()");
            }
        });

        return false;
    };

    $CQ('form.lightbox').submit(openDialog);
    $CQ('a.lightbox, button.lightbox').click(openDialog);
});

