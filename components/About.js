import React, {use, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import aboutStyle from '../styles/About.module.css';
import Image from 'next/image';
import perfilAbout from '../assets/image/perfil-conocenos.png';
import comillasAbout from '../assets/image/comillas-about.png';


export default function About() {
    const variable = `${process.env.NEXT_PUBLIC_SMTP_USER}`
    console.log(variable)
    return (
        <>
            <div className={aboutStyle.contentAbout} id='About'>
                <div className={aboutStyle.contentTitle}>
                    <h2>QUIEN SOY</h2>
                    <div className='container'>
                        <div className={aboutStyle.filaAbout}>
                            <div className='row'>
                                <div className='col-md-12 col-xl-6 ps-0'>
                                    <div className={aboutStyle.contentPerfilAbout}>
                                        <Image  src={perfilAbout} alt='perfil-about' />
                                    </div>
                                </div>
                                <div className='col-md-12 col-xl-6'>
                                    <div className={aboutStyle.cuadroTexto}>
                                        <div className={aboutStyle.contentComillas}>
                                            <Image src={comillasAbout} alt='comillas-about' />
                                        </div>
                                        <h4>Dr. Jose Manuel Sivira</h4>
                                        <div className={aboutStyle.lineAzul}></div>
                                        <p>Soy el Dr. José Manuel Sivira Médico Venezolano. Egresado de la Universidad de los Andes y con Fellow en Cirugía de reemplazos articulares en la Universidad Central de Venezuela. Especialista en el manejo de pacientes con desgaste articular (artrosis), y todas las patologías articulares asociadas que conlleven a la colocación de implantes en rodilla y cadera. Mi mayor compromiso es el cuidado y el bienestar de todos mis pacientes, basándome en técnicas de vanguardia y última generación, en reemplazo articular de cadera y rodilla con el objetivo de dar solución a enfermedades dolorosas. Asegurando la reinserción de mis pacientes a sus actividades cotidiana de la forma más rápida y segura.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
