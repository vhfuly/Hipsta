function preload(){
  
  pontuacao= new Pontuacao();
  imagemTelaInicial = loadImage('imagens/cenario/telaInicial.png');
  fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
  imagemCenario =         loadImage('imagens/cenario/floresta.png');
    imagemCenario2 =         loadImage('imagens/cenario/layer1.png');
  
  imagemVida = loadImage('imagens/assets/coracao.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
   imagemGameOver = loadImage('imagens/assets/game-over.png');
  imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
  imagemIminigoVoador=loadImage('imagens/inimigos/gotinha-voadora.png');
  
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  somDoPulo = loadSound('sons/somPulo.mp3');
  
}