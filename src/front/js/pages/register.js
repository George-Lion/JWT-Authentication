import React, { useState } from "react";

export const Register = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);

    const sendUserInfo = async () => {
        if (user.email != null && user.email.trim() != "") {
            setError(null)
            const response = await fetch("https://3001-4geeksacade-reactflaskh-1n3r28z34jr.ws-eu43.gitpod.io/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
            const data = await response.json();
        } else {
            setError("Bad info");
        }

    }

    return <div className="text-center mt-5">
        <h1 className="m-5">Sign Up</h1>
        <h5 className="m-5">please enter the following data</h5>
        <div className="">
            <h5 htmlFor="email" className="m-2">Email</h5>
            <input id="email" className="col-2 mb-3" onChange={(e) => setUser({ ...user, email: e.target.value })}></input>
            <h5 htmlFor="password" className="">Password</h5>
            <input id="password" className="col-2" onChange={(e) => setUser({ ...user, password: e.target.value })}></input><br />
            <button className="col-1 mt-3 btn-dark" onClick={() => sendUserInfo()}>Sign up</button>
        </div>
        {error != null ? <h3 className="text-danger">{error}</h3> : null}

    </div>
}