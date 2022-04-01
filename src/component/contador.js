import React from "react";
import '../estilos/contador.css'

export default function contador({ numClicks }) {
    return (
        <div className='contador'>
            {numClicks}
        </div>
    )
}