function dados() {

    const csvFilePath = 'caminho/do/arquivo.csv';
    
    // Fetch para obter o arquivo CSV
    fetch(csvFilePath)
        .then(response => response.text())
        .then(data => {
            // Dividindo as linhas do arquivo CSV
            const rows = data.split('\n');
            
            const columns = Array.from({ length: 13 }, () => []);

        // Loop através das linhas do arquivo CSV
        rows.forEach(row => {
            // Dividindo as colunas de cada linha
            const rowData = row.split(',');

            // Verificando se a linha tem treze colunas
            if (rowData.length === 13) {
                // Adicionando os valores das colunas aos arrays correspondentes
                rowData.forEach((value, index) => {
                    columns[index].push(value.trim()); // Trim para remover espaços em branco
                });
            }
        });

        // Agora você tem os dados de todas as treze colunas como arrays
        console.log('Dados de todas as colunas:', columns);
        })
        .catch(error => console.error('Erro ao carregar o arquivo CSV:', error));



    // let musica = document.getElementById("entrada").value;

    // let cont = 0;

    // for (let i = 0; i < nome_musica.length; i++) {

    //     if (musica == nome_musica[i].tag) {

    //         cont =+ 1;

    //         const popularidade = nome_musica[i].qtd;

    //         let x = popularidade/100

    //         if(x <= 1 && x > 0,90) {
    //             console.log("Excelente");
    //             alert("Excelente", "")
    //         }else if(x <= 0,90 && x > 0,70) {
    //             console.log("Bom");
    //             alert("Bom", "")
    //         } else if(x <= 0,70 && x > 0,50) {
    //             console.log("Razoável");
    //             alert("Razoável", "")
    //         }else if(x <= 0,50 && x > 0,25) {
    //             console.log("Ruim");
    //             alert("Ruim", "")
    //         }else if(x <= 0,25 && x >= 0) {
    //             console.log("Péssimo");
    //             alert("Péssimo", "")
    //         }

    //     }

    // }

    // if(cont == 0){
    //     alert("Não possui dados", "")
    // }

}