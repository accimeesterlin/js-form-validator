
var numberOnlyError = "Must be a number!";
var stringOnlyError = "Must be letters only";
var emailOnlyError = "Please enter a valid email"

	function validateNumberOnly(field)
		{
			var value = field.val();
			if(value)


		}

	function validateStringOnly(field)
		{
			var value = field.val();
			if (typeof value === 'string' || myVar instanceof String)
				return true;
				else
				return false;


		}

	function validateEmailOnly(field)
		{
			var value = field.val();
			if(value)

		}

	function validateRequired(field)
		{
			var value = field.val();
			if(value)

		}

	function myValidator()
	{
		var vtype = field.attr('vtype');
		var result;
		switch(vtype)
		{
			case "numberonly": result = validateNumberOnly(field);
								error = ''
			break;
			case "stringonly": result = validateStringOnly(field);

		}
	}



$(document).ready(function(){

	$('.validate-this-form').each(function(){
		var validationtype = $(this).attr('vtype');
		$(this).find('input').each(function(){
			alert($(this).attr('name'));
			
			validateNumberOnly($(this));

		});
	});
	
});


