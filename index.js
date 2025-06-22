// Segundo Desafio do Felipão - Calculadora de partidas Rankeadas
function calcularNivel(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    switch(true){
        case (vitorias < 10):
            nivel = "Ferro";
            break;
        
        case (vitorias >= 10 && vitorias <= 20):
            nivel = "Bronze";
            break;
        
        case (vitorias > 20 && vitorias <= 50):
            nivel = "Prata";
            break;
        
        case (vitorias > 50 && vitorias <= 80):
            nivel = "Ouro";
            break;
        
        case (vitorias > 80 && vitorias <= 90):
            nivel = "Diamante";
            break;
        
        case (vitorias > 90 && vitorias <= 100):
            nivel = "Lendário";
            break;
        
        case (vitorias > 100):
            nivel = "Imortal";
            break;
    }

    return `O Herói tem saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`;
}

// Chamada da função e exibição do resultado
const resultado = calcularNivel(35, 5);
console.log(resultado);
