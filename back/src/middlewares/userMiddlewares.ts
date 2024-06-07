import { Request, Response, NextFunction } from "express";
import { Credential } from "../entities/Credential";
import { AppDataSource } from "../config/data-source";
const credentialRepository = AppDataSource.getRepository(Credential)

export const isRegistered = async (req: Request, res:Response, next:NextFunction) => {
    const {name, email, birth_date, nDni, userName, userPassword } = req.body;

        if (!name || !email || !birth_date || !nDni || !userName || !userPassword) res.status(401).send("Faltan datos")
        const isRegistered = await credentialRepository.findOne({where: {username: userName, password: userPassword}})
        if(!isRegistered) next()
            else res.status(401).send("El usuario ya se encuentra registrado")

}

