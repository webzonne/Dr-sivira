import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage1 from '../assets/image/boxesImage1.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore1({boxesClose1}) {
    return (
        <div>
            <div className={infoStyle.allContentBoxesMore}>
                <div className={infoStyle.boxesMoreStyle}>

                    <div className={infoStyle.boxesMoreStyleContent}>
                        <div onClick={boxesClose1} className={infoStyle.boxesImgClose}>
                            <Image src={boxesClose} alt='img-close-boxes' />
                        </div>
                        <div className='container'>
                            <div className={infoStyle.contentImgBoxesMore}>
                                <Image src={boxesImage1} alt='Desgaste-Articular' />
                            </div>
                            <div className={infoStyle.titleBoxMore}>
                                <h2>DESGASTE ARTICULAR</h2>
                            </div>
                            <div className={infoStyle.descriptionBoxMore}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut eleifend leo. Vivamus dolor augue, ultrices ac nibh vitae, tempor volutpat tortor. Nam eget nibh est.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
