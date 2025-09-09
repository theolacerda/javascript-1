const canvas = document.getElementById("fumaça");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let partículas = [];

function criarPartícula() {
  partículas.push({
    x: canvas.width / 2,             // Origem central
    y: canvas.height,                // Começa de baixo
    raio: Math.random() * 20 + 10,  // Tamanho da partícula
    velocidadeY: Math.random() * -1.5 - 0.5, // Sobe
    velocidadeX: (Math.random() - 0.5) * 0.5, // deslocamento lateral
    opacidade: Math.random() * 0.3 + 0.2,
    vida: Math.random() * 100 + 50
  });
}

function atualizarPartículas() {
  for (let i = partículas.length - 1; i >= 0; i--) {
    let p = partículas[i];
    p.x += p.velocidadeX;
    p.y += p.velocidadeY;
    p.raio += 0.05; // Fumaça se espalha
    p.opacidade -= 0.002; // Fumaça some
    p.vida--;

    // Remove partículas que morreram
    if (p.vida <= 0 || p.opacidade <= 0) {
      partículas.splice(i, 1);
    }
  }
}

function desenharPartículas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  partículas.forEach(p => {
    let gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.raio);
    gradient.addColorStop(0, `rgba(200,200,200,${p.opacidade})`);
    gradient.addColorStop(0.5, `rgba(150,150,150,${p.opacidade * 0.5})`);
    gradient.addColorStop(1, `rgba(100,100,100,0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.raio, 0, Math.PI * 2);
    ctx.fill();
  });
}

function loop() {
  criarPartícula();  // Cria partículas constantemente
  atualizarPartículas();
  desenharPartículas();
  requestAnimationFrame(loop);
}

loop();

// Ajusta o canvas quando a tela muda de tamanho
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

