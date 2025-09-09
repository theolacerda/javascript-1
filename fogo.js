/*.const canvas = document.getElementById("fogo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let partículas = [];

function criarPartícula() {
  partículas.push({
    x: canvas.width / 2,
    y: canvas.height - 50, // nasce perto da base
    raio: Math.random() * 5,
    cor: "rgba(255," + (100 + Math.random() * 155) + ",0," + Math.random() + ")",
    velX: (Math.random() - 0.5) * 2,
    velY: -Math.random() * 3 - 1,
    vida: 100
  });
}

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  criarPartícula();
  partículas.forEach((p, i) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
    ctx.fillStyle = p.cor;
    ctx.fill();
    p.x += p.velX;
    p.y += p.velY;
    p.vida--;
    if (p.vida <= 0) partículas.splice(i, 1);
  });
  requestAnimationFrame(animar);
}

animar();*/.