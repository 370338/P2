/*
CIT 281 Project 2
Name: Owen Beedle
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
    
    // Returns a single, random, lowercase letter
    function getRandomLetter() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet.charAt(getRandomInteger(0, alphabet.length));
    }
    
    // Returns a random length string of random lowercase letters
    function getRandomString(minLength = 10, maxLength = 20) {
    let stringLength = getRandomInteger(minLength, maxLength + 1);
    let result = '';
    for (let i = 0; i < stringLength; i++) {
    result += getRandomLetter();
    }
    return result;
    }
    
    // Returns a string in ascending order
    function getSortedString(string) {
    return string.split('').sort().join('');
    }
    
    console.log(getSortedString(getRandomString()));