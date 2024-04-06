//const numbers = [10,2,3,4,50,20,21,-10,-4,666,0,90,80,88,72]//15 elementos média 72,8 soma 1092(utilizar para teste)

//Uma Função que devolve os valores que são maiores que a média
function maiorMedia(lista){
    if(lista.length===0) return 0;

    let soma = somarLista(lista);
    let media = soma/lista.length;

    return lista.filter(item=>item>media)
}//console.log(maiorMedia(numbers));

//Uma função que devolva o menor valor da lista
function menorValor(lista){
   return(Math.min(...numbers))
}//console.log(menorValor(numbers))

//Uma função que devolva o valor da soma dos itens da lista
function somarLista(lista){
    return lista.reduce((total, valor) =>total + valor, 0)
}//console.log(somarLista(numbers))

//uma função que devolva todos os valores que são menores do que 20
function maioresQue20(lista) {
    return lista.filter(item=>item<20)
}//console.log(maioresQue20(numbers))

//Uma função que vai devolver o primeiro e o último valor da lista
function firstAndLast(lista){
    return [lista[0],lista[lista.length-1]];
}//console.log(firstAndLast(numbers))
