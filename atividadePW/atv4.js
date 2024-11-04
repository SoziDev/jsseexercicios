function calcularGasto() {
    const quilometragem = parseFloat(document.getElementById('quilometragem').value);
    const valorCombustivel = parseFloat(document.getElementById('valorCombustivel').value);
    
    if (isNaN(quilometragem) || isNaN(valorCombustivel) || quilometragem <= 0 || valorCombustivel <= 0) {
        document.getElementById('resultado').innerHTML = 'por favor, insira valores validos.';
        return;
    }

    const consumo = 8; // km/litro
    const litrosUsados = quilometragem / consumo;
    const gastoTotal = litrosUsados * valorCombustivel;

    document.getElementById('resultado').innerHTML = `gasto total com combustível: R$ ${gastoTotal.toFixed(2)}`;
}