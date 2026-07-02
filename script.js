// Animação ao rolar
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all .8s ease";
  observer.observe(card);
});

// Efeito de clique nos botões
document.querySelectorAll(".btn,.btn2").forEach((botao) => {
  botao.addEventListener("click", () => {
    botao.style.transform = "scale(.95)";
    setTimeout(() => {
      botao.style.transform = "scale(1)";
    }, 150);
  });
});

// Botão voltar ao topo
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff6a00;
color:white;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 20px rgba(255,106,0,.5);
z-index:999;
`;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};