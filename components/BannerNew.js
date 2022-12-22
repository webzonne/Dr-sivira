import React from 'react'
import Image from 'next/image';
import bannerNewStyle from '../styles/BannerNew.module.css';
import bgBanner from '../public/fondo-banner.jpg';
import comillasBanner from '../assets/image/comillas-banner.png';
import circuloBanner from '../assets/image/circulo-banner.png';
export default function Banner() {
  return (
    <>
        <div className={bannerNewStyle.bannerContent}
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
            <div className={bannerNewStyle.boxText}>
                <div className={bannerNewStyle.contentComillas}>
                    <Image src={comillasBanner} alt='icon-comillas' />
                </div>
                <h2>Cirujano de cadera y rodilla con calidad experiencia y humanidad</h2>
                <div className={bannerNewStyle.contentCirculo}>
                    <Image src={circuloBanner} alt='icon-circulo' />
                </div>
            </div>
        </div>
        </div>
    </>
  )
}