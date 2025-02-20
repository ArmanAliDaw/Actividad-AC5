window.onload = function () {
    let logo = document.querySelector('.logo');
    logo.addEventListener('click', Clic);
    logo.addEventListener('contextmenu', Clicderecho);
    logo.addEventListener('mouseover', hover);
    document.addEventListener('keydown', tecla);

    let boton = document.querySelector('#crearelemento');
    boton.addEventListener('click', crearelemento);

    generarcard();

    let boton2 = document.querySelector('#creartarjetas');
    boton2.addEventListener('click', creartarjetas);
}

function Clic() {
    let counterred = document.querySelector('.mostrar.rojo');
    counterred.innerHTML = Number(counterred.innerHTML) + 1;
}

function Clicderecho(event) {
    event.preventDefault();
    let counterblue = document.querySelector('.mostrar.blau');
    counterblue.innerHTML = Number(counterblue.innerHTML) + 1;
}

function hover() {
    let countergreen = document.querySelector('.mostrar.verde');
    countergreen.innerHTML = Number(countergreen.innerHTML) + 1;
}

function tecla(event) {

    let counterorange = document.querySelector('.mostrar.naranja');
    counterorange.innerHTML = Number(counterorange.innerHTML) + 1;

    let counteryellow = document.querySelector('.mostrar.amarillo');
    counteryellow.innerHTML = event.key;
    if (event.key == 'g') {
        let contadorLila = document.querySelector('.mostrar.lila');
        contadorLila.innerHTML = Number(contadorLila.innerHTML) + 1;
    }
}


let elementos = 0;

function crearelemento(evento) {
    let crearelementos = document.createElement('li');
    crearelementos.classList.add('element');
    crearelementos.id = `elemento${elementos}`;
    elementos++;

    crearelementos.innerHTML = `Este es el elemento ${elementos}`;

    let listarelemento = document.querySelector('.lista');
    listarelemento.append(crearelementos);
}



function generarcard() {
    let contenedorcard = document.querySelector('.cuadro:nth-child(4)')

    let card1 = document.createElement('div');
    card1.classList.add('card');
    contenedorcard.append(card1);

    let nombre = document.createElement('h1');
    nombre.innerHTML = user.nombre + ' ' + user.apellido;
    card1.append(nombre);

    let edad = document.createElement('h4');
    edad.innerHTML = `Edad: ${user.edad} años`
    card1.append(edad);

    let aficiones = document.createElement('h2');
    aficiones.innerHTML = "Aficiones"
    card1.append(aficiones);
    
}


let user = {
    nombre: "Roberto",
    apellido: "Heras",
    edad: 35 ,
    aficiones: ["escalada", "sushi", "papiroflexia"]
}


function creartarjetas() {
 
    for (let contenedortarjeta of infotarjetas) {

        let contenedorcard = document.querySelector('.cuadro:nth-child(6)')

        let cards = document.createElement('div');
        cards.classList.add('cards');
        contenedorcard.append(cards);

        let nombre = document.createElement('h1');
        nombre.innerHTML = contenedortarjeta.nombre;
        cards.append(nombre);

        let imagen = document.createElement('img');
        imagen.src = contenedortarjeta.imagen;
        imagen.classList.add('imgtarjeta')
        cards.append(imagen);

        let pais = document.createElement('p');
        pais.innerHTML = `Pais: ${contenedortarjeta.pais}`
        cards.append(pais);

        let corriente = document.createElement('p');
        corriente.innerHTML = `Corriente: ${contenedortarjeta.corriente}`
        cards.append(corriente);

        let arma = document.createElement('p');
        arma.innerHTML = `Arma: ${contenedortarjeta.arma}`
        cards.append(arma);
    }
}



let infotarjetas = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: "Grecia",
        corriente: "Idealismo",
        arma: "Dialéctica"
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: "Grecia",
        corriente: "Naturalismo",
        arma: "Lógica"
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: "Francia",
        corriente: "Racionalismo",
        arma: "Meditación"
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: "Alemania",
        corriente: "Trascendentalismo",
        arma: "Crítica"
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: "Escocia",
        corriente: "Empirismo",
        arma: "Escepticismo"
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais:"Alemania",
        corriente: "Fenomenología",
        arma: "Parresía"
    }
]