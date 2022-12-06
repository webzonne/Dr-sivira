import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage3 from '../assets/image/boxesImage3.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore3({boxesClose3}) {
    return (
        <div>
            <div className={infoStyle.allContentBoxesMore}>
                <div className={infoStyle.boxesMoreStyle}>

                    <div className={infoStyle.boxesMoreStyleContent}>
                        <div onClick={boxesClose3} className={infoStyle.boxesImgClose}>
                            <Image src={boxesClose} alt='img-close-boxes' />
                        </div>
                        <div className='container'>
                            <div className={infoStyle.contentImgBoxesMore}>
                                <Image src={boxesImage3} alt='Desgaste-Articular' />
                            </div>
                            <div className={infoStyle.titleBoxMore}>
                                <h2>GONARTROSIS (ARTROSIS DE RODILLA)</h2>
                            </div>
                            <div className={infoStyle.descriptionBoxMore}>
                                <p>La Gonartrosis es un término que se refiere a la enfermedad degenerativa de la articulación de la rodilla; va ligada al término de osteoartritis, un concepto más general que involucra desgaste articular en el cuerpo humano. En la gonartrosis, el cartílago articular se ve involucrado, haciéndose cada vez más delgado y con una muy pobre capacidad de regeneración, ya que es un tejido con muy poco aporte sanguíneo. Los signos y síntomas se relacionan con el proceso degenerativo e inflamatorio y varían de persona en persona siendo los más frecuentes: dolor, rigidez articular, aumento de volumen, limitación funcional para caminar, agacharse o subir y bajar escaleras. El tratamiento es multidisciplinario y puede ir desde el manejo farmacológico oral, la inyección de fármacos o ácido hialurónico en el espacio articular de la rodilla, plantillas, ortesis hasta la intervención quirúrgica en casos seleccionados. El manejo de rehabilitación es una de las formas más efectivas de tratamiento a corto, mediano y largo plazo, sobre todo cuando se combina con otras formas de tratamiento (fármacos y/o infiltraciones) involucra la realización de ejercicios específicos para cada individuo y aplicación de medios físicos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
