import React from 'react';
import aboutStyle from '../styles/About.module.css';
import Image from 'next/image';
import perfilAbout from '../assets/image/perfil-conocenos.png';
import comillasAbout from '../assets/image/comillas-about.png';

export default function About() {
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
                                        <Image src={perfilAbout} alt='perfil-about' />
                                    </div>
                                </div>
                                <div className='col-md-12 col-xl-6'>
                                    <div className={aboutStyle.cuadroTexto}>
                                        <div className={aboutStyle.contentComillas}>
                                            <Image src={comillasAbout} alt='comillas-about' />
                                        </div>
                                        <h4>Dr. Jose Manuel Sivira</h4>
                                        <div className={aboutStyle.lineAzul}></div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in laoreet purus. Ut pretium nulla sed felis finibus dictum. In hac habitasse platea dictumst. Etiam a orci quis purus fermentum interdum. Nulla ut volutpat lectus. Nunc condimentum odio sapien, sed iaculis velit tempus ut. Mauris luctus tincidunt ante sit amet convallis. Mauris dignissim vel sem vel tempus. Aliquam ultrices nec nisi non congue. Ut laoreet sapien magna, nec aliquam nibh elementum ut. Fusce eu risus vitae mauris blandit consequat. Suspendisse maximus nulla est. Nulla velit nibh, posuere ut tincidunt sit amet, pharetra at velit. Nunc pulvinar egestas nibh, tempor consectetur velit finibus et. Fusce luctus tellus nec sodales interdum. Suspendisse ultricies orci tellus, in condimentum massa laoreet sit amet.</p>
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
