// função principal
function rankingCalculator(wins, loses) {
   return wins - loses
}
let ranking
result = rankingCalculator(200, 60);
if(result <=10){ranking= "Ferro"
}

else if(result >=11 && result <=20){ranking= "Prata"
}
else if(result >=11 && result <=20){ranking= "Bronze"
}
else if(result >=21 && result <=50){ranking= "Prata"
}
else if(result >=51 && result <=80){ranking= "Ouro"
}
else if(result >=81 && result <=90){ranking= "Diamante"
}
else if(result >=91 && result <=100){ranking= "Lendário"
}
else if(result >=101){ranking= "Imortal"
}
else{console.log("erro fatal")
}
//saida
console.log("Herói tem " + result + " pontos de guerra e está no ranking " + ranking + "!")

