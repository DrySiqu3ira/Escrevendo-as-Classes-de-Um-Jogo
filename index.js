class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque desconhecido";
    }
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("Arthur", 30, "guerreiro");
heroi1.atacar();

const heroi2 = new Heroi("Merlin", 150, "mago");
heroi2.atacar();

const heroi3 = new Heroi("Nina", 25, "ninja");
heroi3.atacar();

const heroi4 = new Heroi("Lao", 40, "monge");
heroi4.atacar();
