//variavel com os anos de trabalho
const works = [
  [1900, 1980],
  [1950, 2000],
  [1920, 2010],
];

//função que valida qual o ano de trabalho tivemos mais trabalhadores na ativa
function validadeAposentadoria(works) {
  let start = [];
  let end = [];

  works.forEach((element) => {
    if (element[0] > 0 && element[1] > 0 && element[0] < element[1]) {
      start.push(element[0]);
      end.push(element[1]);
    }
  });

  let moreStart = Math.max(...start);
  let moreEnd = Math.max(...end);

  if (moreStart < moreEnd) {
    console.log(`Houve mais trabalhadores no ano de ${moreStart}`);
  }
}

//executa função passando o array de anos de trabalho
validadeAposentadoria(works);
