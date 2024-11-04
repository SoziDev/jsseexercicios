function calcTemp() {
    let temperatura=document.getElementById('temperatura').value;
    let valor= parseFloat(document.getElementById('valor').value);
    let resultado= document.getElementById('resultado');
    if(temperatura==='celsius'){
        let fahrenheit=(valor*9/5)+32;
        resultado.innerHTML=`${valor}°F eh igual a ${fahrenheit.toFixed(2)}°F`;
    }
    else if(temperatura==='fahrenheit'){
        let celsius=(valor-32)*5/9;
        resultado.innerHTML=`${valor}°F eh igual a ${celsius.toFixed(2)} °C`;
    }
    else{
        resultado.innerHTML="por favor, selecione uma escala";
    }
}