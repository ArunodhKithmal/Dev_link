import React from "react";
import "./LoginSignup.css";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/");
                setMessage('Login Successful');
            })
            .catch((error) => {
                setMessage('Login Unsuccessful');
                console.error(error);
            });
    }

    return (
        <>
            <div className="container-signin">
                <section className="wrapper">
                    <div className="heading">
                        <h1 className="text-signIn"><strong>Sign In</strong></h1>
                        
                        <Link to="/signup" className="signup-submit">Sign Up</Link>
                    </div>
                    <form onSubmit={signIn}>
                        <label className="input-label">Your email</label>
                        <div className="input-control">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                            />
                        </div>
                        <label className="input-label">Your password</label>
                        <div className="input-control">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-field"
                            />
                        </div>

                        <button type="submit" name="submit" className="input-submit" value="Sign In">
                            Sign In
                        </button>
                    </form>

                    {message && (
                        <p className={message === 'Login Successful' ? 'success-message' : 'error-message'}>{message}</p>
                    )}
                </section>
            </div>
        </>
    );
}

export default Login;
