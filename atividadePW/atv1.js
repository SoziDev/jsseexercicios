function lernumeros() {
    const n = parseInt(document.getElementById('n').value);
    let numeros = [];
    let soma = 0;
    let pares = 0;
    let impares = 0;
  
    for (let i = 0; i < n; i++) {
      let num = parseInt(prompt(`informe o número ${i+1}:`));
      numeros.push(num);
      soma += num;
      (num % 2 === 0) ? pares++ : impares++;
    }
  
    let media = soma / n;
  
    const resultados = document.getElementById('resultados');
    resultados.innerHTML = `
      <h2>resultados</h2>
      <p>soma: ${soma}</p>
      <p>média: ${media.toFixed(2)}</p>
      <p>pares: ${pares}</p>
      <p>impares: ${impares}</p>
    `;
  }

  