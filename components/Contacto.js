import React from 'react';
import contactoStyle from '../styles/Contacto.module.css';
import perfilContacto from '../assets/image/perfil-contacto.png';
import Image from 'next/image';


export default function Contacto() {
    return (
        <>
            <div className={contactoStyle.contentContacto}>
                <h2>CONTÁCTAME PARA AGENDAR UNA CITA</h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className={contactoStyle.contentPerfilContacto}>
                                <Image src={perfilContacto} alt='perfil-contacto' />
                            </div>
                        </div>
                        <div className='col-xl-6'>
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
        </>
    )
}
