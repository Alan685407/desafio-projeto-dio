class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "usou magia";
      
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
      
    } else if (this.tipo === "monge") {
      ataque = " artes marciais";
      
    } else if (this.tipo === "ninja") {
      ataque = " shuriken";
      
    } else {
      ataque = "usou um ataque desconhecido";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let caracteristicas = new Heroi("Thor", 40, "guerreiro");
caracteristicas.atacar();
