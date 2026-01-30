// ===== ELEMENTOS DO RELÓGIO =====
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

// ===== ELEMENTO DO VÍDEO =====
const video = document.getElementById("bgVideo");

// ===== CONTROLE DE ESTADO (ANTI-PISCAR) =====
let periodoAtual = "";

// ===== DEFINE O PERÍODO DO DIA =====
function obterPeriodo(hora) {
  if (hora >= 6 && hora < 12) return "manha";
  if (hora >= 12 && hora < 18) return "tarde";
  if (hora >= 18 && hora < 24) return "noite";
  return "madrugada";
}

// ===== TROCA O VÍDEO APENAS QUANDO NECESSÁRIO =====
function mudarVideo(hora) {
  const periodo = obterPeriodo(hora);

  // 🚫 Se for o mesmo período, não faz nada
  if (periodo === periodoAtual) return;

  periodoAtual = periodo;

  const videos = {
    manha: "Vídeos/Manha.mp4",
    tarde: "Vídeos/Tarde.mp4",
    noite: "Vídeos/Noite.mp4",
    madrugada: "Vídeos/Madrugada.mp4"
  };

  video.src = videos[periodo];
  video.load();
  video.play();

    // === troca a cor do versículo ===
  versiculo.className = ""; // limpa classes
  versiculo.classList.add(periodo);
}

// ===== RELÓGIO PRINCIPAL =====
setInterval(() => {
  const agora = new Date();

  const hr = String(agora.getHours()).padStart(2, "0");
  const min = String(agora.getMinutes()).padStart(2, "0");
  const sec = String(agora.getSeconds()).padStart(2, "0");

  horas.textContent = hr;
  minutos.textContent = min;
  segundos.textContent = sec;

  mudarVideo(agora.getHours());
}, 1000);

