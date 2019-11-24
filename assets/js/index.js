/* Cuenta atrás, sacado de w3schools */
// Set the date we're counting down to
let countDownDate = new Date("Feb 15, 2020 00:00:00").getTime();

// Update the count down every 1 second
let x = setInterval(() => {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="cuentaAtras"
  document.getElementById("cuentaAtras").innerHTML = "⏳ " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("cuentaAtras").innerHTML = "FINALIZADO! ⌛️";
  }
}, 1000);

let barProgress = document.getElementById('progress');
window.addEventListener('scroll', () => {

  let max = document.body.scrollHeight - innerHeight;
  barProgress.style.width = `${(pageYOffset / max) * 100}%`;

});