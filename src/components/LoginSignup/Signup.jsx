import React from "react";
import "./LoginSignup.css";
import { useState } from "react";
import { auth, app } from "../../firebase"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate('');

    const signUp = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                navigate("/login")
                const user = userCredential.user;
                //console.log (userCredential)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                if (errorCode === "auth/email-already-in-use") {
                    setErrorMessage("User already exists. Please sign in.");
                } else {
                    setErrorMessage(errorMessage);
                }
            });

    }

    return (
        <>
            <div className="container-signin">
                <section className="wrapper-1">
                    <div className="heading">
                        <h1 className="text-signup"><strong>Create a DevLink Account</strong></h1>
                    </div>
                    <form onSubmit={signUp}>
                        <div className="input-label-container">
                            <label className="input-label-signup">Your Name*</label>
                            <div className="input-control-signup">
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    class="input-field"
                                />
                            </div>
                        </div>
                        <div className="input-label-container">
                            <label className="input-label-signup">Your email*</label>
                            <div className="input-control-signup">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    class="input-field"
                                />
                            </div>
                        </div>
                        <div className="input-label-container">
                            <label className="input-label-signup">Your password*</label>
                            <div className="input-control-signup">
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    class="input-field"
                                />
                            </div>
                        </div>
                        <div className="input-label-container">
                            <label className="input-label-signup">Confirm password*</label>
                            <div className="input-control-signup">
                                <input
                                    type="password"
                                    placeholder="Re enter your password"
                                    class="input-field"
                                />
                            </div>
                        </div>

                        <button type="submit" name="submit" className="input-submit" value="Sign In">
                            Create
                        </button>
                    </form>
                    {errorMessage && (
                        <p className="error-message">{errorMessage}</p>
                    )}
                </section>
            </div>
        </>
    );
}
export default Signup;