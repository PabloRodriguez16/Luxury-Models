import credentialsDto from "../dtos/credentialsDto";
import userDto from "../dtos/usersDto";
import { createCredentials } from "./credentialsServices";
import { User } from "../entities/User";
import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credential";

const userRepository = AppDataSource.getRepository(User);
const credentialRepository = AppDataSource.getRepository(Credential);

export const getAllUsersServices = async (): Promise<User[]> => {
    const users = await userRepository.find({ relations: ["appointments"] });
    return users;
};

export const getUserByIdService = async (userId: number | null): Promise<User | undefined> => {
    if (userId === null) {
        throw new Error("invalid id");
    }
    const user = await userRepository.findOne({ where: { id: userId }, relations: ["appointments"] });
    if (user) {
        return user;
    } else {
        throw new Error("User not found");
    }
};

export const createUserService = async (user: userDto, credentialsUser: credentialsDto): Promise<User> => {
    const { name, email, birth_date, nDni } = user;
    const { userName, userPassword } = credentialsUser;

    // const dniNIsRepeated = await userRepository.findOne({ where: { nDni: nDni } });
    // if (dniNIsRepeated) throw new Error("El numero de Dni ya existe");

    const userIsRepeated = await credentialRepository.findOne({ where: { username: userName } });
    if (userIsRepeated) throw new Error("El usuario ya existe");

    const credential = await createCredentials({ userName, userPassword });

    const newUser = userRepository.create({
        name: name,
        email: email,
        birth_date: birth_date,
        nDni: nDni,
        credential: { id: credential },
    });

    await userRepository.save(newUser);

    return newUser;
};

export const loginService = async (userName: string, userPassword: string) => {
    try {
        const foundedCredential = await credentialRepository.findOne({ where: { username: userName, password: userPassword } });

        if (foundedCredential) {
            const foundUser = await userRepository.findOne({
                where: {
                    credential: foundedCredential
                }
            });

            if (foundUser) {
                return { login: true, foundUser };
            } else {
                throw new Error("El usuario correspondiente a estas credenciales no existe.");
            }
        } else {
            throw new Error("Credenciales inválidas. El usuario no está registrado.");
        }
    } catch (error) {
        throw new Error("Error al intentar iniciar sesión: " + error);
    }
};
