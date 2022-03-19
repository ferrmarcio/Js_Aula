//Cadastro para o Evento
//Datas atuais
var diaAtual = 16
var mesAtual = 03
var anoAtual = 2022
//Datas do evento
var diaEvento = 19
var mesEvento = 03
var anoEvento = 2022
//dados para cadastro dos convidados
var idadePermitida = '18' //limite mínimo de idade permitida para o evento
var idade = '19'          //idade do convidado
var nConvidados = ['Marcio','Juliane','Lívia','Daniela','Douglas','Paulo']    //lista de convidados para o evento

if(diaEvento >= diaAtual){
    if(mesEvento >= mesAtual){
        if(anoEvento >= anoAtual){
            console.log(diaAtual + '/' + mesAtual + '/' + anoAtual ,'é uma data válida! O evento Poderá acontecer')
        }else{
            console.log('Data inválida')
        }
    }else{
        console.log('Data inválida')
    }
}else{
    console.log('Data inválida')
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