export const mapPreferencesFields = [
  {
    type: "select",
    label: "Produtos ou serviços de interesse",
    id: "interests",
    multiple: true,
    options: [
      { value: "Serviço 1", label: "Serviço 1" },
      { value: "Serviço 2", label: "Serviço 2" },
      { value: "Serviço 3", label: "Serviço 3" },
      { value: "Produto 1", label: "Produto 1" },
      { value: "Produto 2", label: "Produto 2" },
      { value: "Produto 3", label: "Produto 3" }
    ]
  },
  {
    type: "checkboxGroup",
    label: "Como conheceu a ConectaCorp?",
    id: "knownFrom",
    options: [
      { value: "Indicação", label: "Indicação" },
      { value: "Redes Sociais", label: "Redes Sociais" },
      { value: "Publicidade", label: "Publicidade" },
      { value: "Outros", label: "Outros" }
    ]
  }
];
