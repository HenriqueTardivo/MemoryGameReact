export default function useMemoryGame() {
  var MemoriaRandom: number[] = [];

  function GenerateMemoryArray(size: number) {
    const itens = size / 2;

    for (let posicao = 1; posicao <= size; posicao += 1) {
      let randomItem = 0;

      do {
        randomItem = Math.floor(Math.random() * itens + 1);
      } while (CheckArray(MemoriaRandom, randomItem));

      MemoriaRandom.push(randomItem);
    }
  }

  function CheckArray(memoryArray: number[], index: number) {
    const result = memoryArray.filter((memoryArray) => {
      return memoryArray === index;
    });

    if (result.length > 1) return true;
    else return false;
  }

  return { MemoriaRandom, GenerateMemoryArray };
}
