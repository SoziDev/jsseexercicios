function calculateAlloy() { 

var metalPercentage = parseInt(document.getElementById("metalPercentage").value); 
var nonMetalPercentage = parseInt(document.getElementById("nonMetalPercentage").value); 
if (isNaN(metalPercentage) || isNaN(nonMetalPercentage)) { 
    document.getElementById("result").textContent = "Por favor, insira valores válidos."; 
    return; } 
    if (metalPercentage + nonMetalPercentage !== 100) 
        { document.getElementById("result").textContent = "A soma dos percentuais deve ser igual a 100%."; 
        return; } if (metalPercentage > nonMetalPercentage) { 
        document.getElementById("result").textContent = "A liga é predominantemente metálica."; }
        else if (nonMetalPercentage > metalPercentage) 
            { document.getElementById("result").textContent = "A liga é predominantemente ametálica."; } else { document.getElementById("result").textContent = "A liga possui partes iguais de metal e ametal."; } }