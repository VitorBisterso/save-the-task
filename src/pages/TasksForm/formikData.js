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
        titulo: getDefaultYupStringObject(2, 30),
        descricao: getDefaultYupStringObject(2, 100),
        prioridade: Yup.number()
            .typeError('A prioridade é um número de 1 a 5')
            .integer()
            .positive()
            .min(1, 'O valor mínimo da prioridade é 1')
            .max(5, 'O valor máximo da prioridade é 5')
            .required(requiredFieldMessage),
        categoria: Yup.string().required(requiredFieldMessage),
        completada: Yup.boolean().required(requiredFieldMessage),
    });
