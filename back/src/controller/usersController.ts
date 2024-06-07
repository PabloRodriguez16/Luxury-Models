import { Request, Response } from "express";
import { createUserService, getAllUsersServices, getUserByIdService, loginService } from "../service/userServices";
import userDto from "../dtos/usersDto";
import credentialsDto from "../dtos/credentialsDto";

export const getAllUsers = async (req: Request, res: Response) => {
    const allUsers = await getAllUsersServices();
    res.status(200).json(allUsers);
};

export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(Number(id));
        res.status(200).json(user);
    } catch (error) {
        res.status(404).send("El usuario no existe " + error);
    }
};

export const registerUser = async (req: Request, res: Response) => {
    const { name, email, birth_date, nDni, userName, userPassword } = req.body;
    const user: userDto = { name, email, birth_date, nDni };
    const credentials: credentialsDto = { userName, userPassword };

    try {

        const newUser = await createUserService(user, credentials);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send("the user could not be created: " + error);
    }
};

export const userLogin = async (req: Request, res: Response) => {
    const { userName, password } = req.body;
    try {
        const user = await loginService(userName, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).send("The user could not be logged in: " + error);
    }
};
