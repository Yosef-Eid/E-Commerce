import React from 'react'
import style from './todays.module.css'


export default function Todays() {
  return (
    <div id={style.todays}>

        <div id={style.top}>
            <div></div>
            <h3>Todays</h3>
        </div>

        <div id={style.flash}>
            <h1></h1>
            <div id={style.time}>
                <div id={style.days}>
                    <h3>Days</h3>
                    <h1>03</h1>
                </div>
                <div id={style.hours}>
                    <h3>Hours</h3>
                    <h1>03</h1>
                </div>
                <div id={style.minutes}>
                    <h3>Minutes</h3>
                    <h1>03</h1>
                </div>
                <div id={style.seconds}>
                    <h3>Seconds</h3>
                    <h1>03</h1>
                </div>
            </div>

            <div id={style.scrol}>
            <ion-icon name="chevron-back-outline"></ion-icon>
            <ion-icon name="chevron-forward-outline"></ion-icon>
            </div>
        </div>
    </div>
  )
}
