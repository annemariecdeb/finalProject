// 1. FIRST NAME/LAST NAME
const fname = $("#first_name"),
      lname = $("#last_name");
const msg = document.getElementById("name_error_msg");

console.log('here')
function validateInput(){
	console.log(this)

    const error = "";

    if(fname.value && lname.value){ 
    }
    else if(fname.value) // means if the fname is empty
        error = "<b><i>You can't leave your First Name empty</b></i>";
    else if(lname.value) // means if the lname is empty
        error = "<b><i>You can't leave your Last Name empty</b></i>";
    else //both are empty
        error = "<b><i>Please input your full name</b></i>";

    if(error) msg.innerHTML = error;
    else {
        msg.innerHTML = "";
        //process answer from form
    }
}
console.log('fname', fname)
fname.change((e) => {
	console.log(e)
})
lname.change(validateInput);
// FIRST NAME/LAST NAME

// 2. PARTY
const party = $("#group1");

function validateRadio() {
   
    const formValid = false;

    const i = 0;
    while (!formValid && i < party.length) {
        if (party[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("You must know someone! Please check one option!");
    return formValid;
}
// PARTY

// 3. RELATIONSHIPS
const rel = $("#group2"),

function validateRadio() {
   
    const formValid = false;

    const i = 0;
    while (!formValid && i < rel.length) {
        if (rel[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("You must have met somewhere! Please check one option!");
    return formValid;
}
// RELATIONSHIPS

// 4. GENDER
function validateCheckbox(){
   if(!validateForm()){
       alert("Call the PC Police. Gender fluidity is important to us. Please check at least one of the checkboxes.");
       return false;
   }
return true
}

function validateForm()
{
    const check=document.document.getElementsByTagName('option');
    for (const i = 0; i<check.length; i++){
        if (check[i].type=='checkbox')
        {
            if (check[i].checked){return true}
        }
    }
    return false;
}

// GENDER

// 5. BIRTHDAY

// TBC

// BIRTHDAY

// 6. NATIONALITY
const country = $("#homeland"),
var msg = document.getElementById("name_error_msg");
     

function validateInput(){
    const error = "";

    if(country.value){ 
    // if the field is filled, let's validate

    //check if the value contains any numbers
    if(/[0-9]/.test(country.value)) 
    	error = "<b><i>No numbers allowed</b></i>";

    //check if the value contains any characters besides words and hyphens
    else if(!/^[A-z/-]+$/.test(country.value)) 
    error = "<b><i>No spaces or special characters allowed</b></i>";
    }
    else if(country.value) // means if the field is empty
        error = "<b><i>You come from somewhere! Please let us know. We're curious.</b></i>";
    

    if(error) msg.innerHTML = error;
    else {
        msg.innerHTML = "";
        //process answer from form
    }
}

fname.onchange = validateInput;
lname.onchange = validateInput;
// NATIONALITY

// 7. PRE-WEDDING EVENT
$(document).ready(function() {

});

function validateToggle() {
  const toggle = document.getElementByName('toggle1');
  alert('checkbox value: ' + toggle.checked);
}
// PRE-WEDDING EVENT

// 8. WEDDING EVENT

$(document).ready(function() {

});

function validateToggle() {
  const toggle = document.getElementByName('toggle2');
  alert('checkbox value: ' + toggle.checked);
}

// WEDDING EVENT

// 9. TRAVEL
const train = document.getElementsByName("group3");

function validateForm() {
   
    const formValid = false;

    const i = 0;
    while (!formValid && i < train.length) {
        if (train[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Unless you plan on squatting at the venue please check one option!");
    return formValid;
}
// TRAVEL

// 10. DIETARY REQUIREMENTS
function validateCheckbox(){
   if(!validateForm()){
       alert("Not everyone likes lobster, we get it. Please select at least one option.");
       return false;
   }
return true
}
function validateForm()
{
    const chicken=document.getElementsByTagName('input');
    for (const i = 0; i<chicken.length; i++){
        if (chicken[i].type=='checkbox1')
        {
            if (chicken[i].checked){return true}
        }
    }
    return false;
}

// DIETARY REQUIREMENTS

// 11. HELP

$(document).ready(function() {

});

function validateToggle() {
  const toggle = document.getElementByName('toggle3');
  alert('checkbox value: ' + toggle.checked);
}

// HELP

// 12. CONTACT
const email = $("#icon_email"),
      tel = $("#icon_telephone");
var msg = $("#name_error_msg");

function validateInput(){
    const error = "";
     // if both fields are filled, let's validate
    if(email.val() && tel.val()){ 

	    }
	    else if(email.val()) // means if the email is empty
	        error = "<b><i>You can't leave your email empty. We promise not to send any kitten gifs.</b></i>";
	    else if(tel.val()) // means if the fname is empty
	        error = "<b><i>You can't leave your telephone empty. Let's WhatsApp.</b></i>";
	    else //both are empty
	        error = "<b><i>Please share all of your contact details so we keep you up-to-date</b></i>";

	    if(error) msg.innerHTML = error;
	    else {
	        msg.innerHTML = "";
	        //process answer from form
	    }
}

email.onchange = validateInput;
tel.onchange = validateInput;
// CONTACT
