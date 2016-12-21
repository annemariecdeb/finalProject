// You need to first initialize your Firebase
const config = {
    apiKey: "AIzaSyDq12eFU2U2oAgynMolfkUl3OabWdWZD5A",
    authDomain: "droppinganchor-fbfdf.firebaseapp.com",
    databaseURL: "https://droppinganchor-fbfdf.firebaseio.com",
    storageBucket: "droppinganchor-fbfdf.appspot.com",
    messagingSenderId: "46721222870"
};

// Where does one write in Firebase:
firebase.initializeApp(config);

var rootRef = database.ref('/');// the slash is the top level and a shortcut is rootRef
var usersRef = rootRef.child('users/');
var guestsRef = rootRef.child('guest/');
var eventsRef = rootRef.child('events/');

// This is where you're going to write in Firebase
const database = firebase.database();
const rootRef = database.ref('/');
const weddingContainer = $('.js-wedding-container');
const submitNewQuestionnaire = $('.js-submit-questionnaire'); 
let questionnaireValues = {};



// ADD A NEW WEDDING EVENT FOR GUEST

submitNewEvent.click(submitQuestionnaire); //adds new guest data until button is clicked

//This is our variable to keep track of data coming from Firebase
function submitQuestionnaire() {
   const questionnaireData = getQuestionnaireValues();
   console.log('weddingData from getVal', questionnaireData);
   addEvent(questionnaireData);
}

// QUESTIONNAIRE

// Our main function we are feeding all the data into
//Take the values from the form, and put them in an object
function getQuestionnaireValues() {
    questionnaireValues.weddingFN = $('.js-wedding-firstname').val();
    questionnaireValues.weddingLN = $('.js-wedding-lastname').val();
    questionnaireValues.weddingGuest = $('.js-wedding-guest').val();
    questionnaireValues.weddingRelationship = $('.js-wedding-relationship').val();
    questionnaireValues.weddingGender = $('.js-wedding-gender').val();
    questionnaireValues.weddingBirthday = $('.js-wedding-birthday').val();  
    questionnaireValues.weddingHomeland = $('.js-wedding-homeland').val();
    questionnaireValues.weddingRehearsal = $('.js-wedding-rehearsal').val();
    questionnaireValues.weddingWedding = $('.js-wedding-wedding').val();
    questionnaireValues.weddingTravel = $('.js-wedding-travel').val();
    questionnaireValues.weddingFood = $('.js-wedding-food').val();
    questionnaireValues.weddingHelp = $('.js-wedding-help').val();
    questionnaireValues.weddingEmail = $('.js-wedding-email').val();
    questionnaireValues.weddingTel= $('.js-wedding-tel').val();
  
//Take the values from the form, and put them in an object


//Now we need to push our data to Firebase
function addQuestionnaireData(questionnaireData)
  questionnaireData.push(questionnaireData);
  console.log(questionnaireData);

 




