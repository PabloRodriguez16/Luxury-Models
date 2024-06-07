import credentialsDto from "../dtos/credentialsDto"
import { Credential } from "../entities/Credential";
import { AppDataSource } from "../config/data-source";



const credentialRepository = AppDataSource.getRepository(Credential);
export const createCredentials = async (credentialsUser: credentialsDto): Promise<number> => {
    const { userName, userPassword } = credentialsUser;

    const isRegistered = await credentialRepository.findOne({where: {username: userName, password: userPassword}})
    if(!isRegistered) {
        const newCredential = credentialRepository.create({
            username: userName,
            password: userPassword
        });
        const savedCredential = await credentialRepository.save(newCredential);
        return savedCredential.id;
    }
    throw new Error ("The user is already registered")
};
