function calcularComposicao() { 
    var metalPercentage = parseInt(document.getElementById('metalPercentage').value); 
    var nonMetalPercentage = parseInt(document.getElementById('nonMetalPercentage').value); 
    if (isNaN(metalPercentage) || isNaN(nonMetalPercentage)) { 
        document.getElementById('resultado').textContent = 'por favor, insira valores válidos.'; 
        return; } 
    if (metalPercentage + nonMetalPercentage !== 100) 
            { document.getElementById('resultado').textContent = 
                'a soma dos percentuais deve ser igual a 100%.'; 
    return; } 
            
    if (metalPercentage > 50) {
     document.getElementById('resultado').textContent = 'a liga é predominantemente metálica.'; } 

    else if (nonMetalPercentage > 50) 
        { document.getElementById('resultado').textContent =  'a liga é predominantemente ametálica.'; }

    else { 
        document.getElementById('resultado').textContent =  'a liga possui partes iguais de metal e ametal.'; } }      