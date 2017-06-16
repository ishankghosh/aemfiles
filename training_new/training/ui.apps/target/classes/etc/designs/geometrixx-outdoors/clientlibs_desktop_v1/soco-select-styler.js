/* JS for forms */

jQuery( function( $ ) {

    /* Select Styler */

   $.fn.selectionStyler = function(opts) {
   		var conf = { };
   		if (opts) { $.extend(conf, opts); }

   		return this.each(function() {
			var orgSelect = $(this),
				isOpen = false,
				options = orgSelect.find('option'),
				placeholder = $('<div></div>', {
					'id': orgSelect.attr('id'),
					'class': orgSelect.attr('class')
				})
				.append($('<span></span>', {
					'class': 'select-arrow'
				})),
				realInput = $('<input type="hidden" />').attr('name', orgSelect.attr('name')).appendTo(placeholder),
				currentOption = $('<span></span>', {
					'class': 'current-option'
				}).prependTo(placeholder),
				dropDown = $('<div></div>', {
					'class': 'select-drop',
					'css': { 'display': 'none' }
				}).appendTo(placeholder);

			// Populate dropdown with options
			options.each(function() {
				var that = $(this),
					option = $('<div></div>', {
						'class': 'select-option',
						'data-value': that.val(),
						'html': that.html()
				}).appendTo(dropDown);
			});

			// Set default/current item
			placeholder.find('.select-option').on('click', function(evt) {
				var selected = $(this);
				// Set styled div with html for new item
				currentOption.html(selected.html());

				// Set new item in hidden input
				realInput.val(selected.data('value'));

				if (!evt.initial) {
					dropDown.trigger({
						type: 'change',
						value: selected.data('value')
					});
				}

			}).filter('[data-value="' + orgSelect.val() + '"]').trigger({
				type: 'click',
				initial: true
			});

			// Event for clicking on select
			placeholder.on('click', function(evt) {
				var initialOpen = false;

				if (!isOpen) {
					isOpen = true;
					dropDown.show();

					// Event for clicking off of select
					var closeSelect = function(evt) {
						if (initialOpen) {
							dropDown.hide();
							isOpen = false;
							$(document).off('click.selectionStyler', closeSelect);
						}
						initialOpen = true;
					};

					$(document).on('click.selectionStyler.drop', closeSelect);
				}
			});


			// Transfer bound events over?

			orgSelect.after(placeholder).remove();
		});
	};


   $('.styled-select').selectionStyler();  

});