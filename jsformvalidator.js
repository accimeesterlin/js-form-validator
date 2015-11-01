
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
			var myRegExp =/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i;
			if (!myRegExp.test(value))
			return false;
			else
			return true;	

		}


	function validateRequired(field)
		{
			var v = {}
			var value = field.val();
			if(value)
				return true;
			else
			{
				v._error = requiredError;
				return v;
			}
			

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
		$(this).submit(function(e){

		var validationtype = $(this).attr('vtype');
		var errorObj = [];

		$(this).find('input').each(function(){

			var nameField = $(this).attr('name');

			//check if field is required
			var req = $(this).attr('vrequired');

			var currentform = $(this).parents('form:first');
			var className = '.validate-error-'+nameField;

			if(req && req == "on"){
			var valid = validateRequired($(this));


			if(valid._error)
			{
				currentform.find(className).html(valid._error);
				//e.preventDefault();
				errorObj.push(_error);
			}
			else
				currentform.find(className).html("");

			}
			
			else{

			var v = myValidator($(this));

			if(v.error && (v.error != ""))
			{
			
			var error = v.error;

			currentform.find(className).html(error);

			errorObj.push(error);
		
			}
			else
			{
				currentform.find(className).html("");

			}

		}
	});
	
		console.log(errorObj)

		if(errorObj.length > 0)
		{
			e.preventDefault();
			
		}

		return;

		
	});
	
});

});
