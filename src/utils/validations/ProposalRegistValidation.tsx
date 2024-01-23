import * as yup from "yup";

const ProposalRegistValidation = yup.object({
  name: yup.string().required("O campo Nome é obrigatório"),
  cpf: yup.string().required("O CPF deve ser somente numero"),
  dtnasc: yup.string(),
  gender: yup.string(),
  telefone: yup.string(),
  celular: yup.string(),
  email: yup.string().required("O campo Email é obrigatório"),
  cep: yup.string(),
  city: yup.string(),
  state: yup.string(),
  address: yup.string(),
  district: yup.string(),
  number: yup.string(),
  status: yup.string(),
});

export default ProposalRegistValidation;
