import React, { useState } from 'react';
import contactoStyle from '../styles/Contacto.module.css';
import perfilContacto from '../assets/image/perfil-contacto.png';
import Image from 'next/image';
import bgContact from '../assets/image/logo-fondo-contacto.png';


export default function Contacto() {
    const [inputs, setInputs] = useState({
        name: '',
        lastname: '',
        mobile: '',
        email: '',
        message: '',
    })
    const [form, setForm] = useState('')

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }

    // RUDO
    const onSubmitForm = async (e) => {
        e.preventDefault()

        if (inputs.name && inputs.lastname && inputs.mobile && inputs.email && inputs.message) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch(`api/contact`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(inputs),
                })

                const { error } = await res.json()
                const er = error
                console.log(er)
                if (error) {
                    setForm({
                        state: 'error',
                        message: error,
                    })
                    return
                }
                setForm({
                    state: 'success',
                    message: 'Your message was sent successfully.',
                })
                setInput({
                    name: '',
                    lastname: '',
                    mobile: '',
                    email: '',
                    message: '',
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Something went wrong',
                })
            }
        }
    }
    // TERMINA RUDO 
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
                                    <form onSubmit={(e) => onSubmitForm(e)}>
                                        <label>Nombre</label>
                                        <br />
                                        <input onChange={handleChange} type='text' id='name' value={inputs.name} required></input>
                                        <br />
                                        <label>Apellido</label>
                                        <br />
                                        <input onChange={handleChange} type='text' id='lastname' value={inputs.lastName} required></input>
                                        <br />
                                        <label>Telefono</label>
                                        <br />
                                        <input onChange={handleChange} type='text' id='mobile' value={inputs.mobile} required></input>
                                        <br />
                                        <label>Correo</label>
                                        <br />
                                        <input onChange={handleChange} type='email' id='email' value={inputs.email} required></input>
                                        <br />
                                        <label>Mensaje</label>
                                        <br />
                                        <textarea onChange={handleChange} type='text' id='message' value={inputs.message} required></textarea>
                                        <br />
                                        <div>
                                            <input type='submit' className={contactoStyle.button} />
                                            {form.state === 'loading' ? (
                                                <div>Sending....</div>
                                            ) : form.state === 'error' ? (
                                                <div className={contactoStyle.sent}>Mensaje enviado</div>
                                            ) : (
                                                form.state === 'success' && <div>Sent successfully</div>
                                            )}
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
