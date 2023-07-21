import PromptSync from "prompt-sync";
import { moduloExercicio1 } from "./moduloExercicio1.js";
import { moduloExercicio2 } from "./moduloExercicio2.js";
import { moduloExercicio3 } from "./moduloExercicio3.js";
import { moduloExercicio4 } from "./moduloExercicio4.js";
import { moduloExercicio5 } from "./moduloExercicio5.js";
import { moduloExercicio6 } from "./moduloExercicio6.js";

let prompt = PromptSync()

let resposta

do {

console.log("Bem vindo ao menu de exercicios!")

resposta = prompt("Digite um numero de 1 a 6 para escolher um exercicio, ou, digite 'sair' para encerrar.: ")

    switch (resposta) {

        case "1":
            moduloExercicio1()
            break;
        case "2":
            moduloExercicio2()
            break;  
        case "3":
            moduloExercicio3()
            break;                     
        case "4":
            moduloExercicio4()
            break;     
        case "5":
            moduloExercicio5()
            break;     
        case "6":
            moduloExercicio6()
            break;     
  
        default:
            console.log("Exercicio não existe, por favor, tente novamente.")
            break;

    }

} while( resposta != "sair")