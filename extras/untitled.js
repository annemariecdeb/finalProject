const fname = document.getElementById("first_name"),
      lname = document.getElementById("last_name"),
       msg = document.getElementById("name_error_msg");

function cx`(){
    const error = "";

    if(fname.value && lname.value){ 
    // if both fields are filled, let's validate

    //check if either value contains any numbers
    if(/[0-9]/.test(fname.value) || /[0-9]/.test(lname.value)) 
    	error = "<b><i>No numbers allowed</b></i>";

    //check if either value contains any characters besides words and hyphens
    else if(!/^[A-z/-]+$/.test(fname.value) || (!/^[A-z/-]+$/.test(lname.test))) 
    error = "<b><i>No spaces or special characters allowed</b></i>";
    }
    else if(fname.value) // means if the lname is empty
        error = "<b><i>You can't leave your Last Name empty</b></i>";
    else if(lname.value) // means if the fname is empty
        error = "<b><i>You can't leave your First Name empty</b></i>";
    else //both are empty
        error = "<b><i>Please input your full name</b></i>";

    if(error) msg.innerHTML = error;
    else {
        msg.innerHTML = "";
        //process answer from form
    }
}

fname.onchange = check;
lname.onchange = check;

// 1. FIRST NAME/LAST NAME

const party = document.getElementsByName("group1");

function validateForm() {
   
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("You must know someone! Please check one option!");
    return formValid;
}

// 2. PARTY

 const country = document.getElementById("homeland"),
       msg = document.getElementById("name_error_msg");

function check(){
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
        error = "<b><i>You can't leave your Last Name empty</b></i>";
    

    if(error) msg.innerHTML = error;
    else {
        msg.innerHTML = "";
        //process answer from form
    }
}

fname.onchange = check;
lname.onchange = check;

// 6. NATIONALITY
