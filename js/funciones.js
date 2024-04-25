const screen = document.getElementById("screen")

const insertar = (num)  => screen.value += num
const  limpiar = () => screen.value = ''


const igual = () => {
    const exp = screen.value;
    const esNumero = exp.substring(0, 1);
    if (esNumero == "-" || esNumero == "*" || !isNaN(esNumero)) {
        exp ? screen.value = eval(exp) : 0
        console.log("Es un caracter valido");
    } else {
        limpiar()
    } 
}

const eliminar_digito = () => {
    let exp = screen.value;
    console.log(screen.value.length);
    screen.value = exp.substring(0, screen.value.length - 1);
}