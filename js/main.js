var boton1 = document.getElementById("alerta");
//deshabilita el botòn id=alerta por defecto
boton1.disabled = true;

function creacion(){
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var timer;
    var milisegundos;
    var nueva_fecha;
    //habilita el botón id=alerta
    boton1.disabled = false;
    //recupera datos del formulario
    var dato1 = document.getElementById('tipo_tiempo').value;
    var dato2 = document.getElementById('cantidad').value;
    if(dato1 === 'minutos'){
        milisegundos = dato2 * _minute;
    } else {
        milisegundos = dato2 * _hour;
    }
    
    var ahora = new Date();//recupera la fecha actual
    nueva_fecha = ahora - milisegundos; //determina la fecha  en que termina el contador
    var fecha_final = new Date(nueva_fecha);  
    
    function showRemaining() {
        localStorage.setItem("recordar", "");
        ahora = ahora - _second;
        if ( ahora <= fecha_final) {

            clearInterval(timer); //detiene el reloj
            boton1.disabled = true; //deshabilita de nueva cuenta el botòn
            alert('El tiempo ha expirado');
            return;
        }
        
        var futuro = new Date(ahora);
        document.getElementById('ahora').innerHTML = futuro.toLocaleTimeString();
    }
    timer = setInterval(showRemaining, 1000);
   
}

function ejecutar(){
    alert("Presiona un buton!");
}