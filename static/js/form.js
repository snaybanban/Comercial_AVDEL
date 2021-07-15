document.querySelector('#submit').addEventListener('click',function(){

    let cliente = document.querySelector('#cliente').value;
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#hora').value;
    let cita = document.querySelector('#cita').value;
    let servicio = document.querySelector('#servicio').value;

    let url = "https://api.whatsapp.com/send?phone=50581545114&text=*_Comercia Avdel_*%0A*Visitas programadas*%0A*Enviado desde la web*%0A%0A*¿Cual es tu nombre?*%0A" + cliente + "%0A*Indica la fecha de tu visita%0A" + fecha + "%0A*Indica la hora de tu visita*%0A" + hora + "%0A*cita*%0A" + cita + "%0A*¿Cual es el servicio que se desea realizar?*%0A" + servicio;
    window.open(url);

});
