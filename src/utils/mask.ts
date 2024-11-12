class mask {
  phone = (value: string) => {
    if (typeof value !== "string") {
      return value;
    }
    value = value.slice(0, 15);
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");
    return value;
  };

  cpf = (value: string) => {
    if (typeof value !== "string") {
      return value;
    }
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  };

  cnpj = (value: string) => {
    if (typeof value !== "string") {
      return value;
    }
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  money(value: number | string): string {
    if (typeof value !== "string") {
      return "";
    }
    const input = value.toString().replace(/\D/g, "");
    if (value.trim() == "R$" || input.trim() == "") {
      return "R$ 0,00";
    }
    const parsedValue = parseFloat(value.toString().replace(/\D/g, "")) / 100;
    const formattedValue = parsedValue.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    });
    return formattedValue;
  }

  cep(cep: string): string {
    if (typeof cep !== "string") {
      return "";
    }
    const formattedCEP = cep.replace(/\D/g, ""); // Remove qualquer caractere que não seja um número
    if (cep.length < 8) {
      return formattedCEP.replace("-", " ");
    }
    return `${formattedCEP.slice(0, 5)}-${formattedCEP.slice(5)}`; // Retorna o CEP formatado com o hífen
  }

  maskIntoNumber(value: string) {
    if (!value) {
      return;
    }
    const filteredInput = value.toString().replace(/[^0-9,]/g, "");
    if (!filteredInput) {
      return NaN;
    }
    return Number(filteredInput.trim().replace(",", "."));
  }
}
export default new mask();
