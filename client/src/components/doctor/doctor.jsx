import React from 'react';
import styles from './doctoe.module.css'
import { data } from './data';


function Doctor() {

    return (
        <div>
            <h1 className={styles.title} >Наши специальисты</h1>

            <div className={styles.allContent} >
                {
                    data.map(item =>
                        <div className={styles.content}>
                            <img className={styles.content_img} src={item.img} alt='not find' />
                            <div className={styles.textAll} >
                                <p>{item.name}</p>
                                <p className={styles.d}>{item.doctor}</p>
                                <p> Врачебный стаж: {item.workYear}</p>

                            </div>


                        </div>

                    )
                }
            </div>

        </div>
    )
}


export default Doctor