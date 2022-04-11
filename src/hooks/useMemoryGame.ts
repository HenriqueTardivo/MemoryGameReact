import { useState } from "react";

export default function useMemoryGame() {
  const [choosenNumber,setChoosenNumber] = useState<number[]>()
  const [correctNumbers, setCorrectNumbers] = useState<number[]>()
  const [hidePlaying, setHidePlaying] = useState(false)
  
  function pickNumber(numberChosen : number): void{
    
    if (choosenNumber){
      setChoosenNumber([...choosenNumber,numberChosen])

      if (choosenNumber[0] === choosenNumber[1]){     //se tiver 2 numeros compara e verifica se são iguais
        setCorrectNumbers([...choosenNumber, numberChosen])
        setChoosenNumber([])
        setHidePlaying(!hidePlaying)
      }
    } else {
      setChoosenNumber([numberChosen])
    }
  }

  function GenerateMemoryArray(size: number) {
    const itens = size / 2;
    const MemoriaRandom: number[] = [];

    for (let posicao = 1; posicao <= size; posicao += 1) {
      let randomItem = 0;

      do {
        randomItem = Math.floor(Math.random() * itens + 1);
      } while (CheckArray(MemoriaRandom, randomItem));

      MemoriaRandom.push(randomItem);
    }

    return MemoriaRandom
  }

  function CheckArray(memoryArray: number[], index: number) {
    const result = memoryArray.filter((memoryArray) => {
      return memoryArray === index;
    });

    if (result.length > 1) return true;
    else return false;
  }

  return { GenerateMemoryArray, choosenNumber, pickNumber, correctNumbers, hidePlaying};
}
