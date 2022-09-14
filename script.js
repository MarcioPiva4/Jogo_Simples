let sonic = document.querySelector(".Sonic");
let cano = document.querySelector(".cano");
let placar = document.getElementById("pontos");
let timer = document.getElementById("timer");
let btnReset = document.getElementById("GameReset");
let btnResetWin = document.getElementById("GameResetWin");
let sol = document.getElementById("sol");

let telaGameOver = document.getElementById("defeat");
let telaGameWin = document.getElementById("win");

let placarPontos = 0;

let nuvem1 = document.getElementById("N1");
let nuvem2 = document.getElementById("N2");
let nuvem3 = document.getElementById("N3");

//pulo

function sonicPular() {
  sonic.classList.add("pular");

  setTimeout(() => {
    sonic.classList.remove("pular");
  }, 500);
}

document.addEventListener("keydown", sonicPular);

//Timer
let seg = 0;
let min = 0;

let TempoPassar = setInterval(() => {
  seg++;

  if (seg < 10) {
    timer.textContent = `0${seg}`;
  } else {
    timer.textContent = `${seg}`;
  }

  //modo noturno
  if (seg >= 30) {
    sol.src = "lua.png";
    document.body.classList.add("dark");
    let game = document.querySelector(".game").classList.add("game-dark");
  }
}, 1000);

//Contar Pontos

let tempoPlacar = setInterval(() => {
  placarPontos++;
  placar.textContent = `${placarPontos} Pontos`;
}, 100);

// Game WIN

let timeWin = setInterval(() => {
  telaGameWin.style.display = "block";
  telaGameOver.style.display = "none";
  cano.style.animation = "none";
  cano.style.display = "none";

  sonic.classList.add("win")

  setTimeout(()=>{
    sonic.classList.remove("win")
    sonic.style.display = "none"
  }, 5000)

  nuvem1.style.display = "none";
  nuvem2.style.display = "none";
  nuvem3.style.display = "none";
  placar.style.display = "none";
  timer.style.display = "none ";
  sol.style.display = "none";

  btnResetWin.addEventListener("click", () => {
    location.reload();
  });

  clearInterval(jogando);
  clearInterval(tempoPlacar);
  clearInterval(TempoPassar);
  clearInterval(timeWin);
}, 60000);

//Game over

let jogando = setInterval(() => {
  let canoPosition = cano.offsetLeft;
  let sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");

  if (canoPosition <= 35 && canoPosition > 0 && sonicPosition < 35) {
    cano.style.animation = "none";
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
    document.getElementById(
      "Feitos"
    ).innerHTML = `${placarPontos} Pontos em ${seg} Segundos`;

    btnReset.addEventListener("click", () => {
      location.reload();
    });

    clearInterval(jogando);
    clearInterval(tempoPlacar);
    clearInterval(TempoPassar);
    clearInterval(timeWin);

    sonic.src = "sonicDefeat.gif";
    sonic.style.width = "100px";
    sonic.style.animation = "none";
    sonic.style.marginBottom = "39px";
  }
}, 1);
