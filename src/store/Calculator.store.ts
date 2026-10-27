import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Calculator {
  bill: number;
  people: number;
  tip: number;

  setBill: (newBill: number) => void;
  setPeople: (newPeople: number) => void;
  setTip: (newTip: number) => void;

  tipAmount: () => number;
  total: () => number;
}

export const useCalculatoreStore = create<Calculator>()(
  devtools((set, get) => ({
    bill: 100,
    people: 1,
    tip: 5,
    setBill: (newBill: number) => set(() => ({ bill: newBill })),
    setPeople: (newPeople: number) => set(() => ({ people: newPeople })),
    setTip: (newTip: number) => set(() => ({ tip: newTip })), 

    tipAmount: () => {
      const { bill, people, tip } = get();
      if (!people || people === 0) return 0;
      return (bill * (tip / 100)) / people;
    },

    total: () => {
      const { bill, people, tip } = get();
      if (!people || people === 0) return 0;
     return (bill + (bill * (tip / 100))) / people;
    },
  }))
);