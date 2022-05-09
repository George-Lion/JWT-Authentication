import React, { useContext } from "react";
import { Context } from "../store/appContext";
/* import "../../styles/home.css"; */

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://wallpapercave.com/wp/wp2141398.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://wallpaperaccess.com/full/1657861.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.itl.cat/pngfile/big/327-3275892_web-development-application-design-developer.png" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};