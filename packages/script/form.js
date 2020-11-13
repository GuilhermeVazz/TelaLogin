let nome 
let email 
let pass 
let definitivePass 
let cpf 

function cadastrarDados() {

    nome = document.getElementById("nome").value
    email = document.getElementById("email").value
    cpf = document.getElementById("cpf").value
    pass = document.getElementById("pass").value


    listaUsers.nome = nome
    listaUsers.email = email
    listaUsers.pass = pass
    listaUsers.cpf = cpf
    console.log(listaUsers.nome)
    console.log(listaUsers.email)
    console.log(listaUsers.pass)
    console.log(listaUsers.cpf)

}

