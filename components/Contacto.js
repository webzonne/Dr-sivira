import React from 'react';
import contactoStyle from '../styles/Contacto.module.css';
import perfilContacto from '../assets/image/perfil-contacto.png';
import Image from 'next/image';
import bgContact from '../assets/image/logo-fondo-contacto.png';


export default function Contacto() {
    return (
        <>
            <div className={contactoStyle.contentContactoBg}
                style={{
                    background: 'linear-gradient(180deg, rgba(4, 84, 163, 0.12) 0%, rgba(4, 92, 164, 0.12) 100%)',
                    position: 'relative',
                }}
            >
                <div className={contactoStyle.contentContacto}
                    style={{
                        backgroundImage: `url(${bgContact.src})`,
                        width: '100%',
                        height: '100%',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center center',
                        backgroundSize: 'cover',
                        paddingBottom:'400px'
                    }}
                    id='Contacto'>
                    <h2>CONTÁCTAME PARA AGENDAR UNA CITA</h2>
                    <div className='container'>
                        <div className='row d-flex justify-content-between align-items-lg-center align-items-xl-start'>
                            <div className='col-md-12 col-lg-6 col-xl-6'>
                                <div className={contactoStyle.contentPerfilContacto}>
                                    <Image src={perfilContacto} alt='perfil-contacto' />
                                </div>
                            </div>
                            <div className='col-md-12 col-lg-6 col-xl-6'>
                                <div className={contactoStyle.contentFormContacto}>
                                    <form>
                                        <label>Nombre</label>
                                        <br />
                                        <input type='text' name='name'></input>
                                        <br />
                                        <label>Apellido</label>
                                        <br />
                                        <input type='text' name='apellido'></input>
                                        <br />
                                        <label>Telefono</label>
                                        <br />
                                        <input type='telf' name='telf'></input>
                                        <br />
                                        <label>Correo</label>
                                        <br />
                                        <input type='email' name='email'></input>
                                        <br />
                                        <label>Mensaje</label>
                                        <br />
                                        <textarea></textarea>
                                        <br />
                                        <div>
                                            <button>ENVIAR</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
