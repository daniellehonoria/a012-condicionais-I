/*Crie um código que receba um **prompt** que diga: "Escreva aqui sua nacionalidade" e guarde o valor da resposta em uma const `nacionalidade`.

Vamos considerar que nosso programa aceita as seguintes 5 nacionalidades:
- brasileira;
- argentina;
- uruguaia;
- chilena;
- colombiana;

Crie uma estrutura de `if/else if/else` que verifique se a nacionalidade guardada na const `nacionalidade` é igual a cada uma das nacionalidades 
acima, e caso seja, imprima a nacionalidade no console. O último `else` deve imprimir "nacionalidade não encontrada" caso o valor de 
`nacionalidade` não corresponda a nenhum dos valores.

> 💡 Lembre-se de prestar atenção às letras maiúsculas e minúsculas. */




/*let nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase()


if(nacionalidade == "brasileira"){
    console.log("Você é brasileiro")
}else if(nacionalidade == "argentina"){
    console.log("Você é argentino")
}else if(nacionalidade == "uruguaia"){
    console.log("Você é uruguaio")
}else if(nacionalidade == "chilena"){
    console.log("Você é chileno")
}else if(nacionalidade == "colombiana"){
    console.log("Você é colombiano")
}else{
    console.log("Nacionalidade não encontrada")
}*/

let nacionalidade = prompt('Escreva aqui sua nacionalidade');
nacionalidade = nacionalidade.toLowerCase();

let nacionalidades = [
  'argentina',
  'colombiana',
  'uruguaia',
  'brasileira',
  'chilena',
];
let resultado = nacionalidades.includes(nacionalidade)
  ? console.log('sim')
  : console.log('nao');
console.log(resultado);