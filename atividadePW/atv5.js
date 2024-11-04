function calcularCusto() {

    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    
    const area = comprimento * largura;
    const preco = 36.00; // preço por m²
    const custoTotal = area * preco;
    
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
      <h2>resultado</h2>
      <p>area do comodo: ${area.toFixed(2)} m²</p>
      <p>custo total: R$ ${custoTotal.toFixed(2)}</p>
    `;
  };
  