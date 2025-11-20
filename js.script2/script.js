// Simple love calculator using basic JS only

let yourName = "Ali"; 
let crushName = "Ayesha";

// Random love percentage (1 to 100)
let lovePercent = Math.floor(Math.random() * 100) + 1;

let message = "";

if (lovePercent > 80) {
    message = "Perfect Match ❤️";
}
else if (lovePercent > 60) {
    message = "Good Chemistry 😍";
}
else if (lovePercent > 40) {
    message = "Could work 🙂";
}
else if (lovePercent > 20) {
    message = "Not a strong match 😬";
}
else {
    message = "Bro… no chance 💀";
}

console.log("Your Name: " + yourName);
console.log("Crush Name: " + crushName);
console.log("Love %: " + lovePercent);
console.log("Result: " + message);
