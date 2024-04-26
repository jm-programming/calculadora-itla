const screen = document.getElementById("screen")

const insertar = (num)  => {
    if(num == '.' && screen.value.includes('.')) return
    if(screen.value == "" && (num == '*' || num == '/') ) return
    if(screen.value.endsWith('-') && num =='-') return
    if(screen.value.endsWith('*') && num =='*') return
    if(screen.value.endsWith('/') && num =='/') return
    if(screen.value.endsWith('+') && num =='+') return

    if(screen.value.substring(screen.value.length,-1) == '-' && num == '-' ) return
    screen.value += num

}


const limpiar = () => screen.value = ''

//si exp es un numero puede proceder al calculo, de lo contrario no hacer nada

const igual = () => {
    const exp = screen.value;
    const caracter = exp.substring(0, 1); 
    if (caracter == "-" || !isNaN(caracter)) {
        exp ? screen.value = eval(exp) : 0
        
    } 
}

const eliminar_digito = () => {
    let exp = screen.value;
    screen.value = exp.substring(0, screen.value.length - 1);
}