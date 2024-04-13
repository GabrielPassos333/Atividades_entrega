// Crie uma classe chamada Estudante, essa classe deve conter os atributos:
// nome, e-mail, RA, curso e uma lista com o nome das disciplinas que o
// estudante está matriculado. A classe também deve ter dois métodos:
// primeiraDisciplina e ultimaDisciplina que vão devolver respectivamente a
// primeira disciplina que o estudante está matriculado e a última.

class Estudante{ //Sempre primeira letra maiúscula
    constructor(nome,email,ra,curso,disciplinas){
        this.nome = nome
        this.email = email
        this.ra = ra
        this.curso = curso
        this.disciplinas = disciplinas
    }
    primeiraDisciplida(){
        return this.disciplinas[0]
    }
    ultimaDisciplida(){
        return this.disciplinas[this.disciplinas.length-1]
    }
}

const estudante1 = new Estudante("Pepito","pepito2007@bol.com.br",123456789,"Artes",["Miado Alto","Historia","Artes","Carinha de Pidão"])
const estudante2 = new Estudante("Hemanoteu","hemanoteudasilva@uol.com.br",66642000,"Lutas",["JiuJitsu","Karate","Judo","Capoeira"])

console.log(estudante1.primeiraDisciplida(),estudante1.ultimaDisciplida())
console.log(estudante2.primeiraDisciplida(),estudante2.ultimaDisciplida())