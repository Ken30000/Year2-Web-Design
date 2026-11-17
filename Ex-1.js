function challenge1(width, height) {
    let rectangleString = "";

    if (height <= 0 || height <= 0) {
        return;
    }
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rectangleString += "*";
        }
        rectangleString += "\n";
    }

    return rectangleString;
}

let width = 3;
let height = 4;
console.log(challenge1(width, height));
