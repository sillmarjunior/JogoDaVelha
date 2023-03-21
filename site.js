/* MENU SIDEBAR */
    const sidebar = document.getElementById('sidebar');
    const button = document.getElementById('btn');

    button.addEventListener('click', function () {
        sidebar.classList.toggle('fechar');
    });

/* JOGO DA VELHA */

const campo = document.querySelectorAll('.campo');
const alertaPlayer = document.getElementById('alertaPlayer');
let campoPontosP1 = document.getElementsByClassName('pontos')[0];
let campoPontosP2 = document.getElementsByClassName('pontos')[1];

function inicioGame() {

    for (let i in campo) {
        campo[i].innerHTML = '';
    }
}



function jogar() {

    let vez = 1;
    let campoPlayer = document.getElementById('player');


    for (let i in campo) {
        campo[i].addEventListener('click', () => {

            if (vez == 1) {
                campoPlayer.innerText = "2 = O";
                vez = 2;
                if (campo[i].innerText == '') {
                    campo[i].innerText = "X";
                } else {
                    alert('campo indisponivel');
                    vez = 1;
                    campoPlayer.innerText = "1 = X";
                }


            } else {
                campoPlayer.innerText = "1 = X";
                vez = 1;
                if (campo[i].innerText == '') {
                    campo[i].innerText = "O";
                } else {
                    alert('campo indisponivel');
                    vez = 2;
                    campoPlayer.innerText = "2 = O";
                }
            }

            checaVitoria();

        })
    }

}

function checaVitoria() {

    if (campo[0].innerText == "X" && campo[1].innerText == "X" && campo[2].innerText == "X"
        || campo[0].innerText == "X" && campo[3].innerText == "X" && campo[6].innerText == "X"
        || campo[0].innerText == "X" && campo[4].innerText == "X" && campo[8].innerText == "X"
        || campo[1].innerText == "X" && campo[4].innerText == "X" && campo[7].innerText == "X"
        || campo[2].innerText == "X" && campo[4].innerText == "X" && campo[6].innerText == "X"
        || campo[2].innerText == "X" && campo[5].innerText == "X" && campo[8].innerText == "X"
        || campo[3].innerText == "X" && campo[4].innerText == "X" && campo[5].innerText == "X"
        || campo[6].innerText == "X" && campo[7].innerText == "X" && campo[8].innerText == "X") {
        alertaPlayer.innerText = "Vitória do player 1"
        let pontosP1 = parseInt(campoPontosP1.innerText) + 1;
        campoPontosP1.innerText = pontosP1;


        let myAlert = document.querySelector('#modalVitoria');
        let bsAlert = new bootstrap.Modal(myAlert);
        bsAlert.show();
    } else if (
        campo[0].innerText == "O" && campo[1].innerText == "O" && campo[2].innerText == "O"
        || campo[0].innerText == "O" && campo[3].innerText == "O" && campo[6].innerText == "O"
        || campo[0].innerText == "O" && campo[4].innerText == "O" && campo[8].innerText == "O"
        || campo[1].innerText == "O" && campo[4].innerText == "O" && campo[7].innerText == "O"
        || campo[2].innerText == "O" && campo[4].innerText == "O" && campo[6].innerText == "O"
        || campo[2].innerText == "O" && campo[5].innerText == "O" && campo[8].innerText == "O"
        || campo[3].innerText == "O" && campo[4].innerText == "O" && campo[5].innerText == "O"
        || campo[6].innerText == "O" && campo[7].innerText == "O" && campo[8].innerText == "O") {
        alertaPlayer.innerText = "Vitória do player 2";
        let pontosP2 = parseInt(campoPontosP2.innerText) + 1;
        campoPontosP2.innerText = pontosP2;

        let myAlert = document.querySelector('#modalVitoria');
        let bsAlert = new bootstrap.Modal(myAlert);
        bsAlert.show();
    } else {
        checaEmpate();
    }

}


function checaEmpate() {


    if (campo[0].innerText != ""
        && campo[1].innerText != ""
        && campo[2].innerText != ""
        && campo[3].innerText != ""
        && campo[4].innerText != ""
        && campo[5].innerText != ""
        && campo[6].innerText != ""
        && campo[7].innerText != ""
        && campo[8].innerText != "") {
        alertaPlayer.innerText = '"Velha" - Jogo Empatado'
        let myAlert = document.querySelector('#modalVitoria');
        let bsAlert = new bootstrap.Modal(myAlert);
        bsAlert.show();
    }

}

function finalizaRodada() {

    inicioGame();

}


jogar();