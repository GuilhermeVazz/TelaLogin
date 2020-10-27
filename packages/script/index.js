
        var senhaAleatoria
        //gera uma senha para o usuário validar
        function gerarSenha() {

            senhaAleatoria = Math.floor((Math.random() * 9999999) + 1000000);

            senhaAleatoria = senhaAleatoria.toString(36).toUpperCase()
            
            document.getElementById("codigoDigitado").value = senhaAleatoria 

        }
        //função para verificar se a senha digita é a mesma da função gerarSenha
        function aprovarSenha() {
            //Variavel  criada para atribuir o valor do input de campo senha
            var verificarSenha = document.getElementById("codigoDigitado").value
            //verifica se a senha digita no inpu é igual a gerada na função gerarSenha
            if (verificarSenha == senhaAleatoria) {
                window.location.href = 'form.html'
            } else {
                alert("Insira um código válido ou gere um novo")
                return

            }
        }