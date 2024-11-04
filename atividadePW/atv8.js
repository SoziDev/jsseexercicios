function calculateIonic() { 
    var metalElectrons = parseInt(document.getElementById("metal").value); 
    var nonMetalElectrons = parseInt(document.getElementById("nonMetal").value); 
    if (isNaN(metalElectrons) || isNaN(nonMetalElectrons)) { 
        document.getElementById("result").textContent = "por favor, insira valores válidos."; 
        return; } var ratio = gcd(metalElectrons, nonMetalElectrons); 
        var metalRatio = nonMetalElectrons / ratio; 
        var nonMetalRatio = metalElectrons / ratio; 
        document.getElementById("result").textContent = `fórmula mínima da ligação iônica: M${metalRatio}X${nonMetalRatio}`; }
         function gcd(a, b) { 
            return b == 0 ? a : gcd(b, a % b); }