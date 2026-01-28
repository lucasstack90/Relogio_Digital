const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const Relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
     let min = dateToday.getMinutes();
      let s = dateToday.getSeconds();

      if (hr < 10) hr = '0' + hr;
      if (min < 10) min = '0' + min;
      if (s < 10) s = '0' + s;

      horas.textContent = hr;
      minutos.textContent = min;
      segundos.textContent = s;

     MudarDegrade(dateToday.getHours());

})

function MudarDegrade(hora){
     if (hora >= 6 && hora <= 12) {
      document.body.style.background = 'linear-gradient(120deg, #FFEEAD, #FFB703)'
    } 

    else if (hora >= 12 && hora <= 18) {
        document.body.style.background = 'linear-gradient(125deg, #ffe53bd8, #ff2525da)'
    } 

    else if(hora >= 18 && hora < 24){
        document.body.style.background = 'linear-gradient(120deg, #03045E, #000000)'
    }

    else {
        document.body.style.background = 'linear-gradient(120deg, #023047, #000814)'
    }
}

