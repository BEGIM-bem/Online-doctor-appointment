import React, { useEffect, useState } from 'react'
import styles from './zapiz.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { appDate } from '../../Api/api.js'
import stylesTable from './Table.module.css'
import { getDate } from '../../Api/api';



function Zapiz() {
    const [moviewName, setMoviewName] = useState('')
    const [review, setReview] = useState('')
    const [text, setText] = useState('')
    const [time, setTime] = useState('')
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getDate())

    }, [])
    const allDate = useSelector(state => state.memory)
    console.log("AllDate: ", allDate)


    const sumbitResult = (e) => {
        e.preventDefault();
        dispatch(appDate(moviewName, review, text, time, name, date))

    }



    return (
        <div className={styles.AllContent} >

            <div className={styles.formCon} >

                <p id="anchor1" className={styles.title}>Запишитесь на прием к врачу</p>

                {/* <input type="file" onChange={saveFile} /> */}
                {/* <button onClick={uploadFile}>Upload</button> */}

                <p>Введите ваша имя: </p>
                <input type='text' name='movieName' className={styles.input}
                    onChange={(e) => { setMoviewName(e.target.value) }} />

                <p>Введите ваш телефон:  </p>
                <input type='number' name='review' className={styles.input1}
                    onChange={(e) => { setReview(e.target.value) }} />

                <p> На что вы жалуетесь?:  </p>
                <input type='text' name='review' className={styles.input1}
                    onChange={(e) => { setText(e.target.value) }} />

                <p> Введите время:  </p>
                <input type='text' name='review' className={styles.input1}
                    onChange={(e) => { setTime(e.target.value) }} />

                <p>Имя врача:  </p>
                <input type='text' name='review' className={styles.input1}
                    onChange={(e) => { setName(e.target.value) }} />

                <p> Введите дату:  </p>
                <input type='text' name='review' className={styles.input1}
                    onChange={(e) => { setDate(e.target.value) }} />


                <button className={styles.sumbit} onClick={sumbitResult}>Записаться на приём</button>

            </div>


            <div className={stylesTable.allTabl} >

                <table className={stylesTable.table} >
                    <thead>
                        <tr>
                            <td className={stylesTable.head}  >Id</td>
                            <td className={stylesTable.head} >Имя врача</td>
                            <td className={stylesTable.head}  >Дата</td>
                            <td className={stylesTable.head}  >Время</td>

                        </tr>
                    </thead>


                    <tbody className={stylesTable.tbody} >

                        {
                            allDate.date.map((item, index) => (
                                <tr key={item.id}
                                    className={stylesTable.table__texst}  >
                                    <td className={stylesTable.d}>{index + 1}</td>
                                    <td className={stylesTable.d}>{item.time}</td>
                                    <td className={stylesTable.d}>{item.name} </td>
                                    <td className={stylesTable.d}>{item.text}</td>

                                    <td className={stylesTable.d}>{item.salary}</td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Zapiz