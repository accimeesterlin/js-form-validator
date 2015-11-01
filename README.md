# js-form-validator
This is a Javascript client side validation script that you can use to validate your forms.
If you absolutely hate having to validate forms on client side over and over, this script is for you!

Pros: 
- Easy to use 
- Customize error messages easily.
- You can use this on multiple forms on the same Page!
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
To use on a form you want to validate: 
Attach the class "validate-this-form" to your form.
If you require a field add the attribute ``` vrequired="on" ``` to the field tag like this:

```
<input type="text" name="username" vrequired="on">
```

You can validate for email,number and url using ```vtype="numberonly", vtype="emailonly" and vtype = "urlonly"```
To validate for email,number and url, add the attribute to the field tag like this.  

``` 
<input type="text" name="phonenumber" vtype="numberonly"> 
<input type="text" name="email" vtype="emailonly" > 
<input type="text" name="website" vtype="urlonly" > 

```
A sample form to be validated is:

```
<form action="#" class="validate-this-form" method="post">
<input type="text" name="uniquecode" vtype="numberonly" vrequired="on">
<input type="text" name="phone"  vtype="numberonly" vrequired="on"> 
<input type="text" name="email"  vtype="emailonly"> 
<input type="text" name="website" vtype="urlonly"> 
<input type="submit" name="submit" >
</form>
```
Finally, to show the error messages per field, just add an element with class
validate-error-{fieldname}, wherever you want to appear inside the form tag. E.g 

```
<input type="text" name="phone" vtype="numberonly" vrequired="on">
<span class="validate-error-phone"></span>
```
Enjoy.

Future Additions
=================
- Using a vtype="require-all" attribute on the main form tag to automatically make all fields required.
- Password validation. (weak password,confirm password...)









References
==========
http://blog.roymj.co.in/url-validation-using-regular-expression-javascript/
