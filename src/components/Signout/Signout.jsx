import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react"; // Import css for styling
import { ClipLoader } from "react-spinners"; // Import the spinner component
import "./Signout.css"

const Logout = () => {
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    useEffect(() => {
        // Function to handle sign-out
        const handleSignOut = async () => {
            setLoading(true); // Set loading to true while sign-out is in progress
            try {
                await auth.signOut();
                setMessage("Logout Successful");
                navigate("/"); // Redirect to the home page or any other page after logout
            } catch (error) {
                setMessage("Logout Unsuccessful");
                console.error(error);
            } finally {
                setLoading(false); // Set loading back to false after sign-out completes
            }
        };

        handleSignOut(); // Call the sign-out function
    }, [navigate]);

    return (
        <div className="logout-container">
            {/* Conditional rendering based on the loading state */}
            {loading ? (
                <div className="spinner">
                    <ClipLoader
                        css={css`
                            display: block;
                            margin: 0 auto;
                        `} 
                        size={50}
                        color={"#123abc"}
                        loading={loading}
                    />
                </div>
            ) : (
                <p>{message}</p>
            )}
        </div>
    );
};

export default Logout;
