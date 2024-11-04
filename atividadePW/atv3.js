function processarNumeros() {
  const input = document.getElementById('numeros').value;
  const numeros = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
  
  if (numeros.length !== 10) {
      document.getElementById('resultado').innerHTML = 'Por favor, insira exatamente 10 números.';
      return;
  }

  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;

  const maioresQueMedia = numeros.filter(num => num > media);
  const menoresQueZero = numeros.filter(num => num < 0).length;

  let resultado = `<p>números maiores que a média (${media.toFixed(2)}): ${maioresQueMedia.join(', ')}</p>`;
  resultado += `<p>número de elementos menores que zero: ${menoresQueZero}</p>`;

  document.getElementById('resultado').innerHTML = resultado;
}