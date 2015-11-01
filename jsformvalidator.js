
var numberOnlyError = "Must be a number!";
var stringOnlyError = "Must be letters only";
var emailOnlyError = "Please enter a valid email";
var urlOnlyError = "Please enter a valid URL";
var requiredError = "This field is required";
 
 

	function validateNumberOnly(field)
		{
			var value = field.val();
			if(isNaN(value))
				return false
			else
				return true;
			


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

		var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
		var value = field.val();
		if(value.match(emailformat))
		 	return true;
		 else
		 	return false;		
		}

	function validateUrlOnly(field)
		{
			var value = field.val();
		

		}


	function validateRequired(field)
		{
			var value = field.val();
			

		}

	function myValidator(field)
	{
		var vtype = field.attr('vtype');
		var _result;
		var _error;
		var valid = {}
		switch(vtype)
		{
			case "numberonly": _result = validateNumberOnly(field);
								_error = _result ? "" : numberOnlyError;
			break;
			case "stringonly": _result = validateStringOnly(field);
								_error = _result ? "" : stringOnlyError;
			break;
			case "emailonly": _result = validateEmailOnly(field);
							  _error = _result ? "" :emailOnlyError
			break;
			case "urlonly": _result = validateUrlOnly(field);
							  _error = _result ? "" :urlOnlyError
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
			
			var v = myValidator($(this));
			console.log("v====>",v)

		});
	});
	
});


