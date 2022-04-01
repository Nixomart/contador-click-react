import './App.css';
import click from './img/clickk.jpg';
import Boton from './component/boton';
import Contador from './component/contador';
import { useState } from 'react';

function App() {

  const [contador, setContador] = useState(0)

  const manipuleClick = () => {
    setContador(contador + 1);
  }

  const resetContador = () => {
    setContador(0)
  }

  return (
    <div className="App">
      <div className='imagen-contenedor'>
        <img src={click} className='imagen-top' alt='imagen' />
      </div>
      <div className='contenedor-boton'>
        <Contador numClicks={contador} />
        <Boton texto='Click' botonClick={true} manipuleClick={manipuleClick} />
        <Boton texto='Reiniciar' botonClick={false} manipuleClick={resetContador} />
      </div>
    </div>
  );
}

export default App;
