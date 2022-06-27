const array = [1, 1, 3, 3, 5, 6, 6, 8, 9, 10];

function arrInt(array) {
  const arrayDuplicado = array.filter((item, index) => {
    return array.indexOf(item) !== index;
  });

  console.log(arrayDuplicado);
}

//executa a função passando o array por parametro
arrInt(array);
