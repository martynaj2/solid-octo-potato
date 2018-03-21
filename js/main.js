//elemencik modala
var modal = document.getElementById('simpleModal');
//elemencik przycisku
var modalBtn = document.getElementById('button');
//elemcnik zamykacza
var closeBtn = document.getElementsByClassName('closeBtn')[0];

//nasluchiwanie do otwierania
button.addEventListener('click',openModal);

//nasluchiwanie do zamykania
closeBtn.addEventListener('click',closeModal);

//zamykanie na zewnatrz

window.addEventListener('click',clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function clickOutside(e) {
    if(e.target == modal){
        modal.style.display = 'none';
    }
}