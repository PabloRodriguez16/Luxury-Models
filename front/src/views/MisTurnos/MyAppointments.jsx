import { useEffect } from "react";
import Appointment from "../../components/primary/Appointment/Appointment";
import style from "./MyAppointments.module.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { setUserAppointments } from "../../redux/reducer";
import NoAppointments from "../noAppointments/NoAppointments";
import { Link } from "react-router-dom";

export default function MyAppointments() {
  const dispatch = useDispatch();
  const userId = useSelector(state => state.user.userData.foundUser.id);
  const appointments = useSelector(state => state.user.userAppointments);

  useEffect(() => {
    if (userId) {
      const fetchAppointments = async () => {
        try {
          const res = await axios.get(`http://localhost:3000/users/${userId}`);
          if (Array.isArray(res.data.appointments)) {
            dispatch(setUserAppointments(res.data.appointments));
          } else {
            console.error("La respuesta no es un array:", res.data.appointments);
          }
        } catch (error) {
          console.error("Error al obtener los turnos:", error);
        }
      };
      fetchAppointments();
    }
  }, [userId, dispatch]);

  const handleCancel = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/users/${userId}`);
      dispatch(setUserAppointments(res.data.appointments));
    } catch (error) {
      console.error("Error al actualizar los turnos:", error);
    }
  };

  if (!Array.isArray(appointments) || appointments.length === 0) {
    return <NoAppointments />;
  }

  return (
    <div id={style.appointmentsContent}>
      <Link to="/AppointmentForm"><button className={style.button}>Crear Turno</button></Link>
      <br/>
      <h1 className={style.title}>TUS TURNOS</h1>
      <div className={style.content}>
        {appointments.slice().reverse().map((turno, index) => {
          let fecha = turno.date.split("T")[0];
          return (
            <Appointment 
              key={index} 
              id={turno.id} 
              date={fecha} 
              time={turno.time} 
              service={turno.service} 
              status={turno.status} 
              onCancel={handleCancel}
            />
          );
        })}
      </div>
    </div>
  );
}
