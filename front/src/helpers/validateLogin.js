export const validate = (input) => {
    const errors = {};

    const usernameRegex = /^\S{4,}$/;
    const passwordRegex = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)[A-Za-zñÑ\d@$!%*?&]{8,}$/;

    if (!usernameRegex.test(input.userName)) {
        errors.userName = "EL NOMBRE DE USUARIO ES INVÁLIDO";
    }

    if (!passwordRegex.test(input.userPassword)) {
        errors.userPassword = "LA CONTRASEÑA DEBE TENER AL MENOS 8 CARACTERES, UNA MINÚSCULA, UNA MAYÚSCULA Y UN DÍGITO";
    }

    return errors;
};
