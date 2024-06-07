import { useState } from "react";
import axios from "axios";
import styles from "../register/Register.module.css";
import { validate } from "../../helpers/validateLogin";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const initialErrors = {
    userName: "",
    userPassword: "",
};

    const [formData, setFormData] = useState({
        userName: "",
        userPassword: "",
    });

    const [errors, setErrors] = useState(initialErrors);

    const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setErrors(validate({ ...formData, [name]: value })); 
};

const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    
    if (Object.keys(validationErrors).length === 0) {
        try {
            const { userName, userPassword } = formData;
            const response = await axios.post("http://localhost:3000/users/login", { userName, password: userPassword });
            dispatch(setUserData(response.data))
            navigate("/");
        } catch (error) {
            alert("Error al enviar iniciar sesión. Los datos pueden estár mal colocados");
        }
    } else {
        setErrors(validationErrors)
    }
};
    

    return (
    <div className={styles.background}>
    <div className={styles.div}>
        <div className={styles.form}>
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
            <label>Nombre de usuario</label>
            <input
                type="text"
                name="userName"
                placeholder="Nombre123"
                className={styles.inputCamp}
                value={formData.userName}
                onChange={handleChange}
            />
            {errors.userName && <span className={styles.error}>{errors.userName}</span>}
        </div>
            <div className={styles.inputs}>
                <label>Contraseña</label>
                <input
                type="password"
                name="userPassword"
                placeholder="******"
                className={styles.inputCamp}
                value={formData.userPassword}
                onChange={handleChange}
            />
            {errors.userPassword && <span className={styles.error}>{errors.userPassword}</span>}
        </div>
            <button type="submit" className={styles.submitButtonLogin}>Iniciar Sesión</button>
            <p className={styles.p}>Explora nuestra exclusiva colección de vehículos de alta gama y encuentra el auto de tus sueños.</p>
            </form>
        </div>
        <div>
            <img src="https://pbs.twimg.com/media/EFH-zJcXsAAqUYk.jpg" className={styles.img} alt="Imagen" />
        </div>
    </div>
    </div>
);
}

export default Login;
