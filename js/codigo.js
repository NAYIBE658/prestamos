
let equipo =JSON.parse(localStorage.getItem('equipos_nombres')) || [];
let marca_s=JSON.parse(localStorage.getItem('marcas_equipos')) || [];
let cantidades=JSON.parse(localStorage.getItem('cantidad_equipo')) || [];

let Instructores = JSON.parse(localStorage.getItem('instructores_nombres')) || [];
let identificacion = JSON.parse(localStorage.getItem('identificacion_istructores')) || [];

let equipos_Prestados = JSON.parse(localStorage.getItem('equipos_prestados')) || [];
let marcas_Prestadas = JSON.parse(localStorage.getItem('marcas_prestadas')) || [];
let cantidad_Prestada = JSON.parse(localStorage.getItem('cantidad_prestadas')) || [];
let instructores_P = JSON.parse(localStorage.getItem('instructores_que_presto')) || [];
let identificacion_p=JSON.parse(localStorage.getItem('identificaciones_presto')) || [];
lista1();
lista2();
lista_Prestamos();

const botoonNombreEquipo = document.getElementById('agregarEquipo');
function agregar_equipo(){
        const nombreEquipo = document.getElementById('nombre_equipo');
        let nombre = nombreEquipo.value;
        const marcaEquipo = document.getElementById('marca');
        let marcas= marcaEquipo.value;
        const cantidadEquipo = document.getElementById('stock');
        let cantidad =  parseInt(cantidadEquipo.value); 
        let captura = -1;
    
        
    if (nombreEquipo.value=""|| marcaEquipo.value=="" || cantidadEquipo.va=="") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ingresa todos los datos solicitados"
        });
        return;
    }

        for(let i = 0; i < equipo.length; i++){
            if (nombre == equipo[i] && marcas == marca_s[i]){
                captura = i;
            };
        };
        if (captura != -1){
            cantidades[captura] += cantidad;
        }else if(captura == -1){
            equipo.push(nombre);
            marca_s.push(marcas);
            cantidades.push(cantidad);
            
        };
        
        console.log(equipo);
        console.log(marca_s);
        console.log(cantidades);

        nombreEquipo.value = '';
        marcaEquipo.value = '';
        cantidadEquipo.value = '';
        lista1();
        
        localStorage.setItem('equipos_nombres', JSON.stringify(equipo));
        localStorage.setItem('marcas_equipos', JSON.stringify(marca_s));
        localStorage.setItem('cantidad_equipo', JSON.stringify(cantidades));
      
    
    };

    

function lista1(){
    const tbodyLista1 = document.getElementById('lista_equipo');
    tbodyLista1.innerHTML = '';

    for(let i=0; i<equipo.length; i++){
        const fila = document.createElement('tr');
        for ( let j=1; j<=3;j++){
            const elemento = document.createElement('td');
            if (j==1){
                elemento.textContent=equipo[i];
            }else if (j==2){
                elemento.textContent=marca_s[i];
            }else if(j==3){
                elemento.textContent=cantidades[i];
            };
            fila.appendChild(elemento);
        };
        tbodyLista1.appendChild(fila);
    };
};


const botooninstructores = document.getElementById('agregarinstructor');
function agregar_istructor(){
    const identificaciones = document.getElementById('documento');
    let istructores_identificacion = identificaciones.value;
    const istruNombre = document.getElementById('nombre_instructor');
    let nombres = istruNombre.value;
    let captura = -1;

    if (identificaciones.value=""||istruNombre.value=="" ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ingresa todos los datos solicitados"
        });
        return;
    }

    for(let i = 0; i < Instructores.length; i++){
        if (nombres == Instructores[i] && istructores_identificacion == identificacion[i]){
            captura = i;
        };
    };
    if (captura == -1){
        Instructores.push(nombres);
        identificacion.push(istructores_identificacion);
    }else if(captura != -1){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "el istructor ya esta en la lista"
        }); 
        return;
    };
    console.log(Instructores);
    console.log(identificacion);

    identificaciones.value = '';
    istruNombre.value = '';

    lista2();

    localStorage.setItem('instructores_nombres', JSON.stringify(Instructores));
    localStorage.setItem('identificacion_istructores', JSON.stringify(identificacion));


};

function lista2(){
    const tbodyLista2 = document.getElementById('lista_istruccion');
    tbodyLista2.innerHTML = '';

    for(let i = 0; i < Instructores.length; i++){
        const fila = document.createElement('tr');
        for ( let j=1; j<=3;j++){
            const elemento = document.createElement('td');
            if (j==1){
                elemento.textContent=Instructores[i];
            }else if (j==2){
                elemento.textContent=identificacion [i];
            };
            fila.appendChild(elemento);
        };
        tbodyLista2.appendChild(fila);
    };
};


