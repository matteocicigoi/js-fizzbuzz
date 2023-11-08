'use strict';

//elemento dom
const container = document.querySelector('.container > div.flex');

// ciclo da 1 a 100
for(let i = 1; i <= 100; i++){
    //crea l'elemento
    const box = document.createElement('div');
    const text = document.createElement('div');

    let className = '';
    let output = '';
    if(i % 3 === 0){
        // se è divisibile per 3
        output = 'Fizz';
        className = 'bg-fizz';
    }
    if(i % 5 === 0){
        // se è divisibile per 5
        output += 'Buzz';
        className += ' bg-buzz';
    }
    if(output === ''){
        // se non è divisibile per 3 o 5
        output = i;
        className = 'bg-primary';
    }
    text.className = 'flex flex-center ' + className;
    text.append(output);
    box.append(text);
    box.className = 'box';
    container.append(box);
}