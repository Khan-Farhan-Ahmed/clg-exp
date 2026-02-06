let input = document.getElementById('input');
let buttons = document.querySelectorAll('button')

let str = ""

let arr = Array.from(buttons)           // Array banadega value ko
arr.forEach( buttonStr => {
    buttonStr.addEventListener('click', (e) => {
        if(e.target.innerHTML === '=') {
            str = eval(str);
            input.value = "Ans: "+str;
        } else if(e.target.innerHTML === 'DEL') {
            str = str.substring(0, str.length-1)
            input.value = str;
        } else if(e.target.innerHTML === 'AC') {
            str = "";
            input.value = str;
        } else {
            str += e.target.innerHTML;
            input.value = str;
        }
    })
});