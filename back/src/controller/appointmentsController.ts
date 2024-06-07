import { Request, Response } from "express";
import { cancelAppointmentService, createAppointmentService, expiredAppointmentService, getAllAppointmentsService, getAppointmentById } from "../service/appointmentsService";

export const allAppointments =  async (req:Request, res:Response) => {
    const allAppointments = await getAllAppointmentsService();
    res.status(200).json(allAppointments);
}

export const oneAppointment =  async (req:Request, res:Response) => {
    const {id} = req.body;
    const appointment = await getAppointmentById(id);
    res.status(200).json(appointment);
}

export const createAppointment = async (req:Request, res:Response) => {
    const {date, time, service ,userId} = req.body;
    const userID = userId
    const newAppointment = await createAppointmentService({date, time, service}, userID);
    res.status(201).json(newAppointment);
}

export const cancelAppointment = async (req: Request, res: Response) => {

    const {id} = req.body
    
    try {
        const cancelledAppointment = await cancelAppointmentService(Number(id));
        res.status(200).send("Tu cita ha sido cancelada");
    } catch (error) {
        res.status(404).send( "error in the controller" );
    }
}

export const expiredAppointment = async (req: Request, res: Response) => {
    const {id} = req.body;
    
    try {
        const expiredAppointment = await expiredAppointmentService(Number(id));
        console.log("ID of the appointment to expire:", id);
        res.status(200).json(expiredAppointment);
    } catch (error) {
        res.status(404).send( "Error in the controller" )
    }
}
