let boton = document.getElementById('botonTema');
let cuerpo = document.body;

function verificarTema() {
  let temaGuardado = localStorage.getItem('preferencia-clara');
  
  if (temaGuardado === 'si') {
    cuerpo.classList.add('modo-claro');
    boton.innerText = '☀️';
  }
}

function cambiarTema() {
  cuerpo.classList.toggle('modo-claro');
  
  if (cuerpo.classList.contains('modo-claro')) {
    localStorage.setItem('preferencia-clara', 'si');
    boton.innerText = '☀️';
  } else {
    localStorage.setItem('preferencia-clara', 'no');
    boton.innerText = '🌙';
  }
}

window.onload = verificarTema;
boton.onclick = cambiarTema;