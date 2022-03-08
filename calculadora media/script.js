document.getElementById("submit").onclick = function (e) {
    var nomeAluno = document.getElementById("nomeAluno").value;
    var primeiraNota = parseFloat(document.getElementById("primeiraNota").value);
    var segundaNota = parseFloat(document.getElementById("segundaNota").value);
    var terceiraNota = parseFloat(document.getElementById("terceiraNota").value);
    var quartaNota = parseFloat(document.getElementById("quartaNota").value);
    
    var notaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1);
  
    let resultado;
  
    if (notaFinal >= 6){
        resultado = "Aprovado! 🎉;";   
    } else {
        resultado = "Reprovado! &#9940;"
    }
    
    document.getElementById("resultado").innerHTML = `O aluno ${nomeAluno} ficou com nota <strong>${notaFinal}</strong> e foi <strong>${resultado}</strong>`
}