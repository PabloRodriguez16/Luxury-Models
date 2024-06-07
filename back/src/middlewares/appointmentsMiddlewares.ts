import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../config/data-source";
import { Appointment } from "../entities/Appointment";
const AppointmentModel = AppDataSource.getRepository(Appointment)

export const serviceAppointment = async (req: Request, res:Response, next:NextFunction) => {
    const {service} = req.body;
    try {
        if(service === "Compra de vehículo" || service === "Prueba de manejo" || 
        service === "Asesoramiento personalizado" || service === "Servicio de mantenimiento") next();
        else res.status(401).send("El servicio no existe")
    } catch (error) {
        res.status(401).send("El servicio no existe")
    }
}

