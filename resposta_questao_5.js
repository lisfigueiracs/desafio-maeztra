//função que recebe o valor de amigos por parametro
function photoMode(amigos) {
  let poses = 1;

  //for baseado em formula de permutação
  for (let i = amigos; i > 1; i--) {
    poses *= i;
  }

  console.log(
    `os ${amigos} amigos podem tirar foto em ${poses} modos diferentes`
  );
}

//executa função passando o número de amigos por parametro
photoMode(3);
