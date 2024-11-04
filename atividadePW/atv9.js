let valores = []; 
function adicionarValor() { 
    let valor = parseFloat(document.getElementById('valor').value); 
    if (!isNaN(valor)) { valores.push(valor); 
        document.getElementById('valor').value = ''; 
        document.getElementById('result').textContent = 'valor adicionado: ' + valor; } 
        else { document.getElementById('result').textContent = 'por favor, insira um valor válido.'; } 
} 

function mostrarValores() 
    { if (valores.length > 0) 
    { document.getElementById('result').textContent = 'todos os valores: ' + valores.join(', '); } 
    
    else { document.getElementById('result').textContent = 'nenhum valor foi inserido.'; } 
} 

function maiorValor() { if (valores.length > 0) 
    
    { let maior = Math.max(...valores); document.getElementById('result').textContent = 'maior valor: ' + maior; } 
    else 
    { document.getElementById('result').textContent = 'nenhum valor foi inserido.'; } 

} function menorValor() { if (valores.length > 0) 
    { let menor = Math.min(...valores); 
        document.getElementById('result').textContent = 'menor valor: ' + menor; } 
    else { 
        document.getElementById('result').textContent = 'nenhum valor foi inserido.'; } }