import styles from "./AppointmentForm.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import validateAppointment from "../../helpers/validateAppointments";
import axios from "axios";
import { setUserAppointments } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

export default function AppointmentForm() {
    const userId = useSelector(state => state.user.userData.foundUser.id);
    const user = useSelector(state => state.user.userData.foundUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    
    const initialErrors = {
        date: "",
        time: "",
        service: "",
    };

    const [errors, setErrors] = useState(initialErrors);

    const [appointment, setAppointment] = useState({
        date: "",
        time: "",
        service: "",
        userId
    });

    useEffect(() => {
        if (user && user.id) {
            setAppointment(prevAppointment => ({
                ...prevAppointment,
                userId: user.id
            }));
        }
    }, [user]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const validationErrors = validateAppointment(appointment);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post("http://localhost:3000/appointments/schedule", appointment);
            dispatch(setUserAppointments(response.data));
            navigate("/appointments")
        } catch (error) {
            console.log("El error es el siguiente: ", error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAppointment({ ...appointment, [name]: value });
        setErrors(validateAppointment({ ...appointment, [name]: value }));
    };

    return (
        <div className={styles.div}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputs}>
                    <label>Fecha</label>
                    <input
                        type="date"
                        name="date"
                        className={styles.inputCamp}
                        value={appointment.date}
                        onChange={handleChange}
                    />
                    {errors.date && <span className={styles.error}>{errors.date}</span>}
                </div>
                <div className={styles.inputs}>
                    <label>Horario</label>
                    <select name="time"
                            value={appointment.time}
                            onChange={handleChange}
                            className={styles.inputCamp1}>
                        <option value="">Seleccionar</option>
                        <option value="08:00">08:00</option>
                        <option value="09:00">09:00</option>
                        <option value="10:00">10:00</option>
                        <option value="11:00">11:00</option>
                        <option value="12:00">12:00</option>
                        <option value="13:00">13:00</option>
                        <option value="14:00">14:00</option>
                        <option value="15:00">15:00</option>
                        <option value="16:00">16:00</option>
                        <option value="17:00">17:00</option>
                        <option value="18:00">18:00</option>
                        <option value="19:00">19:00</option>
                        <option value="20:00">20:00</option>
                    </select>
                    {errors.time && <span className={styles.error}>{errors.time}</span>}
                </div>
                <div className={styles.inputs}>
                    <label>Tipo de turno</label>
                    <select name="service"
                            value={appointment.service}
                            onChange={handleChange}
                            className={styles.inputCamp1}>
                        <option value="">Seleccionar</option>
                        <option value="Compra de vehículo">Compra de vehículo</option>
                        <option value="Prueba de manejo">Prueba de manejo</option>
                        <option value="Asesoramiento personalizado">Asesoramiento personalizado</option>
                        <option value="Servicio de mantenimiento">Servicio de mantenimiento</option>
                    </select>
                    {errors.service && <span className={styles.error}>{errors.service}</span>}
                </div>
                <button type="submit" className={styles.submitButton}>Agendar Turno</button>
                <p className={styles.p}>Explora nuestra exclusiva colección de vehículos de alta <br/> gama y encuentra el auto de tus sueños.</p>
            </form>
        </div>
    );
}
