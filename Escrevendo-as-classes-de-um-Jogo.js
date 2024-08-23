class Heroi{
    constructor(nome, idade, tipo ){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    }

    Atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "guerreiro":
                ataque = "espada";
                break;
            case "mago":
                ataque = "magia";
                break;
            case "ninja":
                ataque = "shuriken";
                break
            case "monge":
                ataque = "artes marciais";
                break
            default:
                ataque = "ataque invalido"
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Kratos", 650, "guerreiro");
const heroi2 = new Heroi("Doctor Strange", 130, "mago");
const heroi3 = new Heroi("Naruto", 29, "ninja");
const heroi4 = new Heroi("Goku", 32, "monge");

heroi1.Atacar()
heroi2.Atacar()
heroi3.Atacar()
heroi4.Atacar()