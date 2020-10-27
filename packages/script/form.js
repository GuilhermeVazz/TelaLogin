function confirmarDecisao(){
    var retorno = confirm("Todos os dados não salvos serão perdidos!")
    
    if(retorno == true){
        window.location.href = 'index.html';
    }else{
        return 
    }
}

