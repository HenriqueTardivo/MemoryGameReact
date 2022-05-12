import {
  ReactNode,
  useState,
  useContext,
  createContext,
  useEffect,
} from "react";
import { CardProps } from "../components/Card";

interface IMemoryContextProvider {
  choosenNumber: CardProps[] | undefined;
  correctNumbers: number[] | undefined;
  pickNumber: (numberChosen: CardProps) => void;
  GenerateMemoryArray: (size: number) => number[];
}

interface IMemoryContextData {
  children: ReactNode;
}

const MemoryContext = createContext<IMemoryContextProvider>(
  {} as IMemoryContextProvider
);

export function MemoryProvider({ children }: IMemoryContextData) {
  const [choosenNumber, setChoosenNumber] = useState<CardProps[] | undefined>();
  const [correctNumbers, setCorrectNumbers] = useState<number[]>([99]);

  useEffect(() => {
    if (choosenNumber?.length === 2) {
      if (choosenNumber[0].id === choosenNumber[1].id) {
        setCorrectNumbers([...correctNumbers, choosenNumber[0].id]);
      }
      setChoosenNumber([]);
    }
  }, [choosenNumber, correctNumbers]);

  function pickNumber(numberChosen: CardProps): void {
    if (choosenNumber) {
      setChoosenNumber([...choosenNumber, numberChosen]);
    } else {
      setChoosenNumber([numberChosen]);
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

    return MemoriaRandom;
  }

  function CheckArray(memoryArray: number[], index: number) {
    const result = memoryArray.filter((memoryArray) => {
      return memoryArray === index;
    });

    if (result.length > 1) return true;
    else return false;
  }

  return (
    <MemoryContext.Provider
      value={{ choosenNumber, correctNumbers, pickNumber, GenerateMemoryArray }}
    >
      {children}
    </MemoryContext.Provider>
  );
}

export function useMemoryGame() {
  const context = useContext(MemoryContext);
  return context;
}
