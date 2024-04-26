const screen = document.getElementById("screen")

const insertar = (num)  => {
    if(num == '.' && screen.value.includes('.')) return
    if(screen.value == "" && (num == '*' || num == '/'|| num == '+') ) return
    if(screen.value.endsWith('-') && num =='-') return
    if(screen.value.endsWith('*') && num =='*') return
    if(screen.value.endsWith('/') && num =='/') return
    if(screen.value.endsWith('+') && num == '+') return
    

    if ((screen.value.endsWith('+') ||
        screen.value.endsWith('-') ||
        screen.value.endsWith('*') ||
        screen.value.endsWith('/')) && (
        num == '-' ||
        num == '+' ||
        num == '*' ||
        num == '/')) return
    
    screen.value += num
}


const limpiar = () => screen.value = ''


const igual = () => {
    const exp = screen.value;
    exp ? screen.value = eval(exp) : 0  
}

const eliminar_digito = () => {
    let exp = screen.value;
    screen.value = exp.substring(0, screen.value.length - 1);
}