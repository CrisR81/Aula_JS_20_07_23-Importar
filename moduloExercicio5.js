// 5. Imprimir os primeiros 10 números da sequência de Fibonacci.

import PromptSync from "prompt-sync"

let prompt = PromptSync()

export function moduloExercicio5() {
    
let anterior = 0
let atual = 1
console.log (anterior) ;
console.log (atual) ;



for(let contador = 0; contador <= 9 ; contador ++){
    let proximo = anterior + atual;
    console.log (proximo) ;
       anterior = atual
       atual = proximo

}
}