import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage5 from '../assets/image/boxesImage5.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore5({boxesClose5}) {
    return (
        <div>
            <div className={infoStyle.allContentBoxesMore}>
                <div className={infoStyle.boxesMoreStyle}>

                    <div className={infoStyle.boxesMoreStyleContent}>
                        <div onClick={boxesClose5} className={infoStyle.boxesImgClose}>
                            <Image src={boxesClose} alt='img-close-boxes' />
                        </div>
                        <div className='container'>
                            <div className={infoStyle.contentImgBoxesMore}>
                                <Image src={boxesImage5} alt='artroplastia-total-cadera' />
                            </div>
                            <div className={infoStyle.titleBoxMore}>
                                <h2>ARTROPLASTIA TOTAL DE RODILLA</h2>
                            </div>
                            <div className={infoStyle.descriptionBoxMore}>
                                <p>La artroplastia total de rodilla, también conocido como reemplazo total de rodilla, es una cirugía ortopédica con una tasa de éxitos muy alta, los pacientes consiguen resultados de buenos a excelentes, el cual produce una gran satisfacción al paciente y al cirujano. Este tipo de cirugía ayuda de forma considerable a mejorar la función, eliminar el dolor y a proporcionar una mejor calidad de vida a los pacientes afectados de graves alteraciones degenerativas en dicha articulación. La misma consiste en reemplazar el cartílago y el hueso dañado de la articulación de la rodilla. Luego, se colocan piezas artificiales en la misma. El éxito de la cirugía pasará necesariamente por la labor del paciente de hacer ejercicios, teniendo en cuenta las precauciones recomendadas para su rodilla, sin olvidar el tener un estilo de vida sano. Recuerda que vivir con DOLOR, no es vivir. Es por ello que si necesitas atención médica especializada no dudes en contactarme que con gusto te atenderé.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
