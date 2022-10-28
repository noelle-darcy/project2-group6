                            //**TO-DO: */
        //**-access data from dogs.js (dogName for drop down menu & dogWeight)*/
        //**    -see which dogs match the user's ID of who's signed in */
        //**-return data listed in dogAppt to reservations.js */
        //**-add dog's name to confirmation message (might as well since you're already pulling it) */
        //**-add function to display calendar & drop down menu */
        //**-add function to make sure appts can't overlap */
        //**-add return button that returns user to their account page */


// Grabbing variables from handlebars files
var nailClipping = document.getElementById("nailClipping");
var teethBrushing = document.getElementById("teethBrushing");
var earCleaning = document.getElementById("earCleaning");
var brushOut = document.getElementById("brushOut");
var analGlands = document.getElementById("analGlands");
var deshedding = document.getElementById("deshedding");
var mainGroomingSession = document.getElementById("mainGroomingSession");
var addonSession = document.getElementById("addonSession");
var confirmationMessage = document.getElementById("confirmationMessage");
var grooming = document.getElementById("grooming");
var daycareBookingSystem = document.getElementById("daycareBookingSystem");

// variables for confirmation message
var totalCost = 0;
var groomingCost = 0;
var sessionSelected = '';
var addonSelected = [];

// Replace these variables 
var dogName = 'Brody';
var daycareDate = 'November 30th';
var dogWeight = 30;

if (dogWeight < 50 ) {
    totalCost = 45;
}else {
    totalCost = 65; 
}

// TO ADD TO DOG DATABASE!!!!
// you can't add an object to a datbase easily but I wanted to keep everything needed in the database together :)
var dogAppt = {
    overallSession: 'dayCare',                     //will most likely want to store wether it's a daycare/boarding session or not
    dropoffDate: '', 
    sessionSelected: 'could be null',              //this is referring to grooming session
    addonSelected: ['could be null'], 
    totalCost: ''
}



// If user clicks that they DON'T want to add grooming
var noGrooming = document.getElementById("noGrooming");
noGrooming.addEventListener('click', groomingNotNeeded);
function groomingNotNeeded(event) {
    event.preventDefault;
    daycareBookingSystem.style.display = 'none';
    displayConfirmation ();
}

function displayConfirmation () {
    confirmationMessage.textContent = `You booked Doggy Day Care for ${dogName} on ${daycareDate}. Your total cost is $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
}


// If user clicks that they want to add grooming
var yesGrooming = document.getElementById("yesGrooming");
yesGrooming.addEventListener('click', groomingNeeded);
function groomingNeeded(event) {
    event.preventDefault;
    daycareBookingSystem.style.display = 'none';
    grooming.style.display = 'block';
}


// Functions that will be run through IF user adds on grooming
var fullGroom = document.getElementById("fullGroom");
    fullGroom.addEventListener('click', fullGroomSelected);

function fullGroomSelected(event){
    event.preventDefault;
    // Add to reservations database
    groomingCost = 70;
    sessionSelected = 'Full Groom';
    mainGroomingSession.style.display = "none";
    addonSession.style.display = "block";
}

var luxuryBath = document.getElementById("luxuryBath");
luxuryBath.addEventListener('click', luxuryBathSelected);

function luxuryBathSelected (event){
    event.preventDefault;
    // Add to reservations database
    groomingCost = 50;
    sessionSelected = 'Luxury Bath';
    mainGroomingSession.style.display = "none";
    addonSession.style.display = "block";
}

var basicBath = document.getElementById("basicBath");
basicBath.addEventListener('click', basicBathSelected);

function basicBathSelected (event){
    event.preventDefault;
    // Add to reservations database
    groomingCost = 35;
    sessionSelected = 'Basic Bath';
    mainGroomingSession.style.display = "none";
    addonSession.style.display = "block";
}



var addonChoices = document.getElementById("addonChoices");
addonChoices.addEventListener('click', checkedAddons);


function checkedAddons (event) {
    addonSession.style.display = 'block';
    if(nailClipping.checked){
        groomingCost = groomingCost + 20;
        addonSelected.push('Nail Clipping');
    }
    if(teethBrushing.checked){
        groomingCost = groomingCost + 10;
        addonSelected.push('Teeth Brushing');
    }
    if(earCleaning.checked){
        groomingCost = groomingCost + 15;
        addonSelected.push('Ear Cleaning');
    }
    if(brushOut.checked){
        groomingCost = groomingCost + 10;
        addonSelected.push('Brush Out');
    }
    if(analGlands.checked){
        groomingCost = groomingCost + 15;
        addonSelected.push('External Anal Glands');
    }
    if(deshedding.checked){
        groomingCost = groomingCost + 25;
        addonSelected.push('Deshedding Treatment');
    }
     //ADD "addonSelected" TO DATABASE
    displayConfirmationWithGrooming ();
}

function displayConfirmationWithGrooming () {
    addonSession.style.display = 'none';
    console.log(groomingCost);
    totalCost = totalCost + groomingCost;
    if (addonSelected.length === 0) {
        confirmationMessage.textContent = `You booked Doggy Day Care with ${sessionSelected} for ${dogName} on ${daycareDate}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    }else if (addonSelected.length === 1) {
        confirmationMessage.textContent = `You booked Doggy Day Care with ${sessionSelected} and ${addonSelected} for ${dogName} on ${daycareDate}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    }else {
        for (var i = 1; i < addonSelected.length; i++) { 
            addonSelected[i] = ` ${addonSelected[i]}`;
        }
        var lastAddon = addonSelected.length;
        lastAddon--;
        var lastAddonSelected = addonSelected[lastAddon];
        var addonLess = addonSelected;
        addonLess.pop();
        confirmationMessage.textContent = `You booked Doggy Day Care for ${dogName} on ${daycareDate}. You added on ${sessionSelected} with ${addonLess} and ${lastAddonSelected}. Your total will be $${totalCost}. Please remember you can drop off your pup any time after 8AM and must pick him/her up before 9PM otherwise you will not be able to pick him/her up until the next morning and will be charged an overnight fee of $50.`;
    }
}