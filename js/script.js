let eventType = prompt("What type of event are you attending? (casual, semi-formal, or formal)").toLowerCase();
let tempFahr = prompt("What temperature is it outside? (please give a whole number)");
let eventTypeClothing;
let tempFahrClothing;

if (eventType === "casual") {
eventTypeClothing = "something comfy"
} else if (eventType === "semi-formal") {
eventTypeClothing = "a polo"
} else if (eventType === "formal") {
eventTypeClothing = "a suit"
}

if (tempFahr < 54) {
tempFahrClothing = "a coat"
} else if (tempFahr >= 54 && tempFahr <= 70) {
tempFahrClothing = "a jacket"
} else if (tempFahr > 70) {
tempFahrClothing = "no jacket"
}

let result = "Since it is " + tempFahr + " degrees and you are going to a " + eventType + " event, you should wear " + eventTypeClothing + " and " + tempFahrClothing + ".";

console.log(result);