function dados() {
    const ds = [
        {tag: "laranja",flk: 33},
        {tag: "banana",flk: 24},
        {tag: "melão",flk: 20},
        {tag: "morango",flk: 18},
        {tag: "manga",flk: 13}
    ]

    let tg = document.getElementById("entrada").value;

    for(let i=0; i<ds.length; i++) {
        if(tg == ds[i].tag) {

            console.log(ds[i].tag + ds[i].flk);

            const achou = ds[i].flk;

            if(achou == ds[0].flk) {
                console.log("Excelente");
            } else if(achou == ds[1].flk) {
                console.log("Bom");
            } else if(achou == ds[2].flk) {
                console.log("Razoável");
            }

        }
    }

    function equacaoDaReta(x, y) {
        // Defina os valores dos coeficientes a e b
        // Aqui, vou usar valores arbitrários apenas para fins de exemplo
        const a = 2; // coeficiente angular
        const b = 3; // coeficiente linear
    
        // Calcule o valor de y usando a equação da reta (y = ax + b)
        const resultadoY = a * x + b;
    
        // Verifique se o resultado calculado é igual ao valor real de y
        if (resultadoY === y) {
            return true;
        } else {
            return false;
        }
    }
    
    // Teste a função com alguns valores de x e y
    console.log(equacaoDaReta(1, 5)); // Deve retornar true se (1, 5) pertence à reta
    console.log(equacaoDaReta(2, 7)); // Deve retornar true se (2, 7) pertence à reta
    console.log(equacaoDaReta(3, 10)); // Deve retornar false se (3, 10) não pertence à reta    

}