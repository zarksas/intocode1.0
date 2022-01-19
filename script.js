function cryptText(text) {
    const vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

    let words = text.split(' ');
    let result = '';
     
        for (let i = 0; i < words.length; i++) {
           if (isFinite(words[i])) {
            if (words[i].length < 3) {
                result += `${words[i][1]}${words[i][0]} `
            } else {
              let firstNumber = words[i][0];
              let lastNumber = words[i][words[i].length - 1]
              let sum = `${firstNumber}${words[i]}${lastNumber}`;
              result += sum + ' ';
            }
            
                

           } else if (words[i].length < 3)  {
               result += `${words[i]}ик `;
           } else if (vowels.includes(words[i][0]) === true) {
                result += `код${words[i]} ` 
           
            } else result += `инту${words[i]} `
           
        } 
        return result;

}

console.log(cryptText('зафиксированная 40 на какомлибо 59 материальном носителе 1947 человеческая мысль; в общем плане связная'))