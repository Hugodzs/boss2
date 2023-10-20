
function rankingCalculator(wins, loses) {
   return wins - loses
}
let ranking
result = rankingCalculator(10, 9);
if(result <=10){ranking= "Ferro"
}
else if(result >10 && result <=20){ranking= "Prata"
}
else{console.log("erro fatal")
}
console.log("heroi tem" + result + "pontos e está no ranking " + ranking)

