class Personagem extends Animacao{
    constructor(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x,variacaoY, largura, altura, larguraSprite, alturaSprite)
    this.yInicial = height - this.altura - 30;
    this.variacaoY= variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulos = 0;
    this.alturaDoPulo =-30;
    this.invencivel =false;
    
  }
  pula(){
     
    if (this.pulos < 2) {
    
    this.velocidadeDoPulo =  this.alturaDoPulo;
    this.pulos++;
    }
  }
   frente(){
     this.x += 8;
  }
   tras(){
     this.x += -8;
  }
  
  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade; 
    
    if(this.y > this.yInicial){
      this.y = this.yInicial;
      this.pulos =0;
    }
    
  }
  ficaInvencivel(){
    
      this.invencivel = true;
      setTimeout(() => {
        this.invencivel = false
      },1000)
    
  }
  estaColidindo(inimigo){
    if( this.invencivel){
      return false
    }
    const precisao = .6;
    const colisao = collideRectRect(this.x, 
      this.y, 
      this.largura * precisao, 
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao)
    return colisao;
    
  }
}