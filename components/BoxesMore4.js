import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage4 from '../assets/image/boxesImage4.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore4({boxesClose4}) {
    return (
        <div>
            <div className={infoStyle.allContentBoxesMore}>
                <div className={infoStyle.boxesMoreStyle}>

                    <div className={infoStyle.boxesMoreStyleContent}>
                        <div onClick={boxesClose4} className={infoStyle.boxesImgClose}>
                            <Image src={boxesClose} alt='img-close-boxes' />
                        </div>
                        <div className='container'>
                            <div className={infoStyle.contentImgBoxesMore}>
                                <Image src={boxesImage4} alt='artroplastia-total-cadera' />
                            </div>
                            <div className={infoStyle.titleBoxMore}>
                                <h2>ARTROPLASTIA TOTAL DE CADERA</h2>
                            </div>
                            <div className={infoStyle.descriptionBoxMore}>
                                <p>La articulación de la cadera es una gran articulación. la cual se compone de dos huesos principales:  una “esfera” en la parte superior del fémur (hueso del muslo) y la cavidad de la pelvis (el acetábulo).<br/><br/>
                            <strong>¿Pero que es un reemplazo total de cadera?</strong><br/><br/>
                            El reemplazo total de cadera es exactamente eso: un procedimiento quirúrgico diseñado para reemplazar los componentes de esta articulación que tanto trabaja. En este tipo de operación se utilizan partes artificiales, para crear una nueva articulación de cadera que funcione como una articulación de cadera natural. El 90% de los pacientes con reemplazos total de cadera, informan haber regresado a sus estilos de vida activos y sin DOLOR. A este tipo de procedimiento quirúrgico se le conoce también como ARTROPLASTIA TOTAL DE CADERA, no es un procedimiento nuevo, pero se han logrado grandes avances en la calidad de los componentes artificiales y en los procedimientos utilizados en la cirugía. Sin duda alguna es una de las cirugías más seguras y efectivas que se realizan en la actualidad.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
