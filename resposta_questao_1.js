//variável input recebe o númerico
const input = [11223344];

// a função validateOrder recebe o número pelo parametro da função que é passada ao executar a função
// a função validateOrder retorna true se o número tiver a ordenação correta e false caso contrário
function validateOrder(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    let input = numbers[i] + "";
    let number = input.split("");
    let order = true;

    for (var e = 0; e < number.length - 1; e++) {
      if (Math.abs(parseInt(number[e]) - parseInt(number[e - 1])) > 1) {
        order = false;
        break;
      }
    }

    if (order) {
      console.log("Está ordenado");
    } else {
      console.log("Não está ordenado");
    }
  }
}

//Executa a função validateOrder com o número passado pelo input
validateOrder(input);
