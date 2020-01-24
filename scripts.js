let button = document.createElement('button');
button.classList.add('Button');
let btnText = document.createTextNode('Add Square');
idnum = 0
let colors = ['blue', 'purple', 'green', 'red', 'yellow'];




button.appendChild(btnText);
document.body.appendChild(button);

let firstLine = document.createElement('div');
firstLine.className = 'firstLine';
document.body.appendChild(firstLine);

function clickButton() {
    let div = document.createElement('div');
    div.classList.add('square');
    div.id = idnum;
    firstLine.appendChild(div)
    idnum++

    div.addEventListener('mousemove', function () {
        div.innerText = div.id
    })
    div.addEventListener('mouseleave', function () {
        div.innerText = ''
    })
    div.addEventListener('click', function () {
        div.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    })
    div.addEventListener('dblclick', function () {
        if (div.id % 2 == 0) {
            if (div.nextSibling != null) {
                rmvEvenDiv();
            } else {
                alert('Nothing there!')
            }
        } else if (div.id % 2 != 0) {
            if (div.previousSibling != null) {
                rmvOddDiv(div);
            } else {
                alert('Nothing there!')
            }
        }
    })

    function rmvEvenDiv() {
        console.log(div.nextSibling);
        div.parentNode.removeChild(div.nextSibling);
    }

    function rmvOddDiv() {
        div.parentNode.removeChild(div.previousSibling);
    }
}

button.addEventListener('click', function () {
    clickButton();

});