const botoonprestar = document.getElementById('agregarprestamo');
function agregar_prestamo(){
    const prestarinstructor = document.getElementById('instructor_s');
    let instructorQpresto =  prestarinstructor.value;
    const prestaridentifi = document.getElementById('identidades_s');
    let identificacionQpresto =  prestaridentifi.value;
    const pretarEquipo = document.getElementById('equipo_s');
    let equipoQpresto = pretarEquipo.value;
    const prestarMarcas = document.getElementById('nombre_marca');
    let marcasQpresto =  prestarMarcas.value;
    const prestarCantidad = document.getElementById('cantidad_s');
    let cantidadPrestar =  parseInt(prestarCantidad.value); 
    
    if (pretarEquipo.value=""|| prestarMarcas.value=="" || prestarinstructor.value=="" || prestaridentifi.value=="" || prestarCantidad.value=="") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ingresa todos los datos solicitados"
        });
        return;
    };
    let captura = -1;
    
    
    for(let i = 0; i < equipo.length; i++){
        if (equipoQpresto == equipo[i] && marcasQpresto == marca_s[i]){
            captura = i;
        };
    };
    
    if (captura == -1){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "el equipo no existe"
        }); 
    }else{
        if (cantidadPrestar <= cantidades[captura]){
            let captura2 = -1;
            
            let estados = identificacion.indexOf(identificacionQpresto);

            if(estados != -1){
                for (let i = 0; i < equipos_Prestados.length; i++ ){
                    if(identificacionQprestO == identificacion_p[i] &&  equipoQpresto == equipos_Prestados[i] &&  marcasQpresto == marcas_Prestadas[i] ){
                        captura2 = i;
                    };
                };
    
                if (captura2 == -1){
                    instructores_P.push(instructorQpresto);
                    equipos_Prestados.push(equipoQpresto);
                    marcas_Prestadas.push(marcasQpresto);
                    cantidad_Prestada.push(cantidadPrestar);
                    identificacion_p.push(identificacionQpresto);
                }else{
                    cantidad_Prestada[captura2] += cantidadPrestar;
                };
    
                localStorage.setItem('equipos_prestados', JSON.stringify(equipos_Prestados));
                localStorage.setItem('marcas_prestadas', JSON.stringify(marcas_Prestadas));
                localStorage.setItem('cantidad_prestadas', JSON.stringify(cantidad_Prestada));
                localStorage.setItem('instructores_que_presto', JSON.stringify(instructores_P));
                localStorage.setItem('identificaciones_presto', JSON.stringify( identificacion_p));
                cantidades[captura] -= cantidadPrestar;

                prestaridentifi.value = "";
                prestarCantidad.value = "";
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "El numero de identificacion no corresponde"
                  })
            };
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "no hay sufisiente cantidad"
            });
        };

        prestarinstructor.value = "";
        pretarEquipo.value = "";
        prestarMarcas.value = "";
        lista1();
        lista_Prestamos();
    };
};

function lista_Prestamos(){
const tbodyPrestamos = document.getElementById('lista_devolver_per');
tbodyPrestamos.innerHTML = '';

    for(let i = 0; i < instructores_P.length; i++){
        const fila = document.createElement('tr');
        for ( let j=1; j<=5;j++){
            const elemento = document.createElement('th');
            if (j==1){
                elemento.textContent=instructores_P[i];
            }else if (j==2){
                elemento.textContent=identificacion_p [i];
            }else if (j==3){
                elemento.textContent=equipos_Prestados [i];
            }else if (j==4){
                elemento.textContent=marcas_Prestadas [i];
            }else if (j==5){
                elemento.textContent=cantidad_Prestada [i];
            };
            fila.appendChild(elemento);
        };
        tbodyPrestamos.appendChild(fila);
    };
}
const botoondevolver = document.getElementById('devolverprestamo');
botoondevolver.addEventListener('click', function(){
    let istruid = document.getElementById('istru_devolver').value;
    let nomEquipo = document.getElementById('nombre_devolver').value;
    let marEquipo = document.getElementById('marca_devolver').value;
    let captura = -1;

    if (istruid.value=""|| nomEquipo.value=="" || marEquipo.value=="") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ingresa todos los datos solicitados"
        });
        return;
    }
    for (let i = 0; i < equipos_Prestados.length; i++ ){
        if(istruid == identificacion_p[i] &&  nomEquipo == equipos_Prestados[i] && marEquipo == marcas_Prestadas[i] ){
            captura = i;
        };
    };
    
    if (captura == -1){
        Swal.fire({
            title: 'Error!',
            text: 'No hay prestamos registrados con esa información',
            icon: 'error',
        })
    }else{
        let devolver = document.getElementById('devolver_cantidad');
        let cantidad_devolver = parseInt(devolver.value);

        if(cantidad_devolver  <= cantidad_Prestada[captura]){
            cantidad_Prestada[captura] -= cantidad_devolver;

            if (cantidad_Prestada[captura] == 0){
                instructores_P.splice(captura, 1);
                identificacion_p.splice(captura, 1);
                equipos_Prestados.splice(captura, 1);
                marcas_Prestadas.splice(captura, 1);
                cantidad_Prestada.splice(captura, 1);
            }
            for(let i = 0; i < equipo.length; i++){
                if (nomEquipo == equipo[i] && marEquipo == marca_s[i]){
                    cantidades[i] += cantidad_devolver ;
                };
            };
             
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'la cantidad supera lo que prestaste',
                icon: 'error',
            });
        };
    };
    
    lista_Prestamos();
    lista1();
});
  