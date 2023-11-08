'use strict';

// ciclo da 1 a 100
for(let i = 1; i <= 100; i++){
    let output = '';
    if(i % 3 === 0){
        // se è divisibile per 3
        output = 'Fizz';
    }
    if(i % 5 === 0){
        // se è divisibile per 5
        output += 'Buzz';
    }
    if(output === ''){
        // se non è divisibile per 3 o 5
        output = i;
    }
    console.log(output);
}