function soma(a,b){
    return a+b
}

function subtr(a,b){
    return a-b
}

function div(a,b){
    return a/b
}

function multi(a,b){
    return a*b
}

function decisao(resp, a, b){
    if(resp == 1){
       resultado = soma(a,b)
       document.write("<p>A soma é " , resultado)
    }

    if(resp == 2){
        resultado = subtr(a,b)
        document.write("<p>A subtração é " , resultado)

    }

    if(resp == 3){
        resultado = div(a,b)
        document.write("<p>A divisão é " , resultado)

    }

    if(resp == 4){
        resultado = multi(a,b)
        document.write("<p>A multiplicação é " , resultado)

    }

}