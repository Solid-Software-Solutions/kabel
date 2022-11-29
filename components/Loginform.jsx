import styles from '../styles/Loginform.module.css'
import React, {useState } from 'react';

export default function Loginform(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Email: "  + email + 
                    " Password: " + password );
        setEmail("");
        setPassword("");
    };
  return (
    <div >
      <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
            <div >
                <form className="form" onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label>Correo Electronico *</label>
                        <input
                            required
                            type="email"
                            maxLength="255"
                            className={styles.textInput}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Contraseña</label>
                        <input
                            required
                            type="password"
                            maxLength="255"
                            className={styles.textInput}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.fieldSummit}>
                        <button
                            type="submit"
                            className={styles.SummitButton}
                        >
                            Iniciar Sesión
                        </button >
                    </div>
                    <hr className={styles.line} />
                    <div className={styles.fieldRegister}>
                        <div>
                            ¿No tienes cuenta?
                        </div>

                        <button
                            className={styles.RegisterButton}
                        >
                            Registrarme
                        </button >
                    </div>
                       
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}