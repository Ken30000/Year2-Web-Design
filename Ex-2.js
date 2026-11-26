function reverse_array(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1];
        array[array.length - i - 1] = temp;
    }
    return array;
}

console.log(reverse_array([14, 15, 16, 20]));
console.log(reverse_array([5, 4, 3, 2, 1]));
console.log(reverse_array([]));
