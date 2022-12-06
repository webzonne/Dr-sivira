import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage6 from '../assets/image/boxesImage6.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore6({ boxesClose6 }) {
    return (
        <div>
            <div className={infoStyle.allContentBoxesMore}>
                <div className={infoStyle.boxesMoreStyle}>

                    <div className={infoStyle.boxesMoreStyleContent}>
                        <div onClick={boxesClose6} className={infoStyle.boxesImgClose}>
                            <Image src={boxesClose} alt='img-close-boxes' />
                        </div>
                        <div className='container'>
                            <div className={infoStyle.contentImgBoxesMore}>
                                <Image src={boxesImage6} alt='Necrosisavascular' />
                            </div>
                            <div className={infoStyle.titleBoxMore}>
                                <h2>NECROSISAVASCULAR</h2>
                            </div>
                            <div className={infoStyle.descriptionBoxMore}>
                                <p>La Necrosis Avascular es una enfermedad en la que el hueso de la cabeza femoral "muere" a consecuencia de una aliteración en su irrigación sanguínea. Este tipo de enfermedad provoca gran dolor, ya que es justamente la cabeza femoral, la parte redondeada del fémur, la que se articula con el acetábulo de la pelvis y la que soporta el peso del cuerpo. Cuando esto ocurre, el hueso muerto pierde la capacidad de soportar el peso del cuerpo y colapsa (se hunde) con la consiguiente perdida de la esfericidad de la cabeza femoral. El principal síntoma de la necrosis avascular es el dolor, que se presenta en la región inguinal. Sin embargo, en algunas ocasiones el dolor puede ser leve o no estar presente en las etapas iniciales de la enfermedad.<br /><br />
                                    <strong>¿Pero como sabemos si hay presencia de necrosis?</strong><br /><br />
                                    El estudio inicial es una radiografía de pelvis, con ella podemos descartar otras causas de dolor como tumores, artrosis, pinzamiento femoroacetabular, displasia de cadera, etc. Una vez descartadas estas causas, el estudio que corresponde realizar en casos de sospecha de necrosis avascular es una Resonancia Magnética de Pelvis, ya que en ella podremos evaluar ambas caderas. Si necesitas atención médica especializada no dudes en consultarme que con gusto te atenderé.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
