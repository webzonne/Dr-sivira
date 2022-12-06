import React from 'react';
import Image from 'next/image'
import footerStyle from '../styles/Footer.module.css';
import logoFooter from '../assets/image/logo-footer.png';
import logoWhatsContact from '../assets/image/whatsapp-contact.png';
import logoGmailWhasappt from '../assets/image/gmail-contact.png';
import logoTiktok from '../assets/image/tiktiok-logo.png';
import logoWhatsapp from '../assets/image/whatsapp-logo.png';
import logoInstagram from '../assets/image/instagram-logo.png'

export default function Footer() {
    return (
        <>
            <div className='container'>
                <div className={footerStyle.contentFooter}>
                    {/* LOGO */}
                    <div className={footerStyle.subdivFooter}>
                        <div className={footerStyle.logoFooterStyle}>
                            <Image src={logoFooter} alt='logo-footer' />
                        </div>
                        <p className={footerStyle.descriptionLogo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt tincidunt sem, sed bibendum diam maximus a. Phasellus </p>
                    </div>
                    {/* CONTACTO */}
                    <div className={footerStyle.subdivFooter}>
                        <h6 className={footerStyle.titleSubdiv}>CONTACTO</h6>
                        <div className={footerStyle.contentContact}>
                            <div className={footerStyle.contentWhasapt}>
                                <Image src={logoWhatsContact} alt='logo-whatsapp-contacto' />
                                <a target="_blank" href='https://walink.co/39ce2a'>+58 412-8051790</a>
                            </div>
                            <div className={footerStyle.contentGmail}>
                                <Image src={logoGmailWhasappt} alt='logo-gmail-contacto' />
                                <a target="_blank" href='mailto:drsivira@gmail.com'>drsivira@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    {/* MAPA DEL SITIO */}
                    <div className={footerStyle.subdivFooter}>
                        <h6 className={footerStyle.titleSubdiv}>MAPA DEL SITIO</h6>
                        <div className={footerStyle.contentMapa}>
                            <a href='#Inicio'><p>Inicio</p></a>
                            <a href='#About'><p>Sobre mi</p></a>
                            <a href='#Contacto'><p>Contacto</p></a>
                        </div>
                    </div>
                    {/* INFORMACION */}
                    <div className={footerStyle.subdivFooter}>
                        <h6 className={footerStyle.titleSubdiv}>INFORMACION</h6>
                        <div className={footerStyle.contentInfo}>
                            <p>Horario de atencion</p>
                            <p>lunes a viernes de:</p>
                            <p>7:30am-12:00pm</p>
                            <p>2:30am-5:00pm</p>
                        </div>
                    </div>
                    {/* REDES SOCIALES */}
                    <div className={footerStyle.subdivFooter}>
                        <h6 className={footerStyle.titleSubdiv}>REDES SOCIALES</h6>
                        <div className={footerStyle.contentRedesS}>
                            <a target="_blank" href='https://www.tiktok.com/@drsivira'>
                                <Image src={logoTiktok} alt='logo-tiktok' />
                            </a>
                            <a target="_blank" href='https://walink.co/39ce2a'>
                                <Image src={logoWhatsapp} alt='logo-whatsapp' />
                            </a>
                            <a target="_blank" href='https://www.instagram.com/drsivira/'>
                                <Image src={logoInstagram} alt='logo-instagram' />
                            </a>
                        </div>
                    </div>
                </div>
                {/* LINEA AZUL */}
                <div className={footerStyle.lineBlue}></div>
                {/* copy-right */}
                <div className={footerStyle.copyrightContent}>
                    <p>DrSivira 2022. Todos los Derechos Reservados</p>
                </div>

            </div>
        </>
    )
}
