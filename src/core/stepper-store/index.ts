import { create } from "zustand";

type Step = "step-1" | "step-2" | "step-3" | "step-4" | "step-5";

interface StepStore {
  step: Step;
  setStep: (newState: Step) => void;
}

const useStepStore = create<StepStore>((set) => ({
  step: "step-1",
  setStep: (newState) => set({ step: newState })
}));

export default useStepStore;
