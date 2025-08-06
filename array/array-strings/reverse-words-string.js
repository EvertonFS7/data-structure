function reverseWords (s) {
    let words = s.split(' ');
    let res = [];

    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i]) {
            res.push(words[i]);
        }
    }

    return res.join(' ');
}

const s = "Olá Mundo"

console.log(reverseWords(s)) 

