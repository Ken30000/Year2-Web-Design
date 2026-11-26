function calculate_avg(array) {
    let sum = 0;

    if (array.length <= 0) {
        return 0;
    }
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

console.log(calculate_avg([85, 90, 78, 92]));
console.log(calculate_avg([10, 20, 30]));
console.log(calculate_avg([]));