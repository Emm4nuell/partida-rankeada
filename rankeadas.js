const prompt = require("prompt-sync")();
let saldo = 0;

function partida(){

    let alternativa = apresentacao();

    if(alternativa == 1){
        console.log("Partida iniciada!")

        do{
            const randomNumber = Math.floor(Math.random() * 21) - 10;
            saldo += randomNumber;
            if(saldo <= 0){
                saldo = 0;
            }

            console.clear();
            console.log("");
            console.log("O Herói tem saldo de " + saldo + " e está no nível de " + nivelRakeada(saldo));
            console.log("");
            
            var verificador = resultado();
            console.log("Verificador para ver se quer continuar jogando ----> " + verificador)

        }while(verificador == 1)

    }else{
        console.log("Partida finalizada!")
    }
}

function resultado(){

    console.log("Deseja continuar jogando?")
    console.log("1 - Sim;")
    console.log("2 - Não;")
    let escolha = prompt("----> ")
    if(escolha == 1 || escolha == 2){
        return escolha;
    }
}

function apresentacao(){
    console.log("");
    console.log("|************************************************|");
    console.log("|****** SEJA BEM VINDO A PARTIDA RANKEADA *******|");
    console.log("|************************************************|");
    console.log("Escolha uma das alternativas abaixo:")
    console.log("      1 - Iniciar partida;");
    console.log("      2 - Finalizar partida;");
    let escolha = prompt("----> ");
    if(escolha == 1 || escolha == 2){
        return escolha;
    }else{
        console.log("Opção inválida!")
        apresentacao();
    }
}


function nivelRakeada(valor){
    if(valor <= 10){
        return "Ferro";
    }else if(valor >= 11 && valor <= 20){
        return "Bronze";
    }else if(valor >= 21 && valor <= 50){
        return "Prata";
    }else if(valor >= 51 && valor <= 80){
        return "Ouro";
    }else if(valor >= 81 && valor <= 90){
        return "Diamante";
    }else if(valor >= 91 && valor <= 100){
        return "Lendário";
    }else if(valor > 100){
        return "Imortal";
    }
}

partida();