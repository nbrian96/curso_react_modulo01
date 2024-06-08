import React, { useState } from 'react';


const SignUp: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="form-container">
            <div className="form-row">
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre</label>
                        <div className="form-input">
                            <input type="text" id="nombre" />
                        </div>
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="apellido">Apellido</label>
                        <div className="form-input">
                            <input type="text" id="apellido" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="form-input">
                            <input type="email" id="email" />
                        </div>
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="telefono">Teléfono</label>
                        <div className="form-input">
                            <input type="tel" id="telefono" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <div className="form-input">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="password"
                                style={{ flex: 1 }}
                            />
                        </div>
                    </div>
                </div>
                <div className="form-column">
                    <div className="form-group">
                        <label htmlFor="confirm_password">Repetir Contraseña</label>
                        <div className="form-input">
                            <input
                                type={passwordVisible ? 'text' : 'password'}
                                id="confirm_password"
                                style={{ flex: 1 }}
                            />
                            <button className="buttonVisility" type="button" onClick={togglePasswordVisibility}>
                                {passwordVisible ? 'Ocultar' : 'Mostrar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit">Registrarse</button>
        </div>
    );
}

export default SignUp;
