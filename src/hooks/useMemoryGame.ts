export default function useMemoryGame() {
    
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

  return { GenerateMemoryArray };
}
