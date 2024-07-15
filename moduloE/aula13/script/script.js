function carregar(){
    let hoje = new Date()
    let agora = hoje.getHours()
    let texto = document.getElementById("texto-interativo")
        texto.innerHTML = `Agora são ${agora} horas!`
    let imagem = document.getElementById("imagem")
    if(agora >=0 && agora <12){
        //bom dia
        imagem.src = "imagens/manhã-circle.png"
        document.body.style.backgroundColor = "#DBA156"
    }else if(agora >12 && agora <=18){
        //boa tarde
        imagem.src = "imagens/tarde-circle.png"
        document.body.style.backgroundColor = "#AF4928"
    }else{
        //boa noite
        imagem.src = "imagens/noite-circle.png"
        document.body.style.backgroundColor = "#273139"
    }
}
