                            //**TO-DO: */
        //**-access data from dogs.js (dogName for drop down menu)*/
        //**    -see which dogs match the user's ID of who's signed in */
        //**-return data listed in dogAppt to reservations.js */
        //**-add dog's name to confirmation message (might as well since you're already pulling it) */
        //**-add function to display calendar & drop down menu */
        //**-fix functions path: checkedAddons -> (appt function) -> confirmation message */
        //**-add function to calculate pickup time frame */
        //**-add pickup time frame to confirmation message */
        //**-add function to make sure appts can't overlap */
        //**-add return button that returns user to their account page */


var nailClipping = document.getElementById("nailClipping");
var teethBrushing = document.getElementById("teethBrushing");
var earCleaning = document.getElementById("earCleaning");
var brushOut = document.getElementById("brushOut");
var analGlands = document.getElementById("analGlands");
var deshedding = document.getElementById("deshedding");
var mainGroomingSession = document.getElementById("mainGroomingSession");
var addonSession = document.getElementById("addonSession");
var confirmationMessage = document.getElementById("confirmationMessage");
var apptDetails = document.getElementById("apptDetails");


var apptTime = 0;
var groomingCost = 0;
var sessionSelected = '';
var addonSelected = [];

// TO ADD TO DOG DATABASE!!!!
// (you can't add an object to a datbase easily but I wanted to keep everything needed in the database together :)
var dogAppt = {
    overallSession: 'grooming',                     //will most likely want to store wether it's a daycare/boarding session or not
    date: '',
    dropoffTime: '', 
    pickupTime: '',
    sessionSelected: '',
    addonSelected: [], 
    groomingCost: ''
}



var fullGroom = document.getElementById("fullGroom");
fullGroom.addEventListener('click', fullGroomSelected);

function fullGroomSelected(event){
    event.preventDefault;
    // Add to reservations database
    apptTime = 90;
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
    apptTime = 60;
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
    apptTime = 30;
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
        apptTime = apptTime + 10;
        groomingCost = groomingCost + 20;
        addonSelected.push('Nail Clipping');
    }
    if(teethBrushing.checked){
        apptTime = apptTime + 5;
        groomingCost = groomingCost + 10;
        addonSelected.push('Teeth Brushing');
    }
    if(earCleaning.checked){
        apptTime = apptTime + 5;
        groomingCost = groomingCost + 15;
        addonSelected.push('Ear Cleaning');
    }
    if(brushOut.checked){
        apptTime = apptTime + 5;
        groomingCost = groomingCost + 10;
        addonSelected.push('Brush Out');
    }
    if(analGlands.checked){
        apptTime = apptTime + 10;
        groomingCost = groomingCost + 15;
        addonSelected.push('External Anal Glands');
    }
    if(deshedding.checked){
        apptTime = apptTime + 15;
        groomingCost = groomingCost + 25;
        addonSelected.push('Deshedding Treatment');
    }
    // SEND TO APPOINTMENT BOOK FIRST
    // then from that function you'll send it to confirmMessage


        //ADD "addonSelected" TO DATABASE


    displayConfirmation ();
}

function displayConfirmation () {
    addonSession.style.display = 'none';
    confirmationMessage.style.display = 'block';

    if (addonSelected.length === 0) {
        apptDetails.textContent = `You booked ${sessionSelected}. Your total will be $${groomingCost}.`;
    }else if (addonSelected.length === 1) {
        apptDetails.textContent = `You booked ${sessionSelected} with ${addonSelected}. Your total will be $${groomingCost}.`;
    }else {
        for (var i = 1; i < addonSelected.length; i++) { 
            addonSelected[i] = ` ${addonSelected[i]}`;
        }
        var lastAddon = addonSelected.length;
        lastAddon--;
        var lastAddonSelected = addonSelected[lastAddon];
        var addonLess = addonSelected;
        addonLess.pop();
        apptDetails.textContent = `You booked ${sessionSelected} with ${addonLess} and ${lastAddonSelected}. Your total will be $${groomingCost}.`;
        console.log(addonLess);
    }
}

