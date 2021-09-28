function esPrimo(num) {
    if (num<=1 || num%1) {
        return false;
    }
    let m=Math.sqrt(num);
    for (let i=2; i<=m; i++) {
        if (num%i==0) {
            return false;
        }
    }
    return true;
}

function primo()
{
    let valor=prompt(("Escribe un numero y te dire si es primo."));
    if (esPrimo(valor)) {
        alert(`El numero ${valor} SI es Primo`);
    } else {
        alert(`El numero ${valor} NO es Primo`)
    }
}