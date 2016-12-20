$(function(){
  //This is our variable to keep track of data coming from Firebase
  var data= [];
  
  //Here we are creating a new connection to firebase
	var ref= new Firebase('#');
  

  //Now we are listening to data updates from firebase
	ref.on("value", function (snapshot){
    console.log(snapshot.val());
   //Each time the data updates at firebase, this will put it in the data variable
    data= snapshot.val();
  })

//Entire questionnaire

// Our main function we are feeding all the data into
$('#newQuestionnaire').submit(function(event) {
  
  var $form = $(this);
  console.log("Submit to Firebase");
  
  //Get values to send to Firebase
  var firstnameToSend = $('#questionnaireFN').val();
  console.log(firstnameToSend);
  
  var lastnameToSend = $('#questionnaireLN').val();
  console.log(lastnameToSend);
  
  var typeguestToSend= $('#questionnaireTypeGuest').val();
  console.log(categoryToSend);
  
  //Take the values from the form, and put them in an object
  var newQuestionnaire= {
    "lastnmame": firstnameToSend,
    "firstname": lastnameToSend,
    "typeguest": typeguestToSend
  }
  //Now we need to put our new object in a data array
  data.push(newQuestionnaire);
  console.log(data);
  
  //Now we need to send our new data to Firebase
	ref.set(data, function(err){
    if(err){
      alert("There's something up with your data");
      }
    });

    return false;
  })
  ///Make a login form submission handler
  $('#login').submit(function(event){
    var $form = $(this);
    $form.find('#registerForm').prop('disabled', true);
    
    //Now get the value of the login email
		var login = $("#loginInput").val();
    //Now get the value of the password
    var password = $("#passwordInput").val();
     
    console.log(login, password);
    register(login, password);
    
    return false;
  })

  ////Detect the authication state
  var reg = new Firebase("#");
  reg.onAuth(function(authData){
    console.log("info on authentication");
    if(authData){
      //Now you are logged in
      
    }else{
      //Now you are not logged in
      
    }
  })