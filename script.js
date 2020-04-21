
// Task 1. 

function oddEven(integers) {
    if (integers % 2 === 0) {
        return ('Even'); 
    } else {
        return ('Odd')
    }
}

console.log(oddEven(3)); 


// Task 2. I got help with this one. 

let inputString;
inputString = prompt('write anything'); 
let outputString = ''; 

function returnConsonant(character) {
    let returnVariabel;  
    if (character === 'a') {
        returnVariabel = ''; 
    } else if (character === 'o') {
        returnVariabel = ''; 
    } else if (character === 'u') {
        returnVariabel = ''; 
    } else if (character === 'e') {
        returnVariabel = ''; 
    } else if (character === 'i') {
        returnVariabel = ''; 
    } else if (character === 'y') {
        returnVariabel = ''; 
    } else {
        returnVariabel = character; 
    }
    return returnVariabel;
} 

// simsalabim
for (let i = 0; i < inputString.length; i++) {
    outputString = outputString + returnConsonant(inputString[i]); 
}

console.log(outputString); 


// Task 3. I got help with this one. 

function repeatString(inputString, repeatNr) {
    let outputString = ''; 
    for (let i = 0; i < repeatNr; i++) {
        outputString = outputString + inputString; 
    }
    return outputString; 

}

console.log(repeatString("Hello", 5));
console.log(repeatString("Hi!", 7));





