import { create } from "zustand";

type Step = "step-1" | "step-2" | "step-3" | "step-4" | "step-5";

interface FormStore {
  forms: { [x: string]: any };
  addForm: (newForm: { [x: string]: string }) => void;
}

const useFormStore = create<FormStore>((set) => ({
  forms: {} as { [x: string]: any },
  addForm: (newForm) =>
    set((prev) => ({ forms: { ...prev.forms, ...newForm } }))
}));

export default useFormStore;
