function secondLargest(value) {
    let result = 0;
    let largest = 0;

    for (let i = 0; i < value.length; i++) {
        if(value[i] > largest) largest = value[i];
    }

    for (let i = 0; i < value.length; i++) {
        if(value[i] > result && value[i] < largest) result = value[i];
    }
    return result;
}

console.log(secondLargest([10, 5, 20, 8])); // Output: 10
console.log(secondLargest([1, 2, 3, 4, 5])); // Output: 4
console.log(secondLargest([100, 109, 0, -108, 30, 25, -26]));