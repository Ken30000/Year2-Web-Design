function count_vote(array) {
    if (array.length == 0) {
        console.log("There are no votes yet");
        return;
    }

    let count = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] in count) {
            count[array[i]] += 1;
        } else {
            count[array[i]] = 1;
        }
    }
    let temp = 0;
    for (let key in count){
        if (count[key] > temp){
            temp = count[key];
        }
    }
    return temp;
}