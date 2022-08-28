let a = "";         //first num
let b = "";         //socond num
let sign = "";      // +, -, *, /
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', '*', '/'];

//screen
const out = document.querySelector('.calc-screen p');

function clearALL(){
    let a = "";         //first num
    let b = "";         //socond num
    let sign = "";      // +, -, *, /
    let finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onClick = clearALL;

document.querySelector('.buttons').onClick = (event) =>{
    //нажата не кнопка
    if (!event.target.calssList.contains('btn')) return;
    //нажата кнопка "ac"
    if (event.target.calssList.contains('ac')) return;

    out.textContent = '';
    
    //нажатая кнопка
    const key = event.target.textContent;

    //если нажата кнопка 0-9 или ,
    if(digit.includes(key)){
        a += key;
        console.log(a, b, sign);
        out.textContent = a;
    }
}   
