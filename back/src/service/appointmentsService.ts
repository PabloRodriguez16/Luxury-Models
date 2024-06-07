import { AppDataSource } from "../config/data-source";
import appointmentsDto from "../dtos/appointmentsDto";
import { Appointment } from "../entities/Appointment";
import { User } from "../entities/User";
const AppointmentModel = AppDataSource.getRepository(Appointment)
const userRepository = AppDataSource.getRepository(User);


export const getAllAppointmentsService = async (): Promise<Appointment[]>=> {
    const allAppointments = await AppointmentModel.find()
    return allAppointments;
}

export const getAppointmentById = async (appointmentId:number): Promise<object| undefined> => {
    const appointment = await AppointmentModel.findOne({where: {id: appointmentId}})
    if (appointment) return appointment;
};

export const createAppointmentService = async (appointment: appointmentsDto, userId: number)=> {
    const {date, time, service} = appointment;

    const status = "Active";

    try {
        const user = await userRepository.findOne({ where: { id: userId } });

        if (!user) {
            throw new Error (`There is no user with the id: ${userId}`)
        }

        const newAppointment = AppointmentModel.create({
            date: date,
            time: time,
            status: status,
            service: service,
            user: user
        });
        await AppointmentModel.save(newAppointment);
        return newAppointment;
    } catch (error) {
        throw new Error(`There was an error creating the appointment: ${error}`);
    }
};

export const cancelAppointmentService = async (appointmentId:number): Promise<Appointment> => {
    const appointment = await AppointmentModel.findOne({where: {id: appointmentId}})
    if (appointment) {
        appointment.status= "Cancelled";
        await AppointmentModel.save(appointment)
        return appointment;
    } else throw new Error ("There was an error in the service of cancelAppointment")
    
};

export const expiredAppointmentService = async (appointmentId:number) => {
    const appointment = await AppointmentModel.findOne({where: {id: appointmentId}})
    if (appointment){
        appointment.status = "Expired";
        await AppointmentModel.save(appointment)
        return appointment;
    } else throw new Error ("There was an error in the service of expiredAppointment")
}