import React from 'react'
import Image from 'next/image';
import infoStyle from '../styles/Info.module.css';
// IMAGENES
import boxesImage1 from '../assets/image/boxesImage1.jpg';
import boxesClose from '../assets/image/CloseBoxes.png';
export default function BoxesMore1({ boxesClose1 }) {
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
                                <p>Muchas veces tener DOLOR en nuestras articulares, no se debe a caídas, accidentes, golpes etc. Existen otros factores que pueden producirlo, como es el caso del DESGASTE ARTICULAR, el cual es una patología degenerativa de los huesos que comienza por la destrucción o pérdida gradual del cartílago articular, y que afecta no solo a la superficie articular cartilaginosa, sino también a todo el complejo articular. Es por esto que; cuando el cartílago articular se degenera por diferentes causas, aumenta el roce en los extremos de los huesos, incrementando las fuerzas de fricción y empezando la degeneración de las diferentes estructuras de la articulación. Es importante tener en cuenta, que el desgaste articular puede aparecer en distintas articulaciones del cuerpo, sin embargo cuando hablamos de rodilla y cadera, estas constituyen la mayoría de la artrosis articular que sufre el ser humano.<br /><br />
                                    <strong>¿Pero sabias que existen factores que puedan predisponer su aparición?</strong><br /><br />
                                    <ul>
                                        <li>El Sedentarismo.</li>
                                        <li>El Sobrepeso.</li>
                                        <li>El Desequilibrio Mecánico.</li>
                                        <li>El Desequilibrio Metabólico.</li>
                                    </ul>
                                    <br />
                                    Todas esas son causas multifactoriales que se retroalimentan unas a otras, y pueden generan predisposición a padecer ésta y muchas otras enfermedades degenerativas.<br /><br />


                                    <strong>¿Y cuáles son los síntomas?</strong><br /><br />

                                    <strong>El principal síntoma del desgaste articular es:</strong><br /><br />
                                    <ul>
                                        <li>El Dolor: se trata de un dolor inflamatorio difuso en toda la articulación, también como un dolor más concreto en un punto o zona específica.</li>

                                        <li>Rigidez de la articulación afectada: La inflamación y la destrucción de los tejidos va a producir rigidez, especialmente rigidez matutina y cuando la articulación está fría tras un periodo de reposo.</li>

                                        <li>Pérdida de movilidad en la articulación: Producida por la destrucción de los tejidos, y por la liberación de partículas en el espacio articular.</li>

                                        <li>Impotencia Funcional: La impotencia funcional está determinada por el grado de afectación y por la acción de la articulación afectada</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
