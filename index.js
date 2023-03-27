// alert("teste");

var select = document.querySelector('select');
var paragrafo = document.querySelector('p');

const html = document.querySelector('html');
document.body.style.padding = '15px';

select.addEventListener('change', idadeAtleta);

function idadeAtleta() {

    const classificacao = select.value;

    switch (classificacao) {
        case 'infantilA':
            paragrafo.textContent = "classificação do atleta infantil A";
            html.style.backgroundColor = "black";
            html.style.color = "white";
            break;

        case 'infantilB':
            paragrafo.textContent = "classificação do atleta infantil B";
            html.style.backgroundColor = "pink";
            html.style.color = "white";
            break;   

        case 'juvenilA':
            paragrafo.textContent = "classificação do atleta juvenil A";
            html.style.backgroundColor = "#3464eb";
            html.style.color = "white";
            break;
        case 'juvenilB':
            paragrafo.textContent = "classificação do atleta juvenil B";
            html.style.backgroundColor = "#c248c2";
            html.style.color = "white";
            break;
        default:
             html.style.backgroundColor = "white";
             html.style.color = "black";
        break;

    }

}