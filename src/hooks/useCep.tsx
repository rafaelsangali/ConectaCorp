import { useEffect } from "react";
import axios from "axios";

const useCep = (cep: string, callback: (data: any) => void) => {
  const fetchCep = async () => {
    try {
      const { data } = await axios.get(
        `https://viacep.com.br/ws/${cep?.replace("-", "")}/json/`
      );
      if (data.erro) {
        alert("CEP não encontrado.");
        return;
      }
      if (data) {
        callback(data);
      }
    } catch {}
  };
  useEffect(() => {
    if (!cep && cep?.length <= 11) return; // Evita a chamada caso o CEP seja vazio
    fetchCep();
  }, [cep]);
};

export default useCep;
