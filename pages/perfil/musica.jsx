import React from "react";
import { IoPlay } from "react-icons/io5";
export default function Musica({ user }){
    return(
        <section className="dashboard__content">
            <h2>Bienvenido {user ? user.email : ""}</h2>
            <h1>Música</h1>
            <section className="dashboard__card--main">
                <h2>Reproducción aleatoria</h2>

                <button className="dashboard__card--button">
                    <IoPlay/>
                </button>
            </section>
        </section>
    )
}