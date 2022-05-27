// class Pessoa{
//     constructor(
//         public nome: string,
//         public email: string,
//         public fone: string,
//         protected senha: string,

//     ){}

//     getNome(): string{
//         return this.nome
//     }
// }

// class Fisica extends Pessoa{
//     constructor(
//         nome: string,
//         email: string,
//         fone: string,
//         senha: string,
//         public cpf: string,
//     ){
//         super(nome, email, fone, senha)
//     }
      
//     getAllData(): string{
//         return "Nome: "+this.nome+" - "+"Email: "+this.email+" - "+"Fone: "+this.fone+" - "+"CPF: "+this.cpf
//     }

//     loginCpf(): void{
//         if (this.cpf == `01240120310` ) && (this.senha == `calca`){
//         console.log(`Login com sucesso`)
//     } else{
//         console.log("Erro de login")


//     }

  
// }
// }

// // const pessoa = new Pessoa(`Classe Pessoa`, `pessoa@gmail.com`, `981104050`, `00000`)
// const pf = new Fisica(`Isaac`, `richardyisaac@gmail.com`, `98120309`, `calca`, `01240120310`, )


// console.log(pf.getAllData())
