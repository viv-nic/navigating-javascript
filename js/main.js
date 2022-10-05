// To gather user's name, country, and greet them according to morning or afternoon
const companyName = "CLG";
let fullName = "Jude Kemp";
let country = "Australia";
let morning = true;
let greeting = "G'Day!"
 


let welcomeNote = `CLG welcomes you, ${fullName}!`;


let grandWelcome = welcomeNote.toUpperCase();

console.log(grandWelcome);

document.getElementById("welcome").innerHTML = grandWelcome;




