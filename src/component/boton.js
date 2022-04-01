import React from "react";
import '../estilos/boton.css'

export default function boton({ texto, botonClick, manipuleClick }) {
    return (
        <button className={botonClick ? 'button-click' : 'button-reset'}
            onClick={manipuleClick}>{texto}</button>
    )
}