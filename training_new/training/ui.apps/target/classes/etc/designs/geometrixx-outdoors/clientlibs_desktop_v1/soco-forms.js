/* JS for forms */

jQuery( function( $ ) {

    $( '.tags' ).tagsInput( {
        height: 'auto',
        width: '304px'
    } );

   $( '.date' ).datepicker( {
        showOn: 'button',
        buttonImage: '/etc/designs/geometrixx-outdoors/images/soco/date-picker.png',
        buttonImageOnly: true
    } );

});
