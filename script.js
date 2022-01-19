function cryptText(text) {
    const vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

    let words = text.split(' ');
    let result = '';
     
        for (let i = 0; i < words.length; i++) {
           if (words[i].length < 3) {
               result += words[i] + ' ';
           } else if (vowels.includes(words[i][0]) === true) {
                result += `код${words[i]} ` 
           
            } else result += `инту${words[i]} `
           
        } 
        return result;

}

console.log(cryptText('зафиксированная на каком-либо материальном носителе человеческая мысль; в общем плане связная '))