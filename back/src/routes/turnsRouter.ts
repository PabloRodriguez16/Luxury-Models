import { Router } from "express"
import { allAppointments, cancelAppointment, createAppointment, expiredAppointment, oneAppointment } from "../controller/appointmentsController";
import { serviceAppointment } from "../middlewares/appointmentsMiddlewares";

const appointmentRouter = Router();

appointmentRouter.get("/", allAppointments);
appointmentRouter.get("/appointment", oneAppointment);
appointmentRouter.post("/schedule", serviceAppointment ,createAppointment);
appointmentRouter.put("/expired", expiredAppointment);
appointmentRouter.put("/", cancelAppointment);

export default appointmentRouter