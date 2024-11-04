function calcularExponencial() { 
    let x = parseFloat(document.getElementById('valorX').value); 
    if (isNaN(x)) { 
        document.getElementById('resultado').textContent = 'por favor, insira um valor válido para x.'; 
        return; } let resultado = Math.exp(x); 
        document.getElementById('resultado').textContent = `f(${x}) = e^${x} = ${resultado}`; }