
var numberOnlyError = "Must be a number!";
var stringOnlyError = "Must be letters only";
var emailOnlyError = "Please enter a valid email";
var urlOnlyError = "Please enter a valid URL";
var requiredError = "This field is required";

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
		var _result;
		var _error;
		var valid = {}
		switch(vtype)
		{
			case "numberonly": _result = validateNumberOnly(field);
								_error = numberOnlyError;
			break;
			case "stringonly": _result = validateStringOnly(field);
								_error = stringOnlyError;
			break;
			default:
			break

		}

		valid.result = _result;
		valid.error = _error;

		return valid;


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


