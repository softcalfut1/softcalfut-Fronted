import React, { ChangeEvent, FormEvent, useState } from 'react';

const LoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        loginName: '',
        loginPassword: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = (event.target as HTMLInputElement);
        setLoginForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Submit the login form to the server
    };

    return (
        <div className="container w-50 mt-5">
            {/* Pills navs */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active"
                        id="tab-login"
                        data-mdb-toggle="pill"
                        href="#pills-login"
                        role="tab"
                        aria-controls="pills-login"
                        aria-selected="true" >
                        Login
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a
                        className="nav-link"
                        id="tab-register"
                        data-mdb-toggle="pill"
                        href="#pills-register"
                        role="tab"
                        aria-controls="pills-register"
                        aria-selected="false"
                    >
                        Register
                    </a>
                </li>
            </ul>

            {/* Pills content */}
            <div className="tab-content">
                <div
                    className="tab-pane fade show active"
                    id="pills-login"
                    role="tabpanel"
                    aria-labelledby="tab-login"
                >
                    <form onSubmit={handleSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="loginName">
                                Nombre de usuario
                            </label>
                            <input
                                type="text"
                                name="loginName"
                                id="loginName"
                                className="form-control"
                                value={loginForm.loginName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="loginPassword">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                name="loginPassword"
                                id="loginPassword"
                                className="form-control"
                                value={loginForm.loginPassword}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit button */}
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                            Iniciar sesion
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;