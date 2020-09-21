
let btn = document.createElement('button');
let btnText = document.createTextNode('Add Square');
btn.appendChild(btnText);
document.body.appendChild(btn);
let flexDiv = document.createElement('div');
flexDiv.classList.add('container');
document.body.appendChild(flexDiv);
let counter = 1;

btn.addEventListener('click', function () {
    let div = document.createElement('div');
    counter++;
    div.id = counter;
    div.classList.add('square');
    flexDiv.appendChild(div);
    div.addEventListener('mouseenter', function () {
        let h2Text = document.createTextNode(div.id);
        h2.appendChild(h2Text);
        div.appendChild(h2);
        let h2 = document.createElement('h2');
        h2.id = counter;
    })
    div.addEventListener('mouseleave', function () {
        var elem = document.getElementById(counter);
        elem.parentNode.removeChild(elem);
    })

    div.addEventListener('dblclick', function () {
        if (div.id % 2 === 0) {
            if (div.nextSibling === null) {
                alert('There is nothing after this square');
            } else {
                flexDiv.removeChild(div.nextSibling);
            }
            console.log('even');
        } else {
            if (div.previousSibling === null) {
                alert('There is nothing before this square');
            } else {
                console.log('odd');
                flexDiv.removeChild(div.previousSibling);
            }
        }
    })

});
