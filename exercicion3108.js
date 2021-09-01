let participante1 = [5, 8, 4, 9, 5];
let participante2 = [8, 7, 8, 6, 8];
let participante3 = [7, 5, 10, 8, 3];

// Melhor média (a maior pontuação média entre os concorrentes)
// Maior e-tip(a maior pontuação entre as 5 notas de cada participante)

// Determine qual seria a maneira ideal de representar cada participante com suas pontuações.
// Para o propósito do exercicio usaremos arrays

// Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

function pontuacaoMedia(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma / arr.length;
}

// Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.

function calculaMaiorNota(arr) {
  let maiorNota = 0;
  for (let i in arr) {
    if (arr[i] > maiorNota) {
      maiorNota = arr[i];
    }
  }
  return maiorNota;
}

// Logo nosso líder tecnológico nos pede para criar essas duas funções geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, e executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma, e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

function resultadoConcurso(arr1, arr2, arr3) {
  let participantesNotas = [
    ["Participante 1", pontuacaoMedia(arr1), calculaMaiorNota(arr1)],
    ["Participante 2", pontuacaoMedia(arr2), calculaMaiorNota(arr2)],
    ["Participante 3", pontuacaoMedia(arr3), calculaMaiorNota(arr3)],
  ];

  console.log("==========================");
  console.log("Os vencedores do concurso são:");
  console.log("==========================\n");
  console.log("Por média:");
  console.log(participantesNotas.sort((a, b) => b[1] - a[1])[0][0]);
  console.log("\nMaior nota geral:");
  console.log(participantesNotas.sort((a, b) => b[2] - a[2])[0][0]);
}

console.log(resultadoConcurso(participante1, participante2, participante3));

// for (let i = 0; i <= arr.length; i++)
// for (let i in arr)

/*
(a, b) => b - a

function (a,b){
    return b-a
}
*/

/*
console.log(
    [participante1Notas, participante2Notas, participante3Notas].sort(
      (a, b) => b[1] - a[1]
    )[0][0]
  );
*/
