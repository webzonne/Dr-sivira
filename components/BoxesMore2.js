import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage2 from '../assets/image/boxesImage2.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore2({boxesClose2}) {
    return (
        <div>
            <div className={infoStyle.allContentBoxesMore}>
                <div className={infoStyle.boxesMoreStyle}>

                    <div className={infoStyle.boxesMoreStyleContent}>
                        <div onClick={boxesClose2} className={infoStyle.boxesImgClose}>
                            <Image src={boxesClose} alt='img-close-boxes' />
                        </div>
                        <div className='container'>
                            <div className={infoStyle.contentImgBoxesMore}>
                                <Image src={boxesImage2} alt='Desgaste-Articular' />
                            </div>
                            <div className={infoStyle.titleBoxMore}>
                                <h2>ABORDAJE INFERIOR DE CADERA</h2>
                            </div>
                            <div className={infoStyle.descriptionBoxMore}>
                                <p>El abordaje anterior de cadera es una técnica qué ha ganado más popularidad dentro de los círculos de cirujanos ortopedistas, principalmente en los Estados Unidos, Europa y otras partes del mundo. Dentro de las ventajas qué ofrece este tipo de técnica, se pueden describir: mejor estabilidad de tejidos, menor daño muscular y en general mejor desempeño en comparación con las otras técnicas para artroplastia total de cadera. En pocas palabras este tipo de técnica, permite una adecuada exposición de la articulación de la cadera, visión directa del acetábulo, de su disposición y orientación; con mínimo daño a otras estructuras musculares y tendinosas sin olvidar la posición supina del paciente en la mesa quirúrgica. Aunque tiene indicaciones según la patología y el paciente al igual que los demás abordajes es uno de mis favoritos en especial cuando hago cirugías bilaterales. Si necesitas atención médica no dudes en contactarme qué con gusto te atenderé.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
