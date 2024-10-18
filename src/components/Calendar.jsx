
import { useEffect, useState } from "react"
import { meses } from "./Meses"
import { currentNumberDays, currentMonthWord, currentYear, checkBisiesto, getDayMonth } from "./getCurrentDate"
import { btnleft, btnright } from "./managebtn"
import CreateMonth from "./CreateMonth"

export default function Calendar () {

    const [selectMonth, setSelectMonth] = useState(currentMonthWord)
    const [numberofDays, setNumberofDays] = useState(currentNumberDays)
    const [selectYear, sestSelectYear] = useState(currentYear)
    const [isToday, setIsToday] = useState(true)
    let years = []
    let lastYear = 2030
   
    for (let myYear = currentYear; myYear <= lastYear; myYear++) {
        years.push(myYear)        
    }

    let number = meses.findIndex(month=> month.mes === selectMonth)
    number += 1
    
    const seleccionMes = (e) => {
        setSelectMonth(e.target.value)
        number = meses.findIndex(day => day.mes === e.target.value)

        if(e.target.value === "Febrero"){
            checkBisiesto(selectYear) ? setNumberofDays(29) : setNumberofDays(28)

        } else {
            setNumberofDays(meses[number].dias)
        }
    }

    const seleccionYear = (e) => {
        const selectedYear = e.target.value
        sestSelectYear(selectedYear)
        number = meses.findIndex(day => day.mes === selectMonth)

        if(checkBisiesto(selectedYear) && selectMonth === "Febrero"){
            setNumberofDays(29)
        } else if (selectMonth==="Febrero") {
            setNumberofDays(28)
        }
    }

    useEffect(() => {
        setSelectMonth(currentMonthWord)
        sestSelectYear(currentYear)
        setIsToday(true)
    }, [])

    let startDay = getDayMonth(selectYear, number)

    const checkToday = () => {
        if(selectMonth === currentMonthWord && selectYear == currentYear) {
            return true
        } else {
            return false
        }

    }
    useEffect(() => {
        setIsToday(checkToday())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectMonth, selectYear])   

    const clickbtnright = () => {
        let [newMonth, newyear] = btnright(selectMonth, selectYear)
        setSelectMonth(newMonth)
        sestSelectYear(newyear)
    }

    const clickbtnleft = () => {
        let [newMonth, newyear] = btnleft(selectMonth, selectYear)
        setSelectMonth(newMonth)
        sestSelectYear(newyear)
    }

    useEffect(() => {
        const inputmonth = document.getElementById("meses")
        const yearInput = document.getElementById("year")
        inputmonth.value = selectMonth
        yearInput.value = selectYear
    }, [selectMonth, selectYear ])

    return (
        <>
            <section>
                <header className="header">
                    <button onClick={(selectYear == 2024 && selectMonth == "Enero") ? undefined : clickbtnleft} className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-left" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z" />
                    </svg>
                    </button>
                        <select onChange={seleccionMes} name="meses" id="meses" defaultValue={currentMonthWord}>
                            {
                                meses.map((mes, index) => (
                                    <option key={index} value={mes.mes}>{mes.mes}</option>
                                ))
                            }
                        </select>
                        <select onChange={seleccionYear} defaultValue={currentYear} name="year" id="year">
                            {   
                                years.map((thisYear, id) => (
                                    <option key={id} value={thisYear}>{thisYear}</option>
                                ))
                            }
                        </select>
                        <button onClick={(selectYear == lastYear && selectMonth == "Diciembre") ? undefined : clickbtnright} className="btn">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-big-right" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff2825" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z" />
                        </svg>
                        </button>
                </header>
                
                {
                    selectMonth && <CreateMonth 
                                        mesSeleccionado={selectMonth}
                                        diasDelMes={numberofDays}
                                        startDay={startDay - 1}
                                        isToday={isToday}
                                        selectMonth={selectMonth}
                                        selectYear={selectYear}
                                    />
                }

                <section className="legend">
                    <div className="legend__info">
                        <div className="info__color mañana"></div><p>Turno de mañana</p>
                    </div>
                    <div className="legend__info">
                        <div className="info__color tarde"></div><p>Turno de tarde</p>
                    </div>
                    <div className="legend__info">
                        <div className="info__color descanso"></div><p>Descanso</p>
                    </div>
                    <div className="legend__info">
                        <div className="info__color vacaciones"></div><p>Vacaciones</p>
                    </div>
                </section>

            </section>
        </>
    )

}