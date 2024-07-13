let hoje = new Date()
        let agora = hoje.getHours()

        let texto = document.getElementById('texto-interativo')
        texto.innerHTML = `agora são ${agora} horas.`
        let imagem = document.getElementById('imagem-dinamica')
        if(agora >= 0 && hora < 12){
            img.src = "imagens/manhã-circle"
        }else if(agora > 12 && agora < 18){
            img.src = "imagens/tarde-circle.png"
        }else{

        }