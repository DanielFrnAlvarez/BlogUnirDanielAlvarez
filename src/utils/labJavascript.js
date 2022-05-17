// Palindrome function
let palindromeFunc = () => {
    let word = document.getElementById('palindrome-input').value;
    const final_message = document.getElementById('palindrome-message');
    if(word.length == 0 || word.includes(' ')){
        final_message.innerHTML = 'Debe ser solo una palabra';
    }
    else if(word.split('').reverse().join('') == word){
        final_message.innerHTML = 'La palabra es un palindromo';
    }else{
        final_message.innerHTML = 'NO un palindromo';
    }
}

// Greater function
let greaterFunc = () => {
    let number1 = parseInt(document.getElementById('number1-input').value);
    let number2 = parseInt(document.getElementById('number2-input').value);
    const final_message = document.getElementById('greater-message');
    if (number1 > number2) {
        final_message.innerHTML = `El número ${number1} es mayor que ${number2}`;
    } else if(number2 > number1) {
        final_message.innerHTML = `El número ${number2} es mayor que ${number1}`;
    } else if (number1 === number2){
        final_message.innerHTML = `El número ${number2} es igual que ${number1}`;
    }
}

// Counter vowels 
let countVowelFunc = () => {
    let phrase = document.getElementById('vowel-input').value;
    let counter = phrase.replace(/[^aeiouAEIOU]/g,'').length;
    const counter_final_message = document.getElementById('counter-vowels-message');
    counter_final_message.innerHTML = `La frase introducida tiene ${counter} vocales`;
}

// Which vowels 
let whichVowelFunc = () => {
    let phrase = document.getElementById('vowel-input').value;
    let vowels = phrase.replace(/[^aeiouAEIOU]/g,'');
    let vowels_summary = '';
    [...vowels].forEach(vowel => {
        if(vowels_summary.includes(vowel)){
            return
        }else{
            vowels_summary += vowel;
        }
    })
    const counter_final_message = document.getElementById('which-vowels-message');
    counter_final_message.innerHTML = `La frase introducida tiene las siguientes vocales: ${vowels_summary}`;
}