let año = document.getElementById("año");
let mes = document.getElementById("mes");
let dia = document.getElementById("dia");
let calcular = document.getElementById("calcular");
let res = document.getElementById("res");
calcular.addEventListener("click", () => {
    if (mes.value < 1 || mes.value > 12) {
        alert("Tu mes no puede ser menor a 1 y mayor a 12");
        return;
    } if (dia.value < 1 || dia.value > 31) {
        alert("Tu dia tiene que estar entre el 1 y 31");
        return;
    }
    let nuevaFecha = new Date(año.value, mes.value - 1, dia.value);
    let diasSemana = nuevaFecha.getDay();
    let nombreDia = " ";
    switch (diasSemana) {
        case 0:
            nombreDia = "Domingo";
            break;
        case 1:
            nombreDia = "Lunes";
            break;
        case 2:
            nombreDia = "Martes";
            break;
        case 3:
            nombreDia = "Miércoles";
            break;
        case 4:
            nombreDia = "Jueves";
            break;
        case 5:
            nombreDia = "Viernes";
            break;
        case 6:
            nombreDia = "Sabado";
            break;
    }if (diasSemana == 0 || diasSemana == 6) {
        nombreDia += ", no laboral";
    } else {
        nombreDia += ",  día laboral";
    } res.value = nombreDia;
});


