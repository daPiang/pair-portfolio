let bg = document.getElementById('bg_img');
let person = document.getElementById('person_img');
let quote = document.getElementById('quote_txt');
let plate = document.getElementById('plate_txt');
let rizal_btn = document.getElementById('btn-rizal');
let mart_btn = document.getElementById('btn-mart');
let sun_btn = document.getElementById('btn-sun');
let soc_btn = document.getElementById('btn-soc');
let niet_btn = document.getElementById('btn-niet');
let quote_btn = document.getElementById('quote_btn');

let buttonState = 0;
let quoteState = -1;

function setRizal() {
    if(buttonState!=1){
        quote.innerHTML = '';
    }

    buttonState = 1;

    deselectButtons();
    rizal_btn.style.filter='brightness(120%)';

    bg.src='img/bg_rizal.jpg';
    person.src='img/rizal.png';
    person.style.top='20.5rem';
    quote.style.color='goldenrod';
    plate.innerHTML='Jose Rizal';
    plate.style.fontSize='2rem';
    quote_btn.style.visibility='visible';
}
function setMart() {
    if(buttonState!=2){
        quote.innerHTML = '';
    }

    buttonState = 2;

    deselectButtons();
    mart_btn.style.filter='brightness(120%)';

    bg.src='img/bg_martin.jpg';
    person.src='img/martin.png';
    person.style.top='20.5rem';
    quote.style.color='white';
    plate.innerHTML='Martin Luther<br>King Jr.';
    plate.style.fontSize='1.36rem';
    quote_btn.style.visibility='visible';
}
function setSun() {
    if(buttonState!=3){
        quote.innerHTML = '';
    }
    
    buttonState = 3;

    deselectButtons();
    sun_btn.style.filter='brightness(120%)';

    bg.src='img/bg_sun_tzu.jpg';
    person.src='img/sun_tzu.png';
    person.style.top='18rem';
    quote.style.color='white';
    plate.innerHTML='Sun Tzu';
    plate.style.fontSize='2rem';
    quote_btn.style.visibility='visible';
}
function setSoc() {
    if(buttonState!=4){
        quote.innerHTML = '';
    }
    
    buttonState = 4;
    
    deselectButtons();
    soc_btn.style.filter='brightness(120%)';

    bg.src='img/bg_scorates.jpg';
    person.src='img/socrates.png';
    person.style.top='18rem';
    quote.style.color='black';
    plate.innerHTML='Socrates';
    plate.style.fontSize='2rem';
    quote_btn.style.visibility='visible';
}
function setNiet() {
    if(buttonState!=5){
        quote.innerHTML = '';
    }
    
    buttonState = 5;

    deselectButtons();
    niet_btn.style.filter='brightness(120%)';

    bg.src='img/bg_nietzsche.jpg';
    person.src='img/nietzsche.png';
    person.style.top='18rem';
    quote.style.color='goldenrod';
    plate.innerHTML='Nietzsche';
    plate.style.fontSize='2rem';
    quote_btn.style.visibility='visible';
}
function getQuote() {
    quoteState += 1;
    
    if(quoteState==5) {
        quoteState=0;
    }

    switch(buttonState) {
        default:
            break;
        case 1:
            quote.innerHTML = arr_rizal[quoteState];
            break;
        case 2:
            quote.innerHTML = arr_mart[quoteState];
            break;
        case 3:
            quote.innerHTML = arr_sun[quoteState];
            break;
        case 4:
            quote.innerHTML = arr_soc[quoteState];
            break;
        case 5:
            quote.innerHTML = arr_niet[quoteState];
            break;
    }
}
function deselectButtons() {
    rizal_btn.style.filter='grayscale(100%)';
    mart_btn.style.filter='grayscale(100%)';
    sun_btn.style.filter='grayscale(100%)';
    soc_btn.style.filter='grayscale(100%)';
    niet_btn.style.filter='grayscale(100%)';
}

const arr_rizal = ['He who does not know how to look back at where he came from will never get to his destination.',
'One only dies once, and if one does not die well, a good opportunity is lost and will not present itself again.',
'There can be no tyrants where there are no slaves.',
'Each one writes history according to his convenience.',
'He who would love much has also much to suffer.']

const arr_soc = ['The only true wisdom is in knowing you know nothing.',
'Be slow to fall into friendship, but when you are in, continue firm and constant.',
'Sometimes you put walls up not to keep people out, but to see who cares enough to break them down.',
'The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less.',
'Let him who would move the world first move himself.']

const arr_sun = ['In the midst of chaos, there is also opportunity.',
'The greatest victory is that which requires no battle.',
'Supreme excellence consists of breaking the enemy\'s resistance without fighting.',
'Who wishes to fight must first count the cost.',
'Let your plans be dark and impenetrable as night, and when you move, fall like a thunderbolt']

const arr_niet = ['Without music, life would be a mistake.',
'That which does not kill us makes us stronger.',
'You must have chaos within you to give birth to a dancing star.',
'In heaven, all the interesting people are missing.',
'There are no facts, only interpretations']

const arr_mart = ['We must accept finite disappointment, but never lose infinite hope.',
'Forgiveness is not an occasional act. It is a permanent attitude.',
'Never succumb to the temptation of bitterness.',
'Let no man pull you so low as to hate him.',
'The time is always right to do what is right.']