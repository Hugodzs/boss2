
function rankingCalculator(wins, loses) {
    let result = wins - loses

     switch(result){
        case result <= 10: console.log("Heroi tem " + result + "pontos e está no ranking Ferro");
        break;
        case result >=10 && result <=20: console.log("Dia de começar a semana com prata!");
        break;
        default: console.log("erro")
     }
    }
rankingCalculator(20,11);

