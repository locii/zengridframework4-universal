/*
colpick Color Picker
Copyright 2013 Jose Vargas. Licensed under GPL license. Based on Stefan Petre's Color Picker www.eyecon.ro, dual licensed under the MIT and GPL licenses

For usage and examples: colpick.com/plugin
 */

(function ($) {
		
		$.fn.set_config = function (template, time, theme_path, page_type,url) {
	
			// Retrieve the appropriate json file	 
			
			var config_exists = 1;
			       	
	     	$.getJSON( '../' + theme_path + 'settings/config/config-' + page_type + '.json?v=' + time).done(function(data) {
	     	console.log('Loading config - ' + page_type);
	     	
		     	// Check to see if the preset being used uses the new nested objects of colors and settings
		     	// We have to revert it back to the old way because there is no way to update old themes to the new format until the user saves them.
		     	 
		     	// Check if we have valid data
		     	if (typeof(data)) {
		     		
		     		// Set the theme
		     		var theme =  data.params.theme;
		     		
		     		$('#zgfmessage .settings span').text(page_type);
		     		
		     		// Check to see if the layout isn't using the same theme
		     		// Current theme
		     		var cssfile = $('input#theme').val();
		     		
		     		console.log('Setting ' + theme);
		     		
		     		if(template!==cssfile) {
			     		// Make sure a css file exists for this theme
			     		// By compiling it.
			     		console.log('theme has changed to ' + theme);
			     		
			     		$('select#cssfile option[value="'+ theme+'"]').attr("selected","selected");
			     		 
			     		//$('#compile_required').val('1');
			     		$(document).set_theme_data(theme, time,theme_path);
			     	
			     	}
			     	
			     	console.log('Setting Layout');
			     	
					// Set the layout for this config
			     	$(document).set_layout_data(data.layout,url,template);
		     	 
		     	 	
		     	 	// Parse through the json object and populate fields
		     	 	// We set a small delay here to account for any load delay with loading theme values
		     	 	// Config for the template gets higher priority over
		     	 	// Theme 
		     	 	
	     	 		setTimeout(function() {
	     	 			
	     	 			$.each( data.params, function( key, val ) {
	     	 			
	     	 				// Inputs
	     	 				$('input#' + key).val(val).attr('data-stored', val);	  
	     	 				
	     	 				// Checkboxes
	     	 				// Check if checked and set to 1
	     	 				if($('input#' + key).is(':checkbox')) {
	     	 					
	 	 						var toggle = $(this).attr('id');
	 	 						
	 	 						// Set value to 0
	 	 						$(this).val('');
	 	 						
	 	 						// Check if checked and set to 1
	 	 						if($(this).is(':checked')) {
	 	 							$(this).val(1);
	 	 							$('.' + toggle).fadeIn().parent().show();
	 	 						}
	 	 						else {
	 	 							$(this).val(0);
	 	 							$('.' + toggle).fadeOut().parent().hide();
	 	 							
	 	 						}
	     	 				}
	     	 				
	     	 							
	     	 				// Selects
	     	 				$('select#' + key + ' option[value="'+ val +'"]').attr("selected","selected"); 
	     	 				
	     	 				if(key === "theme") {
	     	 					$('#cssfiles,#style-name').val(val);
	     	 				}
	     	 			});	
	     	 			
	     	 			// If no items active in the layout
	     	 			// Set stack positions etc
	     	 			$.each( data.layout, function( row,value ) {
	     	 				
	     	 				var classes = value.classes.classes;
	     	 				    classes = classes.split(' ');
		     	 				
	     	 				$.each( classes, function( index, classname) {
	     	 					// Selects
	     	 					
	     	 					$('[data-id="'+row+'_settings"].side-drawer [data-id="'+classname+'"]').addClass('active');
	     	 						
	     	 				});
	     	 				
	     	 				// Check to see if any items are active in the row
	     	 				var count = 0;
	     	 				
	     	 				$('#'+ row + '-row [data-active="1"]').each(function(){
	     	 					count ++;
	     	 				});
	     	 				
	     	 				if(count === 0) {
	     	 					$('#'+ row + '-row').addClass('empty-row');
	     	 				}
		     	 		});
		     	 		
		     	 		theme = theme.replace('presets/theme.[example]-', '');
		     	 			$('input#style-name').val(theme);
	     	 			
	     	 		}, 1500);
	     	 		
	     	 		jQuery('#zgfmessage,#zgfmessage .settings').fadeIn('normal', function() {
	     	 			jQuery('#zgfmessage,#zgfmessage .settings').delay(2000).fadeOut();
	     	 		});
		     	}
	     }).fail(function(jqXHR, textStatus, errorThrown) {
	     	
	     	console.log('Getting default config');
	     	
	     	$.getJSON( '../' + theme_path + 'settings/default-config.json?v=' + time).done(function(data) {
	     		
	     		
	     	 	// Check to see if the preset being used uses the new nested objects of colors and settings
	     	 	// We have to revert it back to the old way because there is no way to update old themes to the new format until the user saves them.
	     	 	 
	     	 	// Check if we have valid data
	     	 	if (typeof(data)) {
	     	 		
	     	 		// Set the theme
	     	 		var theme =  data.params.theme;
	     	 		
	     	 		$('#zgfmessage .settings span').text(page_type);
	     	 		
	     	 		// Check to see if the layout isn't using the same theme
	     	 		// Current theme
	     	 		var cssfile = $('input#theme').val();
	     	 		
	     	 		console.log('Setting ' + theme);
	     	 		
	     	 		if(template!==cssfile) {
	     	     		// Make sure a css file exists for this theme
	     	     		// By compiling it.
	     	     		console.log('theme has changed to ' + theme);
	     	     		$('input#style-name').val(theme);
	     	     		$('select#cssfile option[value="'+ theme+'"]').attr("selected","selected");
	     	     		 
	     	     		//$('#compile_required').val('1');
	     	     		$(document).set_theme_data(theme, time,theme_path);
	     	     	}
	     	     	
	     	     	console.log('Setting Layout');
	     	     	
	     			// Set the layout for this config
	     	     	$(document).set_layout_data(data.layout,url,template);
	     	 	 
	     	 	 	
	     	 	 	// Parse through the json object and populate fields
	     	 	 	// We set a small delay here to account for any load delay with loading theme values
	     	 	 	// Config for the template gets higher priority over
	     	 	 	// Theme 
	     	 	 	
	     		 		setTimeout(function() {
	     		 			
	     		 			$.each( data.params, function( key, val ) {
	     		 			
	     		 				// Inputs
	     		 				$('input#' + key).val(val).attr('data-stored', val);	  
	     		 				
	     		 				// Checkboxes
	     		 				// Check if checked and set to 1
	     		 				if($('input#' + key).is(':checkbox')) {
	     		 					
	     							var toggle = $(this).attr('id');
	     							
	     							// Set value to 0
	     							$(this).val('');
	     							
	     							// Check if checked and set to 1
	     							if($(this).is(':checked')) {
	     								$(this).val(1);
	     								$('.' + toggle).fadeIn().parent().show();
	     							}
	     							else {
	     								$(this).val(0);
	     								$('.' + toggle).fadeOut().parent().hide();
	     								
	     							}
	     		 				}
	     		 				
	     		 							
	     		 				// Selects
	     		 				$('select#' + key + ' option[value="'+ val +'"]').attr("selected","selected"); 
	     		 				
	     		 				if(key === "theme") {
	     		 					$('#cssfiles,#style-name').val(val);
	     		 				}
	     		 				
	     		 				theme = theme.replace('presets/theme.[example]-', '');
	     		 					$('input#style-name').val(theme);
	     		 			});	
	     		 			
	     		 			// If no items active in the layout
	     		 			// Set stack positions etc
	     		 			$.each( data.layout, function( row,value ) {
	     		 				
	     		 				var classes = value.classes.classes;
	     		 				    classes = classes.split(' ');
	     	 	 				
	     		 				$.each( classes, function( index, classname) {
	     		 					// Selects
	     		 					
	     		 					$('[data-id="'+row+'_settings"].side-drawer [data-id="'+classname+'"]').addClass('active');
	     		 						
	     		 				});
	     		 				
	     		 				// Check to see if any items are active in the row
	     		 				var count = 0;
	     		 				
	     		 				$('#'+ row + '-row [data-active="1"]').each(function(){
	     		 					count ++;
	     		 				});
	     		 				
	     		 				if(count === 0) {
	     		 					$('#'+ row + '-row').addClass('empty-row');
	     		 				}
	     	 	 			});
	     	 	 		
	     	 	 		
	     		 			
	     		 		}, 1500);
	     		 		
	     		 		
	     		 		
	     		 		jQuery('#zgfmessage,#zgfmessage .settings').fadeIn('normal', function() {
	     		 			jQuery('#zgfmessage,#zgfmessage .settings').delay(2000).fadeOut();
	     		 		});
	     	 		}
	     	 	
	     	 	});
	     });
	};			
})(jQuery);