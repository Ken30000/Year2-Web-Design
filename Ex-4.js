function count_character(text, char) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        if (char === text[i]) {
            count += 1;
        }
    }
    return count;
}

console.log(count_character("hello world", "o"));
console.log(count_character("aaa bbb a", "a"));
console.log(count_character("abc", "d"));