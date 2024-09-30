const datehtml = document.querySelector("#date");

setInterval(() => {
const dataAtual = new Date();
const horas = String(dataAtual.getHours()).padStart(2, "0");
const minutos = String(dataAtual.getMinutes()).padStart(2, "0");
const segundos = String(dataAtual.getSeconds()).padStart(2, "0");
datehtml.innerHTML = `Hora atual: ${horas}:${minutos}:${segundos}`;
  console.log(`Hora atual: ${horas}:${minutos}:${segundos}`);
}, 1000);
