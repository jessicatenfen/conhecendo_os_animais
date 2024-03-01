const html = document.querySelector('html')
const listaDeTeclas = document.querySelectorAll('.tecla')
const banner = document.querySelector('.imagem_alternativa')
const titulo = document.querySelector('.texto_alternativo')

function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const animal = tecla.classList[1];
    const idAudio = `#som_${animal}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
        alteraAnimal(animal);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}

function alteraAnimal(animal) {

    banner.setAttribute('src', `images/${animal}.png`)
    titulo.textContent = animal
}
