import React from "react";
import styles from './yslygi.module.css'
import { data } from "./data";

function Ysligi() {

    return (
        <div>
            <h1 className={styles.title} >Наши услуги</h1>

            <div className={styles.All_conteiner} >
                {
                    data.map(item =>
                        <div className={styles.conteiner} >
                            <h2 className={styles.conteiner__title}>{item.title}</h2>
                            <p className={styles.conteiner__text}>{item.text}</p>
                        </div>

                    )
                }


            </div>

        </div >
    )
}

export default Ysligi