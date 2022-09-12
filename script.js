let sonic = document.querySelector(".Sonic");
let cano = document.querySelector(".cano");
let placar = document.getElementById("pontos");
let timer = document.getElementById("timer");
let telaGameOver = document.getElementById("defeat");
let btnReset = document.getElementById("GameReset");
let sol = document.getElementById("sol");

let ball = document.getElementById("ball");

ball.addEventListener("click", (e) => {
  e.target.classList.toggle("ball-move");
  document.body.classList.toggle("dark");
  let game = document.querySelector(".game").classList.toggle("game-dark");
});

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
}, 1000);

//Contar Pontos

let tempoPlacar = setInterval(() => {
  placarPontos++;
  placar.textContent = `${placarPontos} Pontos`;
}, 300);

//Game over

let jogando = setInterval(() => {
  let canoPosition = cano.offsetLeft;
  let sonicPosition = +window.getComputedStyle(sonic).bottom.replace("px", "");

  if (canoPosition <= 70 && canoPosition > 0 && sonicPosition < 35) {
    cano.style.animation = "none";
    sonic.classList.add("defeat");
    sonic.classList.remove("pular");
    nuvem1.style.display = "none";
    nuvem2.style.display = "none";
    nuvem3.style.display = "none";
    placar.style.display = "none";
    timer.style.display = "none ";
    setTimeout(() => {
      sonic.style.display = "none";
    }, 1000);

    telaGameOver.style.display = "block";
    sol.style.display = "none";
    document.getElementById(
      "Feitos"
    ).innerHTML = `${placarPontos} Pontos em ${seg} Segundos`;

    btnReset.addEventListener("click", () => {
      location.reload();
    });

    clearInterval(jogando);
    clearInterval(tempoPlacar);
    clearInterval(TempoPassar);
  }
}, 10);
