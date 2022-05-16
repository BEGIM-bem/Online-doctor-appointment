import React from "react";
import styles from './footer.module.css'


function Footer() {

    return (
        <div className={styles.footer} >
            <div className={styles.footer3} >
                <h1 className={styles.ad} >ТЕЛЕФОНЫ </h1>

                <p className={styles.j}>Регистратура:
                    +996(778)-111-402<br />
                    +996(551)-301-103<br />
                    8000 (для абонентов Beeline звонок бесплатный) </p>
                <p className={styles.j}><br /> Колл центр:<br />
                    +996(552)-206-206</p>
            </div>

            <div className={styles.footer3} >
                <h1 className={styles.ad}>ГРАФИК РАБОТЫ </h1>

                <p className={styles.j}>Поликлиника:
                    По будням 8:00 - 18:00<br />
                    Суббота 8:00 - 14:00<br /> </p>
            </div>

            <div className={styles.footer3} >
                <h1 className={styles.ad}>АДРЕС </h1>

                <p className={styles.j}>Кыргызстан, г. Бишкек, Мкр. Джал-29,<br />
                    ул.Тыналиева д.18<br /> </p>

                <p className={styles.j}>Забор анализов::
                    Ул. Раззакова 33/2 вход со стороны<br />
                    бульвара Эркиндик<br />
                </p>
            </div>

        </div>
    )
}


export default Footer;