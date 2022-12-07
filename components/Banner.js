import React from 'react'
import bannerStyle from '../styles/Banner.module.css';
import bgBanner from '../public/fondo-banner.jpg'
export default function Banner() {
  return (
    <>
        <div className={bannerStyle.bannerContent}
        style={{
            backgroundImage: `url(${bgBanner.src})`,
            width: '100%',
            height: '100%',
            position:'relative',
            zIndex:2,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            paddingTop: '65px',
            paddingBottom: '62px',
            marginBottom: '200px'
        }}
        >
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-sm-12 col-md-4 col-xl-4 text-center'>
                    <span className={bannerStyle.number}>230+</span>
                    <br/>
                    <br/>
                    <span className={bannerStyle.text}>PACIENTES ATENDIDOS</span>
                </div>
                <div className='col-sm-12 col-md-4 col-xl-4 text-center'>
                    <span className={bannerStyle.number}>100%</span>
                    <br/>
                    <br/>
                    <span className={bannerStyle.text}>CALIDAD</span>
                </div>
                <div className='col-sm-12 col-md-4 col-xl-4 text-center'>
                <span className={bannerStyle.number}>100%</span>
                    <br/>
                    <br/>
                    <span className={bannerStyle.text}>EXPERIENCIA EN REEMPLAZO ARTICULAR</span>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
