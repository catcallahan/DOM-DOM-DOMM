let button = document.createElement('button');
button.classList.add('Button');
let btnText = document.createTextNode('Add Square');
idnum= 0



button.appendChild(btnText);
document.body.appendChild(button);

let firstLine = document.createElement('div');
firstLine.className = 'firstLine';
document.body.appendChild(firstLine);

function clickButton(){
    let div = document.createElement('div');
    div.classList.add('square');
    div.ID = idnum;
    firstLine.appendChild(div)
    idnum++
}

button.addEventListener('click', function() {
    clickButton();

})