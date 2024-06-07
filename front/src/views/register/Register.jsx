import { useState } from "react";
import axios from "axios";
import styles from "./Register.module.css";
import { validate } from "../../helpers/validateRegister";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; // Importamos sweetalert2

function Register() {
  const navigate = useNavigate();

  const initialErrors = {
    name: "",
    email: "",
    birth_date: "",
    nDni: "",
    userName: "",
    userPassword: "",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birth_date: "",
    nDni: "",
    userName: "",
    userPassword: "",
  });

  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    setErrors(validate({ ...formData, [name]: value }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post("http://localhost:3000/users/register", formData);
        console.log(response);
        setFormData({
          name: "",
          email: "",
          birth_date: "",
          nDni: "",
          userName: "",
          userPassword: "",
        });
        navigate("/login");
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Puede que el usuario ya exista...',
          icon: 'error',
          iconColor: '#911924',
          background: '#222222',
          showCancelButton: true,
          confirmButtonText: 'Intentar de nuevo',
          cancelButtonText: 'Ir a login',
          cancelButtonColor: '#911924'
        }).then((result) => {
          if (result.isConfirmed) {
            // User clicked 'Intentar de nuevo'
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            navigate('/login');
          }
        });
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.div}>
        <div className={styles.form}>
          <h2 className={styles.title}>Regístrate</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputs}>
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                className={styles.inputCamp}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.inputs}>
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="example@mail.com"
                className={styles.inputCamp}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className={styles.error}>{errors.email}</span>}
            </div>
            <div className={styles.inputs}>
              <label>Fecha de nacimiento</label>
              <input
                type="date"
                name="birth_date"
                id={styles.inputDate}
                value={formData.birth_date}
                onChange={handleChange}
              />
              {errors.birth_date && <span className={styles.error}>{errors.birth_date}</span>}
            </div>
            <div className={styles.inputs}>
              <label>Número de documento</label>
              <input
                type="text"
                name="nDni"
                placeholder="12345678"
                className={styles.inputCamp}
                value={formData.nDni}
                onChange={handleChange}
              />
              {errors.nDni && <span className={styles.error}>{errors.nDni}</span>}
            </div>
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
            <button type="submit" className={styles.submitButton}>Registrarse</button>
          </form>
        </div>
        <div>
          <img src="https://pbs.twimg.com/media/EFH-zJcXsAAqUYk.jpg" className={styles.img} alt="Imagen" />
        </div>
      </div>
    </div>
  );
}

export default Register;
