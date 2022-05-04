import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";
import "../../styles/index.css";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-black">
			<div className="container">
				<Link to="/" className="" style={{ "color": "black" }}>
					<span className="navbar-brand mb-0 h1 text-light">HOME</span>
				</Link>
				{store.user == null ? <div className="ml-auto">
					<Link to="/login" className="me-3">
						<button className="btn btn-light">Login</button>
					</Link>
					<Link to="/register">
						<button className="btn btn-light">Sign up</button>
					</Link>
				</div> : <div className="ml-auto">
					<Link to="/">
						<button className="btn btn-light" onClick={() => {
							localStorage.clear()
							actions.setStoreUser(null)
						}}>Log out</button>
					</Link></div>}
			</div>
		</nav>
	);
};
