class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [
      {
        inimigo: 0 ,
        velocidade:10
      },
       {
        inimigo: 1 ,
        velocidade:30
      },
      {
        inimigo: 1 ,
        velocidade:15
      },
       {
        inimigo: 2 ,
        velocidade:40
      },
    ]
    
  }
  setup() {
    cenario = new Cenario(imagemCenario, 3);
    cenario2 = new Cenario(imagemCenario2, 3);
    vida = new Vida(5,3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 28, 60, 60, 104, 104, 10);
    const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width * 2, 0, 200, 200, 400, 400, 8);
    const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemIminigoVoador, width - 52, 250, 100, 75, 200, 150, 15);
    inimigos.push(inimigo);
    inimigos.push(inimigoGrande);
    inimigos.push(inimigoVoador);

  }

  keyPressed(key) {
    if (!gameOver && key == 'ArrowUp') {
      personagem.pula();
      somDoPulo.play();
    }else if(gameOver && key === 'Enter'){
      window.location.reload();
  }
  
  }

  draw(){
    if (keyIsDown(RIGHT_ARROW)) {
      personagem.frente();
    }
    if (keyIsDown(LEFT_ARROW)) {
      personagem.tras();
    }


    cenario.exibe();
    cenario.move();
    vida.draw();
    personagem.exibe();
    personagem.aplicaGravidade();
    pontuacao.exibe();
    pontuacao.adicionarPonto();
  
    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    
    inimigo.velocidade = linhaAtual.velocidade;
    
    inimigo.exibe();
    inimigo.move();
    
  
    
    
    if (inimigoVisivel) {
    this.mapa[this.indice].inimigo= parseInt(random(0,2.5))
    this.mapa[this.indice].velocidade= parseInt(random(10,40))
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
      
    }

    
    if (pontuacao.pontos  == 100){
      vida.ganhaVida();
    }
      if (personagem.estaColidindo(inimigo)) {
      personagem.ficaInvencivel();
      vida.perdeVida();
      
      if(vida.vidas == 0){
        image(imagemGameOver, width / 2 - 200, height / 3);
        somDoJogo.stop();
        noLoop();
        gameOver=true;
        textAlign(CENTER);
        textSize(40);
        fill('#fff');
        text( 'Para reiniciar o jogo, tecle "Enter"', width/2, height/3*2);
    
      }
     

    }

    cenario2.exibe();
    cenario2.move();

  }
}