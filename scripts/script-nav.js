const button = document.getElementById('mobile-menu');
function navOpen() {
  const bar = document.querySelectorAll('.bar');
  const nav = document.querySelector('.nav');
  bar.forEach(function (bars){
    bars.classList.toggle('active');
  });
  nav.classList.toggle('active');
}

button.addEventListener('click', navOpen);