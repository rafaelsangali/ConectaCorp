export const mapProfessionalInfoFields = [
  {
    type: "text",
    label: "Ocupação atual",
    id: "occupation"
  },
  {
    type: "text",
    label: "Empresa onde trabalha",
    id: "company"
  },
  {
    type: "select",
    label: "Ramo de atividade",
    id: "activitySector",
    options: [
      { value: "", label: "Selecione um ramo" },
      { value: "Tecnologia", label: "Tecnologia" },
      { value: "Saúde", label: "Saúde" },
      { value: "Educação", label: "Educação" },
      { value: "Financeiro", label: "Financeiro" },
      { value: "Serviços", label: "Serviços" }
    ]
  },
  {
    type: "select",
    label: "Salário aproximado",
    id: "salary",
    options: [
      { value: "", label: "Selecione uma faixa salarial" },
      { value: "1", label: "Até R$2.000" },
      { value: "2", label: "R$2.000 - R$5.000" },
      { value: "3", label: "R$5.000 - R$10.000" },
      { value: "4", label: "R$10.000+" }
    ]
  }
];
