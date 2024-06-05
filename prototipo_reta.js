function dados() {
    const iphone = [
        {tag: "Iphone 15",qtd: 33},
        {tag: "Iphone 14",qtd: 24},
        {tag: "Iphone 13",qtd: 20},
        {tag: "Iphone 12",qtd: 18},
        {tag: "Iphone 11",qtd: 13}
    ]

    let aparelho = document.getElementById("entrada").value;

    let cont = 0;

    for (let i = 0; i < iphone.length; i++) {

        if (aparelho == iphone[i].tag) {

            cont =+ 1;

            const qtdAparelho = iphone[i].qtd;

            let x = qtdAparelho/iphone[0].qtd

            if(x <= 1 && x > 0,90) {
                console.log("Excelente");
                alert("Excelente", "")
            }else if(x <= 0,90 && x > 0,70) {
                console.log("Bom");
                alert("Bom", "")
            } else if(x <= 0,70 && x > 0,50) {
                console.log("Razoável");
                alert("Razoável", "")
            }else if(x <= 0,50 && x > 0,25) {
                console.log("Ruim");
                alert("Ruim", "")
            }else if(x <= 0,25 && x >= 0) {
                console.log("Péssimo");
                alert("Péssimo", "")
            }

        }

    }

    if(cont == 0){
        alert("Não possui dados", "")
    }

}