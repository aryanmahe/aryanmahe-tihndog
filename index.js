let card = document.getElementById('cc');
let close = document.getElementById('cross');
let tab = document.getElementsByClassName("listing");

function cc() {
    let k = tab[0].classList
    k.toggle('hide')
}

console.log(card);
card.addEventListener('click', cc);
close.addEventListener('click', cc);

