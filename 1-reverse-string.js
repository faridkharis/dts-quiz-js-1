function reverseString(myString) {
    let result = "";

    for (let i = myString.length - 1; i >= 0; i--) {
        result += myString[i];
    }
    return result;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("world")); // Output: "dlrow"
console.log(reverseString("hello world"));