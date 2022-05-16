import React from 'react'
import styles from './styles/App.module.css'
import Icon from './img/icon.png'
import About from './components/About/About'
import Ysligi from './components/yslygi/yslygi'
import Doctor from './components/doctor/doctor'
import Zapiz from './components/zapiz/zapiz'
import Footer from './components/footer/footer'

function App() {

    return (
        <div  >
            <div className={styles.content} >
                <img className={styles.Icon} src={Icon} alt='not find' />
                <div className={styles.fon}>
                    <h1 className={styles.title} >Онлайн запись на прием  к врачу</h1>
                    <hr className={styles.line} />
                    <span className={styles.fon_text} >Сэкономьте  свое время!</span>
                </div>
                <a href="#anchor1" className={styles.a} > <button className={styles.fon_content_button}>Записаться к врачу </button> </a>
            </div>


            <About />
            <Ysligi />
            <Doctor />
            <Zapiz />
            <Footer />
        </div>
    )
}

export default App