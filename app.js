function dados() {
    const iphone = [
        {tag: "Iphone 15",qtd: 33},
        {tag: "Iphone 14",qtd: 24},
        {tag: "Iphone 13",qtd: 20},
        {tag: "Iphone 12",qtd: 18},
        {tag: "Iphone 11",qtd: 13}
    ]

    let aparelho = document.getElementById("entrada").value;

    for (let i = 0; i < iphone.length; i++) {

        if (aparelho == iphone[i].tag) {

            const qtdAparelho = iphone[i].qtd;

            if(qtdAparelho == iphone[0].qtd) {
                console.log("Excelente");
                alert("Classificação", "Excelente")Excelente
            } else if(qtdAparelho == iphone[1].qtd) {
                console.log("Bom");
            } else if(qtdAparelho == iphone[2].qtd) {
                console.log("Razoável");
            }else if(qtdAparelho == iphone[3].qtd) {
                console.log("Ruim");
            }else if(qtdAparelho == iphone[4].qtd) {
                console.log("Péssimo");
            }

            return `y = ${i}x + ${i}`;
        }

    }

    // function equacaoDaReta(x, y) {
    //     // Defina os valores dos coeficientes a e b
    //     // Aqui, vou usar valores arbitrários apenas para fins de exemplo
    //     const a = 2; // coeficiente angular
    //     const b = 3; // coeficiente linear
    
    //     // Calcule o valor de y usando a equação da reta (y = ax + b)
    //     const resultadoY = a * x + b;
    
    //     // Verifique se o resultado calculado é igual ao valor real de y
    //     if (resultadoY === y) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }
    
    // // Teste a função com alguns valores de x e y
    // console.log(equacaoDaReta(1, 5)); // Deve retornar true se (1, 5) pertence à reta
    // console.log(equacaoDaReta(2, 7)); // Deve retornar true se (2, 7) pertence à reta
    // console.log(equacaoDaReta(3, 10)); // Deve retornar false se (3, 10) não pertence à reta       

}