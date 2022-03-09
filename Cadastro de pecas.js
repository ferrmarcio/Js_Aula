let peso = 100
if (peso < 100){
    console.log("A peça deve pesar no minimo 100g")
}else{
    console.log("A peça possui o peso adequado")
}

var listaDePecas = ["Amortecedor","Motor","Filtro de ar"]
if (listaDePecas.length < 10){
    console.log("Ainda tem espaço!")
}else{
    console.log("Não tem mais espaço")
}
let nomePeca = "Disco de Freio"
if (nomePeca.length > 3){
    console.log("Nome da peça está dentro do permitido")
}else if (nomePeca.length == 0){
    console.log("Nome da peça não pode ser vazio")    
}else {
    console.log("Nome da peça precisa de no mínimo 3 caracteres")
}