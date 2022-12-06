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

export default function Info() {
    const [boxesmore1, setboxesmore1] = useState(false);
    // BOXES 1
    const boxesMore1 = () => {
        setboxesmore1(true)
    }
    const boxesClose1 = () =>{
        setboxesmore1(false)
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo.</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button onClick={boxesMore1}>Ver mas..</button>
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
                                    <h4>Abordaje inferior de cadera</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo.</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button>Ver mas..</button>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo.</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button>Ver mas..</button>
                                </div>
                            </div>
                        </div>
                        {/* CUATRO */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage4} alt='necrosisavascular' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Necrosisavascular</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo.</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button>Ver mas..</button>
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
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo.</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button>Ver mas..</button>
                                </div>
                            </div>
                        </div>
                        {/* SEIS */}
                        <div className='col-lg-6 col-xl-4'>
                            <div className={infoStyle.boxes}>
                                <div className={infoStyle.contentImagenBox}>
                                    <Image src={boxesImage6} alt='necrosisavascular' />
                                </div>
                                <div className={infoStyle.titleBox}>
                                    <h4>Necrosisavascular</h4>
                                </div>
                                <div className={infoStyle.descriptionBox}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo.</p>
                                </div>
                                <div className={infoStyle.buttonBox}>
                                    <button>Ver mas..</button>
                                </div>
                            </div>
                        </div>
                        {/* ALL END */}
                    </div>
                    {/* BOXES MORE 1 */}
                    { boxesmore1 ? <BoxesMore1
                    boxesClose1={boxesClose1}
                    /> :null}
                    {/* BOXES MORE 2 */}
                    
                </div>
            </div>
        </>
    )
}
