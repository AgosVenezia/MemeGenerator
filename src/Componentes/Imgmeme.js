/* eslint-disable no-lone-blocks */
/*
useState es un hook de React que permite a los componentes de React tener un estado interno. El estado de un componente es cualquier dato que pueda cambiar durante la vida útil del componente. Con useState, se puede declarar una variable de estado en un componente de React y modificarla a través de funciones que actualizan su valor. Además, cuando el valor de la variable de estado cambia, React vuelve a renderizar el componente, actualizando así la interfaz de usuario.
*/

import React, {useState} from 'react';
import html2canvas from 'html2canvas';

const Imgmeme = () => {

    const [textomeme, setTextomeme] = useState();
    const [imgMeme, setImgMeme] = useState();

    const textmeme = (e) =>{
        setTextomeme(e.target.value);
        console.log(e.target.value);
    }

    const seleccionarImg = (e) => {
        setImgMeme(e.target.value);
        console.log(e.target.value);
    }

    {/*Cuando llamamos al onChange del cambio del usuario (se activa el evento), activa el seleccionarImg y seleccionarImg llama a la función setImgMeme, encargada de manipular a la variable imgMeme, y le asigna el valor que viene por el e.target.value.*/}

    const descarga = (e) => {
      {/*html2canvas(document.body).then(function(canvas) {
        document.body.appendChild(canvas);*/}
      html2canvas(document.querySelector("#exportar")).then(function(canvas) {
        let img = canvas.toDataURL("memesImg/png");
        let link = document.createElement("a");
        link.download = "memepropio.png";
        link.href = img;
        link.click();
    });
    }

  return (
    <div>
        <h1 className='mt-5 mb-3 text-light '>Editá tu propio meme</h1>

        <h2 className='mt-2 mb-3'>Escribí tu frase</h2>
        <input onChange={textmeme} className="form-control w-25 m-auto d-block" type="text" placeholder="Pone tu frase" name="meme"/>
        {/*El estado guarda el último cambio y el evento recolecta el cambio*/}
        
        <h2 className='mt-2 mb-3'>Elegí la imagen para tu meme</h2>
        <select onChange={seleccionarImg} className="form-select form-select-lg mb-3 w-50 m-auto" aria-label="Default select example">
          <option>Selecciona una imagen</option>
          <option value={6}>Futurama</option>
          <option value={7}>Bob Esponja</option>
          <option value={8}>Señora</option>
          <option value={9}>Calamardo</option>
        </select>   
        
        <figure className='text-center' id='exportar'>
          <p className='mt-5 w-100 px-30 position-absolute top-50 start-30 h1 text-center'>{textomeme}</p>  
          <img src={`../memesImg/${imgMeme}.png`} className='figure-img mt-3 d-block m-auto' alt='meme'/>
        </figure>

        <button onClick={descarga} type='button' className='btn btn-primary mt-5 mb-4'>Descargar meme</button>
   
        </div>
  )
}

export default Imgmeme;