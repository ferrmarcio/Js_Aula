//Cadastro para o Evento

var dtAtual = '15/03/2022'
var dtEvento ='20/03/2022' //data do envento
var idadePermitida = '18' //limite mínimo de idade permitida para o evento
var idade = '19'          //idade do convidado
var nConvidados = ['Marcio','Juliane','Lívia','Daniela','Douglas','Paulo']    //lista de convidados para o evento

if (dtEvento >= dtAtual){
    console.log(dtAtual ,'é uma data válida! O evento Poderá acontecer')
}else{
    console.log('O evento não poderá acontecer, a data é inválida')
}

if (idade >= idadePermitida){
    console.log(idade, 'anos é uma idade válida! Cadastro permitido')
}else{
    console.log('Cadastro não permitido, você não tem 18 anos')
}

if(nConvidados.length <= 100){
    console.log('O cadastro de participantes pode continuar')
    console.log('Insira seu nome para o cadastro: ')
}else{
    console.log('O número máximo de 100 participantes para o evento foi atingido')
}