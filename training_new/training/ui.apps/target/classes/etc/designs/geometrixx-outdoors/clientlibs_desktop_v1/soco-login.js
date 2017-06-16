
/* Place here all JS specific to the login screen */

($CQ || $)(function($) {
    $(".userinfo .sign-in").click(function (e) {
        e.preventDefault();

        var doc = $(document),
            win = $(window),
            mask = $('<div></div>', {
                id: 'mask'
            }),
            loginContainer,
            maskHeight = doc.height(),
            maskWidth = win.width(),
            wHeight = win.height();

        //Create the mask
        mask.css({
            'width': maskWidth,
            'height': maskHeight
        }).appendTo('body');

        $.ajax("login-ajax.html", { "dataType": "html" }).done(function (data) {

            //Load and populate the pop-up

            mask.after("<div class='login-container'>" + data + "</div>");

            loginContainer = $('.login-container');

            var loginHeight = loginContainer.outerHeight(),
                loginWidth = loginContainer.outerWidth();

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

                loginContainer.css({
                    'top' : wHeight / 2 - loginHeight / 2,
                    'left' : maskWidth / 2 - loginWidth / 2
                });
            }).resize();
        });

        //When the mask is clicked, remove both the mask and the popup.

        mask.click(function(e) {
            if (e.target.id === 'mask') {
                mask.add(loginContainer).remove();
            }
        });
    });
});
