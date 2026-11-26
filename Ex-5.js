function count_word(text) {
    let count = 0;
    let inWord = false;

    for (let i = 0; i < text.length; i++) {
        if (text[i] !== " ") {
            if (!inWord) {
                count += 1;
                inWord = true;
            }
        } else {
            inWord = false;
        }
    }

    return count;
}

console.log(count_word("hello world"));
console.log(count_word("this is the best day"));
console.log(count_word("a bb ccc ddddddd e"));