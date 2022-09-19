let sonic = document.querySelector(".Sonic");
let cano = document.querySelector(".cano");
let placar = document.getElementById("pontos");
let timer = document.getElementById("timer");
let btnReset = document.getElementById("GameReset");
let btnResetWin = document.getElementById("GameResetWin");
let btnPause = document.getElementById("btngameBack");
let sol = document.getElementById("sol");

let telaGameOver = document.getElementById("defeat");
let telaGameWin = document.getElementById("win");
let telaPausa = document.getElementById("gamePause")

let placarPontos = 0;
let moedaPontos = document.getElementById("moedaPontos")

let nuvem1 = document.getElementById("N1");
let nuvem2 = document.getElementById("N2");
let nuvem3 = document.getElementById("N3");

//
//pulo
//

function sonicPular() {
  sonic.classList.add("pular");

  setTimeout(() => {
    sonic.classList.remove("pular");
  }, 500);
}

document.addEventListener("keydown", sonicPular);

//
//Timer
//

let seg = 0;
let min = 0;

let TempoPassar = setInterval(() => {
  seg++;

  if (seg < 10) {
    timer.textContent = `0${seg}`;
  } else {
    timer.textContent = `${seg}`;
  }

}, 1000);


  //
  //modo noturno
  //

  let darkMode = setInterval(()=>{
  if (seg >= 30) {
    sol.src = "lua.png";
    document.body.classList.add("dark");
    let game = document.querySelector(".game").classList.add("game-dark");
    nuvem1.style.filter = "brightness(49%)"
    nuvem2.style.filter = "brightness(49%)"
    nuvem3.style.filter = "brightness(49%)"
    nuvem1.style.transition = "1s"
    nuvem2.style.transition = "1s"
    nuvem3.style.transition = "1s"
    placar.style.color = "white"
    placar.style.transition = "1s"
    timer.style.color = "white"
    timer.style.transition = "1s"
    cano.style.display = "block"
    cano.style.filter = "brightness(49%)"
    cano.style.transition = "1s"
    sonic.style.filter = "brightness(80%)"
    sonic.style.transition = "1s"
    moedaPontos.style.filter = "brightness(49%)"
    moedaPontos.style.transition = "1s"
  }
}, 30000)


//
//Contar Pontos - Ainda não completo!
//

let tempoPlacar = setInterval(() => {
  let moedaPosition = moedaPontos.offsetLeft
  let sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");

  if(moedaPosition <= 45 && moedaPosition > 0 && sonicPosition < 35){
    placarPontos ++ ;
    placar.textContent = `${placarPontos} Pontos`;
    moedaPontos.style.display = "none"
  } else{
    moedaPontos.style.display = "block"
  }

}, 100);

//
// Game WIN
//

let timeWin = setInterval(() => {
  telaGameWin.style.display = "block";
  telaGameOver.style.display = "none";
  cano.style.animation = "none";
  cano.style.display = "none";
  moedaPontos.style.display = "none"

  sol.src = "sol.gif";
  document.body.classList.remove("dark");
  let game = document.querySelector(".game").classList.remove("game-dark");

  sonic.classList.add("win")
  sonic.style.filter = "brightness(100%)"

  setTimeout(()=>{
    sonic.classList.remove("win")
    sonic.style.display = "none"
  }, 3000)

  nuvem1.style.display = "none";
  nuvem2.style.display = "none";
  nuvem3.style.display = "none";
  placar.style.display = "none";
  timer.style.display = "none ";
  sol.style.display = "none";

  btnResetWin.addEventListener("click", () => {
    location.reload();
  });

  document.getElementById("FeitosWin").innerHTML = `Você fez ${placarPontos} Pontos`;

  clearInterval(GameOver);
  clearInterval(tempoPlacar);
  clearInterval(TempoPassar);
  clearInterval(timeWin);
}, 60000);

//
//Game over
//

let GameOver = setInterval(() => {
  let canoPosition = cano.offsetLeft;
  let sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");

  if (canoPosition <= 35 && canoPosition > 0 && sonicPosition < 35) {
    cano.style.animation = "none";
    moedaPontos.style.display = "none"
    nuvem1.style.display = "none";
    nuvem2.style.display = "none";
    nuvem3.style.display = "none";
    placar.style.display = "none";
    timer.style.display = "none ";
    sol.style.display = "none";
    setTimeout(() => {
      sonic.style.display = "none";
    }, 1000);

    telaGameOver.style.display = "block";
    telaGameWin.style.display = "none";

    document.getElementById("Feitos").innerHTML = `${placarPontos} Pontos em ${seg} Segundos`;

    btnReset.addEventListener("click", () => {
      location.reload();
    });

    clearInterval(GameOver);
    clearInterval(tempoPlacar);
    clearInterval(TempoPassar);
    clearInterval(timeWin); 

    sonic.src = "sonicDefeat.gif";
    sonic.style.width = "100px";
    sonic.style.animation = "none";
    sonic.style.marginBottom = "39px";
  }


}, 1);

//
// SISTEMA DE PAUSE ULTIMA COISA A FAZER!
// 


/*document.addEventListener("keydown", Pause)

function Pause(){
  let clique = event.keyCode

  if (clique === 27){
    clearInterval(tempoPlacar)
    clearInterval(TempoPassar)
    clearInterval(timeWin)
    
    telaPausa.style.display = "block"

    nuvem1.style.display = "none";
    nuvem2.style.display = "none";
    nuvem3.style.display = "none";
    sol.style.display = "none";

    cano.style.animation = "none"
    cano.style.display = "none"
    sonic.style.display = "none"
  } 
}

btnPause.addEventListener("click", ()=>{
    telaPausa.style.display = "none"

    nuvem1.style.display = "block";
    nuvem2.style.display = "block";
    nuvem3.style.display = "block";
    sol.style.display = "block";

    cano.style.animation = "pipePassar 1.5s linear infinite"
    cano.style.display = "block"
    sonic.style.display = "block"

})*/




