/* VARIABLE DECLARATIONS */

//variables for form choices

//makes empty objects to match the fields/model
let contactInfo = {};
contactInfo.firstName = '';
contactInfo.lastName = '';
contactInfo.email = '';
contactInfo.telephone = '';

let relationship = {};
relationship.party = '';
relationship.origin = '';

let identity = {};
identity.age = 0;
identity.age = 0;
identity.age = '';
identity.age = '';

let logistics = {};
logistics.transport = '';
logistics.assistance = false;

let events = {};
events.preWedding = {};
events.preWedding.attending = false;
events.wedding = {};
events.wedding.attending = false;

/* FUNCTION DECLARATIONS */

//form submit event
function submitForm(event) {
    event.preventDefault();
    window.location.assign('analytics.html');
    // getFormValues();
    // validateFormInputs();
    // writeFormValuesToFBase();
}

function getFormValues() {
    contactInfo.firstName = $('#first_name').val();
    contactInfo.lastName = $('#last_name').val()
    contactInfo.email = $('#icon_email').val();
    contactInfo.telephone = $('#icon_telephone').val();
    console.log(contactInfo);
}

function validateFormInputs() {
    
}

function writeFormValuesToFBase() {
    
}

function onSubmitFormEnter() {
    $('input').keypress((e) => {
        if (e.key === 'Enter') {
            submitForm(e);
        }
    });
}

function onSubmitFormClick() {
    $('.js-formSubmit').click((e) => {
        submitForm(e);
    });
}

/* FUNCTION CALLS */

//invoke our click and Enter listeners
onSubmitFormClick();
// onSubmitFormEnter();

