function dados(data) {

    let musica = document.getElementById("entrada").value;

    let cont = 0;

    for (let i = 0; i < data.length; i++) {

        if (musica == data[i].Title) {

            cont =+ 1;

            const popularidade = data[i].Popularidade;
            console.log('popularidade: ' + popularidade);

            let x = popularidade/100
            console.log('x: ' + x);

            if(x <= 1 && x > 0.90) {
                console.log("Excelente");
                alert("Excelente", "")
            }else if(x <= 0.90 && x > 0.70) {
                console.log("Bom");
                alert("Bom", "")
            } else if(x <= 0.70 && x > 0.50) {
                console.log("Razoável");
                alert("Razoável", "")
            }else if(x <= 0.50 && x > 0.25) {
                console.log("Ruim");
                alert("Ruim", "")
            }else if(x <= 0.25 && x >= 0) {
                console.log("Péssimo");
                alert("Péssimo", "")
            }

        }

    }

    if(cont == 0){
        alert("Não possui dados", "")
    }

}