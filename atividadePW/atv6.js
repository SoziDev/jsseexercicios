function forcaresultante(){
    
    const massa = parseFloat(document.getElementById('massa').value);
    const aceleracao1 = parseFloat(document.getElementById('aceleracao1').value);
    const aceleracao2 = parseFloat(document.getElementById('aceleracao2').value);
    
    const aceleracaoResultante = aceleracao1 - aceleracao2;
    const forcaResultante = massa * aceleracaoResultante;
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <h2>resultado</h2> 
    <p>aceleração resultante: ${aceleracaoResultante.toFixed(2)} m/s²</p> 
    <p>força resultante: ${forcaResultante.toFixed(2)} N</p>`;
};

