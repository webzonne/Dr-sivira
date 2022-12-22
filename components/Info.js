import React, { useState } from 'react';
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage1 from '../assets/image/boxesImage1.jpg';
import boxesImage2 from '../assets/image/boxesImage2.jpg';
import boxesImage3 from '../assets/image/boxesImage3.jpg';
import boxesImage4 from '../assets/image/boxesImage4.jpg';
import boxesImage5 from '../assets/image/boxesImage5.jpg';
import boxesImage6 from '../assets/image/boxesImage6.jpg';
import BoxesMore1 from './BoxesMore1';
import BoxesMore2 from './BoxesMore2';
import BoxesMore3 from './BoxesMore3';
import BoxesMore4 from './BoxesMore4';
import BoxesMore5 from './BoxesMore5';
import BoxesMore6 from './BoxesMore6';

export default function Info() {
    const [boxesmore1, setboxesmore1] = useState(false);
    const [boxesmore2, setboxesmore2] = useState(false);
    const [boxesmore3, setboxesmore3] = useState(false);
    const [boxesmore4, setboxesmore4] = useState(false);
    const [boxesmore5, setboxesmore5] = useState(false);
    const [boxesmore6, setboxesmore6] = useState(false);
    // BOXES 1
    const boxesMore1 = () => {
        setboxesmore1(true)
    }
    const boxesClose1 = () => {
        setboxesmore1(false)
    }
    // BOXES 2
    const boxesMore2 = () => {
        setboxesmore2(true)
    }
    const boxesClose2 = () => {
        setboxesmore2(false)
    }
    // BOXES 3
    const boxesMore3 = () => {
        setboxesmore3(true)
    }
    const boxesClose3 = () => {
        setboxesmore3(false)
    }
     // BOXES 4
     const boxesMore4 = () => {
        setboxesmore4(true)
    }
    const boxesClose4 = () => {
        setboxesmore4(false)
    }
     // BOXES 5
     const boxesMore5 = () => {
        setboxesmore5(true)
    }
    const boxesClose5 = () => {
        setboxesmore5(false)
    }
     // BOXES 6
     const boxesMore6 = () => {
        setboxesmore6(true)
    }
    const boxesClose6 = () => {
        setboxesmore6(false)
    }
    return (

        <>
            <div className={infoStyle.contentInfo}>
                <div className='container'>
                    <div className={infoStyle.titleInfo}>
                        <h2>No te acostumbres al DOLOR, porque vivir
                            con DOLOR, no es realmente vivir
                        </h2>
                    </div>
                    <div className='row d-flex justify-content-md-center'>
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage1} alt='imagen-desgaste-articular' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Desgaste articular</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>Muchas veces tener <strong>DOLOR</strong> en nuestras articulares, no se debe a caídas, accidentes, golpes etc. Existen otros factores que pueden producirlo, como es el caso del <strong>DESGASTE ARTICULAR</strong>, el cual es una patología degenerativa de los huesos que comienza por la...</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore1}>Ver más..</button>
                                </div>
                            </div>
                        </div>
                        {/* DOS */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage2} alt='Abordaje-inferior-de-cadera' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Abordaje anterior de cadera</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>El abordaje anterior de cadera es una técnica qué ha ganado más popularidad dentro de los círculos de cirujanos ortopedistas, principalmente en los Estados Unidos, Europa y otras partes del mundo. Dentro de las ventajas qué ofrece este tipo de técnica, se pueden...</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore2}>Ver más..</button>
                                </div>
                            </div>
                        </div>
                        {/* TRES */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage3} alt='Gonartrosis' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Gonartrosis (artrosis de rodilla)</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>La Gonartrosis es un término que se refiere a la enfermedad degenerativa de la articulación de la rodilla; va ligada al término de osteoartritis, un concepto más general que involucra desgaste articular en el cuerpo humano. En la gonartrosis, el cartílago...</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore3}>Ver más..</button>
                                </div>
                            </div>
                        </div>
                        {/* CUATRO */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage4} alt='Artroplastia total de cadera' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Artroplastia total de cadera</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>La articulación de la cadera es una gran articulación. la cual se compone de dos huesos principales:  una “esfera” en la parte superior del fémur (hueso del muslo) y la cavidad de la pelvis (el acetábulo).<br/>
                                    <strong>¿Pero que es un reemplazo total de cadera?</strong>...</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore4}>Ver más..</button>
                                </div>
                            </div>
                        </div>
                        {/* CINCO */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage5} alt='Artoplastia' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Artoplastia total de rodilla</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                <p>La artroplastia total de rodilla, también conocido como reemplazo total de rodilla, es una cirugía ortopédica con una tasa de éxitos muy alta, los pacientes consiguen resultados de buenos a excelentes, el cual produce una gran satisfacción al paciente...</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore5}>Ver más..</button>
                                </div>
                            </div>
                        </div>
                        {/* SEIS */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage6} alt='Necrosis-Avascular' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Necrosis Avascular</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                <p>La Necrosis Avascular es una enfermedad en la que el hueso de la cabeza femoral "muere" a consecuencia de una aliteración en su irrigación sanguínea. Este tipo de enfermedad provoca gran dolor, ya que es justamente la cabeza femoral, la parte redondeada del fémur...</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore6}>Ver más..</button>
                                </div>
                            </div>
                        </div>
                        {/* ALL END */}
                    </div>
                    {/* BOXES MORE 1 */}
                    {boxesmore1 ? <BoxesMore1
                        boxesClose1={boxesClose1}
                    /> : null}
                    {/* BOXES MORE 2 */}
                    {boxesmore2 ? <BoxesMore2
                        boxesClose2={boxesClose2}
                    /> : null}
                    {/* BOXES MORE 3 */}
                    {boxesmore3 ? <BoxesMore3
                        boxesClose3={boxesClose3}
                    /> : null}
                     {/* BOXES MORE 4 */}
                     {boxesmore4 ? <BoxesMore4
                        boxesClose4={boxesClose4}
                    /> : null}
                      {/* BOXES MORE 5 */}
                      {boxesmore5 ? <BoxesMore5
                        boxesClose5={boxesClose5}
                    /> : null}
                      {/* BOXES MORE 6 */}
                      {boxesmore6 ? <BoxesMore6
                        boxesClose6={boxesClose6}
                    /> : null}
                </div>
            </div>
        </>
    )
}
