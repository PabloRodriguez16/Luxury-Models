export const validate = (input) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const dniRegex = /^\d{8}$/;

    if (!input.name) {
        errors.name = "EL NOMBRE ES REQUERIDO";
    }

    if (!input.email || !emailRegex.test(input.email)) {
        errors.email = "EL EMAIL ES INVÁLIDO";
    }

    if (!input.birth_date) {
        errors.birth_date = "LA FECHA DE NACIMIENTO ES REQUERIDA";
    } else {
        const birthDate = new Date(input.birth_date);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        const dayDifference = today.getDate() - birthDate.getDate();

        if (age < 18 || (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))) {
            errors.birth_date = "DEBES SER MAYOR DE EDAD";
        }
    }

    if (!input.nDni || !dniRegex.test(input.nDni)) {
        errors.nDni = "EL NÚMERO DE DOCUMENTO ES INVÁLIDO";
    }

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
