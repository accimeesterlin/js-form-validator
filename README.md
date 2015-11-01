# js-form-validator
This is a Javascript client side validation script that you can use to validate your forms.
If you absolutely hate having to validate forms on client side over and over, this script is for you!

Pros: Easy to use and customize error messages for.
Cons: You're welcome to help me find them  :)

Dependencies
============
jQuery Library



How to use
==========
Download and Include the jQuery Library from jQuery.com in your code.<br/>
Download jsformvalidator (fork or download as zip)
Include the jsformvalidator after your jQuery library link <br/>
E.g 

```
<script src="jquery.1.9.1.min.js"></script>
<script src="jsformvalidator.js"></script>
```
or Include jQuery from a CDN, before adding the jsformvalidator.js

```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="jsformvalidator.js"></script>

```
To use on a form you want to validate.
Attach the class "validate-this-form" to your form.
If you require a field add the attribute ``` vrequired="on" ``` to the field tag.
To validate for email,number and url, add the attribute 
```vtype="emailonly"<br/>
vtype="numberonly"<br/>
vtype="urlonly"<br/>
```









References
==========
http://blog.roymj.co.in/url-validation-using-regular-expression-javascript/
