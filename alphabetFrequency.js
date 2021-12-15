const frequencyCounter = (sentence) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const results = {}
    for (var i = 0; i < sentence.length; i++) {
        if (alphabet.indexOf(sentence[i].toLowerCase()) !== -1) {
            console.log(sentence[i], results);
            if (sentence[i].toLowerCase() in results) {
                results[sentence[i].toLowerCase()]++
            } else {
                results[sentence[i].toLowerCase()] = 1
            }
        }
    }
    console.log("results ", results);
}

word = "THis aaaaaAAAAaaaa";
console.log(frequencyCounter(word))