import styles from '../styles/Registerform.module.css'
import React, {useState } from 'react';

export default function Registerform(){
    const [name, setName] = useState("");
    const [middle, setMiddle] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name: "  + name + 
                    " MiddleName: "  + middle + 
                    " Email: "  + email + 
                    " Password: " + password );
        setName("");
        setMiddle("");
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
                        <label>Nombre *</label>
                        <input
                            required
                            type="text"
                            maxLength="255"
                            className={styles.textInput}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.field}>
                        <label>Apellido(s) *</label>
                        <input
                            required
                            type="text"
                            maxLength="255"
                            className={styles.textInput}
                            value={middle}
                            onChange={(e) => setMiddle(e.target.value)}
                        />
                    </div>
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