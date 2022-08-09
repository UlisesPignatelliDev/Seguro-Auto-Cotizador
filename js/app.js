// constructores

function Seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI(){}
//llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
          min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}
// instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones(); // llena el select con los años
})

eventListener();
function eventListener(){
     const formulario = document.querySelector('#cotizar-seguro');
     formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //leer la marca selecionada
    const marca = document.querySelector('#marca').value;

    //leer el años seleccionado
    const year = document.querySelector('#year').value;
    //leer la marca seleccionado
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    if(marca === '' || year === '' || tipo === '' ){
        console.log('No paso la validacion');
    } else {
        console.log('Si paso la validacion');
    }

    console.log('cotizando...')
}