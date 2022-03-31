import React from "react";

export default function boton({ texto, botonClick, manipuleClick }) {
    return (
        <button className={botonClick ? 'boton-click' : 'boton-reset'}
            onClick={manipuleClick}>{texto}</button>
    )
}