import React from 'react'
import bannerStyle from '../styles/Banner.module.css';
export default function Banner() {
  return (
    <>
        <div className={bannerStyle.bannerContent}>
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
                <span className={bannerStyle.number}>25+</span>
                    <br/>
                    <br/>
                    <span className={bannerStyle.text}>AÑOS DE EXPERIENCIA</span>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
