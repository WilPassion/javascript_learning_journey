// leitura de arquivo --> readFile
let {readFile, writeFile} = require("fs"); // require("fs") carrega o módulo nativo do Node fs (file system).

readFile("arquivo.txt", "utf8", (error, texto) => {
    if (error) {
        throw error;
    } else{
        console.log(texto);
    }
});

// escrever no arquivo --> writeFile}

writeFile("arquivo.txt", "Texto a ser escrito", (error) => { 
    if (error) {
        throw error;
    } else {
        console.log("Escreveu com sucesso!!! =D")
    }
});