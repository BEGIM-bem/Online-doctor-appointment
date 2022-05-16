import React from 'react'
import Photo from '../../img/photo.jpg'
import styles from './About.module.css'

function About() {

    return (
        <div>
            <div className={styles.conteiner} >
                <img className={styles.photoIcon} src={Photo} alt=' not find' />

                <div className={styles.text}>
                    <div className={styles.AllText} >

                        <h1 className={styles.title} >О нашем медицинском центре</h1>
                        <p className={styles.text2} > Основателем медицинской клиники «Азмед» является: профессор <strong className={styles.strong}> Махамаджан Гуламович</strong> доктор медицинских наук, профессор-хирург, отличник здравоохранения КР,  c опытом работы более 40 лет. Имеет более 70 научных публикаций, является автором 3-х изобретений и 7 рацпредложений</p>
                        <p className={styles.text2}><strong className={styles.strong}> Миссия ОсОО «Азмед»</strong> – это внедрение в кыргызскую медицинскую практику лучших международных сертифицированных методов лечения и диагностики заболеваний для продления и улучшения качества жизни пациентов на принципах доказательности</p>

                        <p className={styles.text2}><strong className={styles.strong}> Работа на совесть.</strong> Очень важно оправдать доверие пациентов, поэтому мы стремимся превысить ожидания и быть лучше самых строгих требований международных стандартов.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default About;