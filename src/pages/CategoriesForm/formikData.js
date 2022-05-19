import * as Yup from 'yup';

const requiredFieldMessage = 'Campo obrigatório';

const getDefaultYupStringObject = (min, max) =>
    Yup.string()
        .min(min, `Mínimo de ${min} caracteres`)
        .max(max, `Máximo de ${max} caracteres`)
        .required(requiredFieldMessage);

// eslint-disable-next-line import/prefer-default-export
export const getValidationSchema = () =>
    Yup.object({
        nome: getDefaultYupStringObject(2, 30),
        cor: Yup.string().required(requiredFieldMessage),
    });
