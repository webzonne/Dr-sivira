import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import About from '../components/About'
import Contacto from '../components/Contacto'
import BannerNew from '../components/BannerNew'
import Info from '../components/Info'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dr. Sivira</title>
        <meta name="Dr Sivira" content="Pagina del Doctor José Manuel Sivira Cirujano Ortopedista Especialista en Rodilla y Cadera" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Slider/>
        <Info/>
        <BannerNew/>
        <About/>
        <Contacto/>
        <Footer/>
      </main>
    </div>
  )
}
